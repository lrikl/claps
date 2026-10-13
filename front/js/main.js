function animateValue(el, duration = 750) {
	const target = +el.dataset.target
	const suffix = el.dataset.suffix || ''
	let start = 0
	const startTime = performance.now()

	function update(currentTime) {
		const progress = Math.min((currentTime - startTime) / duration, 1)
		const value = Math.floor(progress * target)

		el.textContent = value + suffix

		if (progress < 1) {
			requestAnimationFrame(update)
		} else {
			el.textContent = target + suffix
		}
	}

	requestAnimationFrame(update)
}

function appearAnimItem() {
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				const item = entry.target
				const delay = (index + 1) * 200

				setTimeout(() => {
					item.classList.add('animate')

					const valueEl = item.querySelector('.commissions__item-progress-value')
					if (valueEl) {
						animateValue(valueEl)
					}
				}, delay)

				observer.unobserve(item)
			}
		})
	}, {
		threshold: 0.6
	})

	document.querySelectorAll('.anim-item').forEach(el => {
		observer.observe(el)
	})
}

appearAnimItem()
