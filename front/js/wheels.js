function initWheels() {
  document.querySelectorAll('.wheels').forEach(section => {
    const viewport = section.querySelector('.wheels__wrapper')
    const items = [...section.querySelectorAll('.wheels__item')]
    const controls = section.querySelector('.wheels__controls')
    const previous = section.querySelector('.wheels__btn_prev')
    const next = section.querySelector('.wheels__btn_next')
    const pagination = section.querySelector('.wheels__pagination')
    if (!viewport || !items.length) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let index = 0
    let frame = 0
    const position = i => items[i].offsetLeft - items[0].offsetLeft
    function update() {
      const scrollable = viewport.scrollWidth > viewport.clientWidth + 2
      controls.hidden = !scrollable
      index = items.reduce((nearest, item, i) =>
        Math.abs(position(i) - viewport.scrollLeft) < Math.abs(position(nearest) - viewport.scrollLeft) ? i : nearest, 0)
      previous.disabled = viewport.scrollLeft <= 2
      next.disabled = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 2
      pagination.innerHTML = `<span>${index + 1}</span> / ${items.length}`
    }
    function go(i) {
      const target = Math.max(0, Math.min(items.length - 1, i))
      viewport.scrollTo({ left: position(target), behavior: reduced.matches ? 'auto' : 'smooth' })
    }
    previous.addEventListener('click', () => go(index - 1))
    next.addEventListener('click', () => go(index + 1))
    viewport.addEventListener('scroll', () => {
      if (!frame) frame = requestAnimationFrame(() => { frame = 0; update() })
    }, { passive: true })
    viewport.addEventListener('keydown', event => {
      if (event.target !== viewport) return
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault()
        go(index + (event.key === 'ArrowRight' ? 1 : -1))
      }
    })
    function resize() {
      viewport.scrollTo({ left: position(index), behavior: 'auto' })
      update()
    }
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(viewport)
    else window.addEventListener('resize', resize)
    items.forEach((card, i) => {
      const front = card.querySelector('.wheels__item-front')
      const back = card.querySelector('.wheels__item-back')
      const open = card.querySelector('.wheels__item-btn')
      const close = card.querySelector('.wheels__item-back-btn')
      back.id = `wheel-terms-${i + 1}`
      open.setAttribute('aria-controls', back.id)
      function flip(show, focus = true) {
        card.classList.toggle('is-flipped', show)
        front.inert = show
        back.inert = !show
        front.setAttribute('aria-hidden', String(show))
        back.setAttribute('aria-hidden', String(!show))
        open.setAttribute('aria-expanded', String(show))
        if (focus) (show ? close : open).focus({ preventScroll: true })
      }
      open.addEventListener('click', () => flip(true))
      close.addEventListener('click', () => flip(false))
      card.addEventListener('keydown', event => {
        if (event.key === 'Escape' && card.classList.contains('is-flipped')) {
          event.preventDefault()
          flip(false)
        }
      })
      flip(false, false)
    })
    update()
  })
}

function initFortuneWheel() {
	document.querySelectorAll('.fortune').forEach(section => {
		const wheel = section.querySelector('.fortune__disk')
		const sectors = [...section.querySelectorAll('.fortune__sector')]
		const spinBtn = section.querySelector('.fortune__btn')
		const centerBtn = section.querySelector('.fortune__center')
		const restartBtn = section.querySelector('.fortune__restart')
		const dialog = section.querySelector('.fortune__dialog')
		const continueBtn = section.querySelector('.fortune__continue')
		const attempts = section.querySelector('.fortune__attempts')
		const status = section.querySelector('.fortune__status')
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
		const totalSpins = 2
		let completedSpins = 0
		let isSpinning = false
		let rotation = 0
		let cash = 0
		let freeSpins = 0
		let animation = null
		let previousOverflow = ''

		if (!wheel || !sectors.length || !spinBtn || !dialog) return

		function updateView() {
			const remaining = totalSpins - completedSpins
			spinBtn.disabled = centerBtn.disabled = isSpinning || remaining === 0
			spinBtn.textContent = isSpinning ? 'Spinning…' : remaining === 0 ? 'Both spins complete' : completedSpins ? 'Spin again' : 'Spin the wheel'
			centerBtn.querySelector('b').textContent = isSpinning ? '…' : remaining === 0 ? 'Done' : 'Spin'
			attempts.textContent = isSpinning ? 'The wheel is spinning…' : remaining === 0 ? 'Both spins complete. Your final bonus is ready.' : `${remaining} ${remaining === 1 ? 'spin' : 'spins'} available`
			restartBtn.hidden = remaining !== 0
			section.querySelectorAll('.fortune__step').forEach((step, index) => {
				step.classList.toggle('is-current', index === completedSpins)
				step.classList.toggle('is-done', index < completedSpins)
			})
		}

		function showResult() {
			const firstSpin = completedSpins === 1
			section.querySelector('.fortune__result-step').textContent = firstSpin ? 'First spin complete' : 'Second spin complete'
			section.querySelector('.fortune__result-title').textContent = firstSpin ? 'Nice first spin.' : 'That’s your bonus.'
			section.querySelector('.fortune__prize').innerHTML = cash.toLocaleString('en-US').replace(/,/g, ' ') + ' <span>₴</span>'
			const extra = section.querySelector('.fortune__extra')
			extra.hidden = freeSpins === 0
			extra.textContent = `+ ${freeSpins} free spins`
			section.querySelector('.fortune__result-detail').textContent = firstSpin ? 'Your first bonus is in. You have one more spin.' : `The second spin adds ${freeSpins} free spins to your first ${cash.toLocaleString('en-US')} ₴ bonus.`
			section.querySelector('.fortune__prize-img').src = firstSpin ? 'img/fortune-coin.svg' : 'img/fortune-gift.svg'
			continueBtn.textContent = firstSpin ? 'Spin again' : 'Restart demo'
			previousOverflow = document.body.style.overflow
			document.body.style.overflow = 'hidden'
			dialog.showModal()
			continueBtn.focus()
		}

		async function spinWheel() {
			if (isSpinning || completedSpins >= totalSpins) return
			const sectorIndex = sectors.findIndex(sector => Number(sector.dataset.spin) === completedSpins + 1)
			if (sectorIndex === -1) {
				status.textContent = 'The prize sector is unavailable.'
				return
			}
			const sector = sectors[sectorIndex]
			const targetAngle = (360 - sectorIndex * 360 / sectors.length) % 360
			const finalAngle = rotation + 1440 + ((targetAngle - rotation % 360 + 360) % 360)
			isSpinning = true
			section.classList.add('is-spinning')
			updateView()

			try {
				if (typeof wheel.animate === 'function') {
					animation = wheel.animate([
						{ transform: `rotate(${rotation}deg)` },
						{ transform: `rotate(${finalAngle}deg)` }
					], {
						duration: reducedMotion.matches ? 120 : Number(section.dataset.duration) || 4300,
						easing: 'cubic-bezier(.12,.66,.12,1)',
						fill: 'forwards'
					})
					await animation.finished
					wheel.style.transform = `rotate(${finalAngle}deg)`
					animation.cancel()
					animation = null
				} else {
					wheel.style.transform = `rotate(${finalAngle}deg)`
				}
				rotation = finalAngle
				if (sector.dataset.kind === 'cash') cash += Number(sector.dataset.value)
				else freeSpins += Number(sector.dataset.value)
				completedSpins++
				status.textContent = `Spin ${completedSpins}: ${sector.dataset.label}.`
				showResult()
			} catch (error) {
				if (error.name !== 'AbortError') status.textContent = 'The spin could not finish. Please try again.'
			} finally {
				isSpinning = false
				section.classList.remove('is-spinning')
				updateView()
			}
		}

		function resetWheel() {
			if (isSpinning) return
			animation?.cancel()
			animation = null
			completedSpins = rotation = cash = freeSpins = 0
			wheel.style.transform = 'rotate(0deg)'
			status.textContent = 'Demo restarted. Two spins available.'
			updateView()
			spinBtn.focus()
		}

		spinBtn.addEventListener('click', spinWheel)
		centerBtn.addEventListener('click', spinWheel)
		restartBtn.addEventListener('click', resetWheel)
		section.querySelector('.fortune__close').addEventListener('click', () => dialog.close())
		continueBtn.addEventListener('click', () => {
			dialog.close()
			if (completedSpins < totalSpins) spinWheel()
			else resetWheel()
		})
		dialog.addEventListener('click', event => {
			if (event.target !== dialog) return
			const bounds = dialog.getBoundingClientRect()
			if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close()
		})
		dialog.addEventListener('close', () => {
			document.body.style.overflow = previousOverflow
			if (!isSpinning) (completedSpins === totalSpins ? restartBtn : spinBtn).focus()
		})
		window.addEventListener('pagehide', () => animation?.cancel())
		updateView()
	})
}

function initProjectWheels() {
	initWheels()
	initFortuneWheel()
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initProjectWheels)
else initProjectWheels()
