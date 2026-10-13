"use strict";

function animateValue(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 750;
  var target = +el.dataset.target;
  var suffix = el.dataset.suffix || '';
  var start = 0;
  var startTime = performance.now();
  function update(currentTime) {
    var progress = Math.min((currentTime - startTime) / duration, 1);
    var value = Math.floor(progress * target);
    el.textContent = value + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }
  requestAnimationFrame(update);
}
function appearAnimItem() {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry, index) {
      if (entry.isIntersecting) {
        var item = entry.target;
        var delay = (index + 1) * 200;
        setTimeout(function () {
          item.classList.add('animate');
          var valueEl = item.querySelector('.commissions__item-progress-value');
          if (valueEl) {
            animateValue(valueEl);
          }
        }, delay);
        observer.unobserve(item);
      }
    });
  }, {
    threshold: 0.6
  });
  document.querySelectorAll('.anim-item').forEach(function (el) {
    observer.observe(el);
  });
}
appearAnimItem();
"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function initWheels() {
  document.querySelectorAll('.wheels').forEach(function (section) {
    var viewport = section.querySelector('.wheels__wrapper');
    var items = _toConsumableArray(section.querySelectorAll('.wheels__item'));
    var controls = section.querySelector('.wheels__controls');
    var previous = section.querySelector('.wheels__btn_prev');
    var next = section.querySelector('.wheels__btn_next');
    var pagination = section.querySelector('.wheels__pagination');
    if (!viewport || !items.length) return;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var index = 0;
    var frame = 0;
    var position = function position(i) {
      return items[i].offsetLeft - items[0].offsetLeft;
    };
    function update() {
      var scrollable = viewport.scrollWidth > viewport.clientWidth + 2;
      controls.hidden = !scrollable;
      index = items.reduce(function (nearest, item, i) {
        return Math.abs(position(i) - viewport.scrollLeft) < Math.abs(position(nearest) - viewport.scrollLeft) ? i : nearest;
      }, 0);
      previous.disabled = viewport.scrollLeft <= 2;
      next.disabled = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 2;
      pagination.innerHTML = "<span>".concat(index + 1, "</span> / ").concat(items.length);
    }
    function go(i) {
      var target = Math.max(0, Math.min(items.length - 1, i));
      viewport.scrollTo({
        left: position(target),
        behavior: reduced.matches ? 'auto' : 'smooth'
      });
    }
    previous.addEventListener('click', function () {
      return go(index - 1);
    });
    next.addEventListener('click', function () {
      return go(index + 1);
    });
    viewport.addEventListener('scroll', function () {
      if (!frame) frame = requestAnimationFrame(function () {
        frame = 0;
        update();
      });
    }, {
      passive: true
    });
    viewport.addEventListener('keydown', function (event) {
      if (event.target !== viewport) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        go(index + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    function resize() {
      viewport.scrollTo({
        left: position(index),
        behavior: 'auto'
      });
      update();
    }
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(viewport);else window.addEventListener('resize', resize);
    items.forEach(function (card, i) {
      var front = card.querySelector('.wheels__item-front');
      var back = card.querySelector('.wheels__item-back');
      var open = card.querySelector('.wheels__item-btn');
      var close = card.querySelector('.wheels__item-back-btn');
      back.id = "wheel-terms-".concat(i + 1);
      open.setAttribute('aria-controls', back.id);
      function flip(show) {
        var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        card.classList.toggle('is-flipped', show);
        front.inert = show;
        back.inert = !show;
        front.setAttribute('aria-hidden', String(show));
        back.setAttribute('aria-hidden', String(!show));
        open.setAttribute('aria-expanded', String(show));
        if (focus) (show ? close : open).focus({
          preventScroll: true
        });
      }
      open.addEventListener('click', function () {
        return flip(true);
      });
      close.addEventListener('click', function () {
        return flip(false);
      });
      card.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && card.classList.contains('is-flipped')) {
          event.preventDefault();
          flip(false);
        }
      });
      flip(false, false);
    });
    update();
  });
}
function initFortuneWheel() {
  document.querySelectorAll('.fortune').forEach(function (section) {
    var wheel = section.querySelector('.fortune__disk');
    var sectors = _toConsumableArray(section.querySelectorAll('.fortune__sector'));
    var spinBtn = section.querySelector('.fortune__btn');
    var centerBtn = section.querySelector('.fortune__center');
    var restartBtn = section.querySelector('.fortune__restart');
    var dialog = section.querySelector('.fortune__dialog');
    var continueBtn = section.querySelector('.fortune__continue');
    var attempts = section.querySelector('.fortune__attempts');
    var status = section.querySelector('.fortune__status');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var totalSpins = 2;
    var completedSpins = 0;
    var isSpinning = false;
    var rotation = 0;
    var cash = 0;
    var freeSpins = 0;
    var animation = null;
    var previousOverflow = '';
    if (!wheel || !sectors.length || !spinBtn || !dialog) return;
    function updateView() {
      var remaining = totalSpins - completedSpins;
      spinBtn.disabled = centerBtn.disabled = isSpinning || remaining === 0;
      spinBtn.textContent = isSpinning ? 'Spinning…' : remaining === 0 ? 'Both spins complete' : completedSpins ? 'Spin again' : 'Spin the wheel';
      centerBtn.querySelector('b').textContent = isSpinning ? '…' : remaining === 0 ? 'Done' : 'Spin';
      attempts.textContent = isSpinning ? 'The wheel is spinning…' : remaining === 0 ? 'Both spins complete. Your final bonus is ready.' : "".concat(remaining, " ").concat(remaining === 1 ? 'spin' : 'spins', " available");
      restartBtn.hidden = remaining !== 0;
      section.querySelectorAll('.fortune__step').forEach(function (step, index) {
        step.classList.toggle('is-current', index === completedSpins);
        step.classList.toggle('is-done', index < completedSpins);
      });
    }
    function showResult() {
      var firstSpin = completedSpins === 1;
      section.querySelector('.fortune__result-step').textContent = firstSpin ? 'First spin complete' : 'Second spin complete';
      section.querySelector('.fortune__result-title').textContent = firstSpin ? 'Nice first spin.' : 'That’s your bonus.';
      section.querySelector('.fortune__prize').innerHTML = cash.toLocaleString('en-US').replace(/,/g, ' ') + ' <span>₴</span>';
      var extra = section.querySelector('.fortune__extra');
      extra.hidden = freeSpins === 0;
      extra.textContent = "+ ".concat(freeSpins, " free spins");
      section.querySelector('.fortune__result-detail').textContent = firstSpin ? 'Your first bonus is in. You have one more spin.' : "The second spin adds ".concat(freeSpins, " free spins to your first ").concat(cash.toLocaleString('en-US'), " \u20B4 bonus.");
      section.querySelector('.fortune__prize-img').src = firstSpin ? 'img/fortune-coin.svg' : 'img/fortune-gift.svg';
      continueBtn.textContent = firstSpin ? 'Spin again' : 'Restart demo';
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
      continueBtn.focus();
    }
    function spinWheel() {
      return _spinWheel.apply(this, arguments);
    }
    function _spinWheel() {
      _spinWheel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var sectorIndex, sector, targetAngle, finalAngle, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!(isSpinning || completedSpins >= totalSpins)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              sectorIndex = sectors.findIndex(function (sector) {
                return Number(sector.dataset.spin) === completedSpins + 1;
              });
              if (!(sectorIndex === -1)) {
                _context.n = 2;
                break;
              }
              status.textContent = 'The prize sector is unavailable.';
              return _context.a(2);
            case 2:
              sector = sectors[sectorIndex];
              targetAngle = (360 - sectorIndex * 360 / sectors.length) % 360;
              finalAngle = rotation + 1440 + (targetAngle - rotation % 360 + 360) % 360;
              isSpinning = true;
              section.classList.add('is-spinning');
              updateView();
              _context.p = 3;
              if (!(typeof wheel.animate === 'function')) {
                _context.n = 5;
                break;
              }
              animation = wheel.animate([{
                transform: "rotate(".concat(rotation, "deg)")
              }, {
                transform: "rotate(".concat(finalAngle, "deg)")
              }], {
                duration: reducedMotion.matches ? 120 : Number(section.dataset.duration) || 4300,
                easing: 'cubic-bezier(.12,.66,.12,1)',
                fill: 'forwards'
              });
              _context.n = 4;
              return animation.finished;
            case 4:
              wheel.style.transform = "rotate(".concat(finalAngle, "deg)");
              animation.cancel();
              animation = null;
              _context.n = 6;
              break;
            case 5:
              wheel.style.transform = "rotate(".concat(finalAngle, "deg)");
            case 6:
              rotation = finalAngle;
              if (sector.dataset.kind === 'cash') cash += Number(sector.dataset.value);else freeSpins += Number(sector.dataset.value);
              completedSpins++;
              status.textContent = "Spin ".concat(completedSpins, ": ").concat(sector.dataset.label, ".");
              showResult();
              _context.n = 8;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              if (_t.name !== 'AbortError') status.textContent = 'The spin could not finish. Please try again.';
            case 8:
              _context.p = 8;
              isSpinning = false;
              section.classList.remove('is-spinning');
              updateView();
              return _context.f(8);
            case 9:
              return _context.a(2);
          }
        }, _callee, null, [[3, 7, 8, 9]]);
      }));
      return _spinWheel.apply(this, arguments);
    }
    function resetWheel() {
      var _animation;
      if (isSpinning) return;
      (_animation = animation) === null || _animation === void 0 || _animation.cancel();
      animation = null;
      completedSpins = rotation = cash = freeSpins = 0;
      wheel.style.transform = 'rotate(0deg)';
      status.textContent = 'Demo restarted. Two spins available.';
      updateView();
      spinBtn.focus();
    }
    spinBtn.addEventListener('click', spinWheel);
    centerBtn.addEventListener('click', spinWheel);
    restartBtn.addEventListener('click', resetWheel);
    section.querySelector('.fortune__close').addEventListener('click', function () {
      return dialog.close();
    });
    continueBtn.addEventListener('click', function () {
      dialog.close();
      if (completedSpins < totalSpins) spinWheel();else resetWheel();
    });
    dialog.addEventListener('click', function (event) {
      if (event.target !== dialog) return;
      var bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', function () {
      document.body.style.overflow = previousOverflow;
      if (!isSpinning) (completedSpins === totalSpins ? restartBtn : spinBtn).focus();
    });
    window.addEventListener('pagehide', function () {
      var _animation2;
      return (_animation2 = animation) === null || _animation2 === void 0 ? void 0 : _animation2.cancel();
    });
    updateView();
  });
}
function initProjectWheels() {
  initWheels();
  initFortuneWheel();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initProjectWheels);else initProjectWheels();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJ3aGVlbHMuanMiXSwibmFtZXMiOlsiYW5pbWF0ZVZhbHVlIiwiZWwiLCJkdXJhdGlvbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRhcmdldCIsImRhdGFzZXQiLCJzdWZmaXgiLCJzdGFydCIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwidXBkYXRlIiwiY3VycmVudFRpbWUiLCJwcm9ncmVzcyIsIk1hdGgiLCJtaW4iLCJ2YWx1ZSIsImZsb29yIiwidGV4dENvbnRlbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhcHBlYXJBbmltSXRlbSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaW5kZXgiLCJpc0ludGVyc2VjdGluZyIsIml0ZW0iLCJkZWxheSIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ2YWx1ZUVsIiwicXVlcnlTZWxlY3RvciIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmUiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImlzQXJyYXkiLCJpbml0V2hlZWxzIiwic2VjdGlvbiIsInZpZXdwb3J0IiwiaXRlbXMiLCJjb250cm9scyIsInByZXZpb3VzIiwibmV4dCIsInBhZ2luYXRpb24iLCJyZWR1Y2VkIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImZyYW1lIiwicG9zaXRpb24iLCJvZmZzZXRMZWZ0Iiwic2Nyb2xsYWJsZSIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJoaWRkZW4iLCJyZWR1Y2UiLCJuZWFyZXN0IiwiYWJzIiwic2Nyb2xsTGVmdCIsImRpc2FibGVkIiwiaW5uZXJIVE1MIiwiY29uY2F0IiwiZ28iLCJtYXgiLCJzY3JvbGxUbyIsImxlZnQiLCJiZWhhdmlvciIsIm1hdGNoZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJyZXNpemUiLCJSZXNpemVPYnNlcnZlciIsImNhcmQiLCJmcm9udCIsImJhY2siLCJvcGVuIiwiY2xvc2UiLCJpZCIsInNldEF0dHJpYnV0ZSIsImZsaXAiLCJzaG93IiwiZm9jdXMiLCJ0b2dnbGUiLCJpbmVydCIsIlN0cmluZyIsInByZXZlbnRTY3JvbGwiLCJjb250YWlucyIsImluaXRGb3J0dW5lV2hlZWwiLCJ3aGVlbCIsInNlY3RvcnMiLCJzcGluQnRuIiwiY2VudGVyQnRuIiwicmVzdGFydEJ0biIsImRpYWxvZyIsImNvbnRpbnVlQnRuIiwiYXR0ZW1wdHMiLCJzdGF0dXMiLCJyZWR1Y2VkTW90aW9uIiwidG90YWxTcGlucyIsImNvbXBsZXRlZFNwaW5zIiwiaXNTcGlubmluZyIsInJvdGF0aW9uIiwiY2FzaCIsImZyZWVTcGlucyIsImFuaW1hdGlvbiIsInByZXZpb3VzT3ZlcmZsb3ciLCJ1cGRhdGVWaWV3IiwicmVtYWluaW5nIiwic3RlcCIsInNob3dSZXN1bHQiLCJmaXJzdFNwaW4iLCJ0b0xvY2FsZVN0cmluZyIsInJlcGxhY2UiLCJleHRyYSIsInNyYyIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93Iiwic2hvd01vZGFsIiwic3BpbldoZWVsIiwiX3NwaW5XaGVlbCIsIl9jYWxsZWUiLCJzZWN0b3JJbmRleCIsInNlY3RvciIsInRhcmdldEFuZ2xlIiwiZmluYWxBbmdsZSIsIl90IiwiX2NvbnRleHQiLCJmaW5kSW5kZXgiLCJOdW1iZXIiLCJzcGluIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsImVhc2luZyIsImZpbGwiLCJmaW5pc2hlZCIsImNhbmNlbCIsImtpbmQiLCJsYWJlbCIsInJlbW92ZSIsInJlc2V0V2hlZWwiLCJfYW5pbWF0aW9uIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsInJpZ2h0IiwiY2xpZW50WSIsInRvcCIsImJvdHRvbSIsIl9hbmltYXRpb24yIiwiaW5pdFByb2plY3RXaGVlbHMiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFlBQVlBLENBQUNDLEVBQUUsRUFBa0I7RUFBQSxJQUFoQkMsUUFBUSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxHQUFHO0VBQ3ZDLElBQU1HLE1BQU0sR0FBRyxDQUFDTCxFQUFFLENBQUNNLE9BQU8sQ0FBQ0QsTUFBTTtFQUNqQyxJ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RixPQUFPLEVBQUVULEtBQUssQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQztJQUNGdEMsTUFBTSxDQUFDc0IsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO01BQUEsSUFBQW9GLFdBQUE7TUFBQSxRQUFBQSxXQUFBLEdBQU03QyxTQUFTLGNBQUE2QyxXQUFBLHVCQUFUQSxXQUFBLENBQVdiLE1BQU0sQ0FBQyxDQUFDO0lBQUEsRUFBQztJQUM5RDlCLFVBQVUsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxDQUFDO0FBQ0g7QUFFQSxTQUFTNEMsaUJBQWlCQSxDQUFBLEVBQUc7RUFDNUJwSCxVQUFVLENBQUMsQ0FBQztFQUNacUQsZ0JBQWdCLENBQUMsQ0FBQztBQUNuQjtBQUVBLElBQUl6SCxRQUFRLENBQUN5TCxVQUFVLEtBQUssU0FBUyxFQUFFekwsUUFBUSxDQUFDbUcsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVxRixpQkFBaUIsQ0FBQyxNQUNsR0EsaUJBQWlCLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYW5pbWF0ZVZhbHVlKGVsLCBkdXJhdGlvbiA9IDc1MCkge1xuXHRjb25zdCB0YXJnZXQgPSArZWwuZGF0YXNldC50YXJnZXRcblx0Y29uc3Qgc3VmZml4ID0gZWwuZGF0YXNldC5zdWZmaXggfHwgJydcblx0bGV0IHN0YXJ0ID0gMFxuXHRjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZShjdXJyZW50VGltZSkge1xuXHRcdGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oKGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKVxuXHRcdGNvbnN0IHZhbHVlID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIHRhcmdldClcblxuXHRcdGVsLnRleHRDb250ZW50ID0gdmFsdWUgKyBzdWZmaXhcblxuXHRcdGlmIChwcm9ncmVzcyA8IDEpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsLnRleHRDb250ZW50ID0gdGFyZ2V0ICsgc3VmZml4XG5cdFx0fVxuXHR9XG5cblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcbn1cblxuZnVuY3Rpb24gYXBwZWFyQW5pbUl0ZW0oKSB7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuXHRcdGVudHJpZXMuZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0Y29uc3QgaXRlbSA9IGVudHJ5LnRhcmdldFxuXHRcdFx0XHRjb25zdCBkZWxheSA9IChpbmRleCArIDEpICogMjAwXG5cblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcblxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb21taXNzaW9uc19faXRlbS1wcm9ncmVzcy12YWx1ZScpXG5cdFx0XHRcdFx0aWYgKHZhbHVlRWwpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGVWYWx1ZSh2YWx1ZUVsKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgZGVsYXkpXG5cblx0XHRcdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKGl0ZW0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fSwge1xuXHRcdHRocmVzaG9sZDogMC42XG5cdH0pXG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW0taXRlbScpLmZvckVhY2goZWwgPT4ge1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZWwpXG5cdH0pXG59XG5cbmFwcGVhckFuaW1JdGVtKClcbiIsImZ1bmN0aW9uIGluaXRXaGVlbHMoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndoZWVscycpLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignLndoZWVsc19fd3JhcHBlcicpXHJcbiAgICBjb25zdCBpdGVtcyA9IFsuLi5zZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGVlbHNfX2l0ZW0nKV1cclxuICAgIGNvbnN0IGNvbnRyb2xzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcud2hlZWxzX19jb250cm9scycpXHJcbiAgICBjb25zdCBwcmV2aW91cyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignLndoZWVsc19fYnRuX3ByZXYnKVxyXG4gICAgY29uc3QgbmV4dCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignLndoZWVsc19fYnRuX25leHQnKVxyXG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignLndoZWVsc19fcGFnaW5hdGlvbicpXHJcbiAgICBpZiAoIXZpZXdwb3J0IHx8ICFpdGVtcy5sZW5ndGgpIHJldHVyblxyXG4gICAgY29uc3QgcmVkdWNlZCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpXHJcbiAgICBsZXQgaW5kZXggPSAwXHJcbiAgICBsZXQgZnJhbWUgPSAwXHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGkgPT4gaXRlbXNbaV0ub2Zmc2V0TGVmdCAtIGl0ZW1zWzBdLm9mZnNldExlZnRcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IHZpZXdwb3J0LnNjcm9sbFdpZHRoID4gdmlld3BvcnQuY2xpZW50V2lkdGggKyAyXHJcbiAgICAgIGNvbnRyb2xzLmhpZGRlbiA9ICFzY3JvbGxhYmxlXHJcbiAgICAgIGluZGV4ID0gaXRlbXMucmVkdWNlKChuZWFyZXN0LCBpdGVtLCBpKSA9PlxyXG4gICAgICAgIE1hdGguYWJzKHBvc2l0aW9uKGkpIC0gdmlld3BvcnQuc2Nyb2xsTGVmdCkgPCBNYXRoLmFicyhwb3NpdGlvbihuZWFyZXN0KSAtIHZpZXdwb3J0LnNjcm9sbExlZnQpID8gaSA6IG5lYXJlc3QsIDApXHJcbiAgICAgIHByZXZpb3VzLmRpc2FibGVkID0gdmlld3BvcnQuc2Nyb2xsTGVmdCA8PSAyXHJcbiAgICAgIG5leHQuZGlzYWJsZWQgPSB2aWV3cG9ydC5zY3JvbGxMZWZ0ICsgdmlld3BvcnQuY2xpZW50V2lkdGggPj0gdmlld3BvcnQuc2Nyb2xsV2lkdGggLSAyXHJcbiAgICAgIHBhZ2luYXRpb24uaW5uZXJIVE1MID0gYDxzcGFuPiR7aW5kZXggKyAxfTwvc3Bhbj4gLyAke2l0ZW1zLmxlbmd0aH1gXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnbyhpKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGl0ZW1zLmxlbmd0aCAtIDEsIGkpKVxyXG4gICAgICB2aWV3cG9ydC5zY3JvbGxUbyh7IGxlZnQ6IHBvc2l0aW9uKHRhcmdldCksIGJlaGF2aW9yOiByZWR1Y2VkLm1hdGNoZXMgPyAnYXV0bycgOiAnc21vb3RoJyB9KVxyXG4gICAgfVxyXG4gICAgcHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnbyhpbmRleCAtIDEpKVxyXG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdvKGluZGV4ICsgMSkpXHJcbiAgICB2aWV3cG9ydC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgIGlmICghZnJhbWUpIGZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgZnJhbWUgPSAwOyB1cGRhdGUoKSB9KVxyXG4gICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICB2aWV3cG9ydC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB2aWV3cG9ydCkgcmV0dXJuXHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGdvKGluZGV4ICsgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnID8gMSA6IC0xKSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcclxuICAgICAgdmlld3BvcnQuc2Nyb2xsVG8oeyBsZWZ0OiBwb3NpdGlvbihpbmRleCksIGJlaGF2aW9yOiAnYXV0bycgfSlcclxuICAgICAgdXBkYXRlKClcclxuICAgIH1cclxuICAgIGlmICgnUmVzaXplT2JzZXJ2ZXInIGluIHdpbmRvdykgbmV3IFJlc2l6ZU9ic2VydmVyKHJlc2l6ZSkub2JzZXJ2ZSh2aWV3cG9ydClcclxuICAgIGVsc2Ugd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSlcclxuICAgIGl0ZW1zLmZvckVhY2goKGNhcmQsIGkpID0+IHtcclxuICAgICAgY29uc3QgZnJvbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aGVlbHNfX2l0ZW0tZnJvbnQnKVxyXG4gICAgICBjb25zdCBiYWNrID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcud2hlZWxzX19pdGVtLWJhY2snKVxyXG4gICAgICBjb25zdCBvcGVuID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcud2hlZWxzX19pdGVtLWJ0bicpXHJcbiAgICAgIGNvbnN0IGNsb3NlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcud2hlZWxzX19pdGVtLWJhY2stYnRuJylcclxuICAgICAgYmFjay5pZCA9IGB3aGVlbC10ZXJtcy0ke2kgKyAxfWBcclxuICAgICAgb3Blbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCBiYWNrLmlkKVxyXG4gICAgICBmdW5jdGlvbiBmbGlwKHNob3csIGZvY3VzID0gdHJ1ZSkge1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZmxpcHBlZCcsIHNob3cpXHJcbiAgICAgICAgZnJvbnQuaW5lcnQgPSBzaG93XHJcbiAgICAgICAgYmFjay5pbmVydCA9ICFzaG93XHJcbiAgICAgICAgZnJvbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIFN0cmluZyhzaG93KSlcclxuICAgICAgICBiYWNrLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBTdHJpbmcoIXNob3cpKVxyXG4gICAgICAgIG9wZW4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgU3RyaW5nKHNob3cpKVxyXG4gICAgICAgIGlmIChmb2N1cykgKHNob3cgPyBjbG9zZSA6IG9wZW4pLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxyXG4gICAgICB9XHJcbiAgICAgIG9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBmbGlwKHRydWUpKVxyXG4gICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGZsaXAoZmFsc2UpKVxyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWZsaXBwZWQnKSkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgZmxpcChmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGZsaXAoZmFsc2UsIGZhbHNlKVxyXG4gICAgfSlcclxuICAgIHVwZGF0ZSgpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEZvcnR1bmVXaGVlbCgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ydHVuZScpLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcblx0XHRjb25zdCB3aGVlbCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmZvcnR1bmVfX2Rpc2snKVxyXG5cdFx0Y29uc3Qgc2VjdG9ycyA9IFsuLi5zZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3J0dW5lX19zZWN0b3InKV1cclxuXHRcdGNvbnN0IHNwaW5CdG4gPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5mb3J0dW5lX19idG4nKVxyXG5cdFx0Y29uc3QgY2VudGVyQnRuID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuZm9ydHVuZV9fY2VudGVyJylcclxuXHRcdGNvbnN0IHJlc3RhcnRCdG4gPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5mb3J0dW5lX19yZXN0YXJ0JylcclxuXHRcdGNvbnN0IGRpYWxvZyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmZvcnR1bmVfX2RpYWxvZycpXHJcblx0XHRjb25zdCBjb250aW51ZUJ0biA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmZvcnR1bmVfX2NvbnRpbnVlJylcclxuXHRcdGNvbnN0IGF0dGVtcHRzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuZm9ydHVuZV9fYXR0ZW1wdHMnKVxyXG5cdFx0Y29uc3Qgc3RhdHVzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuZm9ydHVuZV9fc3RhdHVzJylcclxuXHRcdGNvbnN0IHJlZHVjZWRNb3Rpb24gPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKVxyXG5cdFx0Y29uc3QgdG90YWxTcGlucyA9IDJcclxuXHRcdGxldCBjb21wbGV0ZWRTcGlucyA9IDBcclxuXHRcdGxldCBpc1NwaW5uaW5nID0gZmFsc2VcclxuXHRcdGxldCByb3RhdGlvbiA9IDBcclxuXHRcdGxldCBjYXNoID0gMFxyXG5cdFx0bGV0IGZyZWVTcGlucyA9IDBcclxuXHRcdGxldCBhbmltYXRpb24gPSBudWxsXHJcblx0XHRsZXQgcHJldmlvdXNPdmVyZmxvdyA9ICcnXHJcblxyXG5cdFx0aWYgKCF3aGVlbCB8fCAhc2VjdG9ycy5sZW5ndGggfHwgIXNwaW5CdG4gfHwgIWRpYWxvZykgcmV0dXJuXHJcblxyXG5cdFx0ZnVuY3Rpb24gdXBkYXRlVmlldygpIHtcclxuXHRcdFx0Y29uc3QgcmVtYWluaW5nID0gdG90YWxTcGlucyAtIGNvbXBsZXRlZFNwaW5zXHJcblx0XHRcdHNwaW5CdG4uZGlzYWJsZWQgPSBjZW50ZXJCdG4uZGlzYWJsZWQgPSBpc1NwaW5uaW5nIHx8IHJlbWFpbmluZyA9PT0gMFxyXG5cdFx0XHRzcGluQnRuLnRleHRDb250ZW50ID0gaXNTcGlubmluZyA/ICdTcGlubmluZ+KApicgOiByZW1haW5pbmcgPT09IDAgPyAnQm90aCBzcGlucyBjb21wbGV0ZScgOiBjb21wbGV0ZWRTcGlucyA/ICdTcGluIGFnYWluJyA6ICdTcGluIHRoZSB3aGVlbCdcclxuXHRcdFx0Y2VudGVyQnRuLnF1ZXJ5U2VsZWN0b3IoJ2InKS50ZXh0Q29udGVudCA9IGlzU3Bpbm5pbmcgPyAn4oCmJyA6IHJlbWFpbmluZyA9PT0gMCA/ICdEb25lJyA6ICdTcGluJ1xyXG5cdFx0XHRhdHRlbXB0cy50ZXh0Q29udGVudCA9IGlzU3Bpbm5pbmcgPyAnVGhlIHdoZWVsIGlzIHNwaW5uaW5n4oCmJyA6IHJlbWFpbmluZyA9PT0gMCA/ICdCb3RoIHNwaW5zIGNvbXBsZXRlLiBZb3VyIGZpbmFsIGJvbnVzIGlzIHJlYWR5LicgOiBgJHtyZW1haW5pbmd9ICR7cmVtYWluaW5nID09PSAxID8gJ3NwaW4nIDogJ3NwaW5zJ30gYXZhaWxhYmxlYFxyXG5cdFx0XHRyZXN0YXJ0QnRuLmhpZGRlbiA9IHJlbWFpbmluZyAhPT0gMFxyXG5cdFx0XHRzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3J0dW5lX19zdGVwJykuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRzdGVwLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWN1cnJlbnQnLCBpbmRleCA9PT0gY29tcGxldGVkU3BpbnMpXHJcblx0XHRcdFx0c3RlcC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1kb25lJywgaW5kZXggPCBjb21wbGV0ZWRTcGlucylcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzaG93UmVzdWx0KCkge1xyXG5cdFx0XHRjb25zdCBmaXJzdFNwaW4gPSBjb21wbGV0ZWRTcGlucyA9PT0gMVxyXG5cdFx0XHRzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5mb3J0dW5lX19yZXN1bHQtc3RlcCcpLnRleHRDb250ZW50ID0gZmlyc3RTcGluID8gJ0ZpcnN0IHNwaW4gY29tcGxldGUnIDogJ1NlY29uZCBzcGluIGNvbXBsZXRlJ1xyXG5cdFx0XHRzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5mb3J0dW5lX19yZXN1bHQtdGl0bGUnKS50ZXh0Q29udGVudCA9IGZpcnN0U3BpbiA/ICdOaWNlIGZpcnN0IHNwaW4uJyA6ICdUaGF04oCZcyB5b3VyIGJvbnVzLidcclxuXHRcdFx0c2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuZm9ydHVuZV9fcHJpemUnKS5pbm5lckhUTUwgPSBjYXNoLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpLnJlcGxhY2UoLywvZywgJyAnKSArICcgPHNwYW4+4oK0PC9zcGFuPidcclxuXHRcdFx0Y29uc3QgZXh0cmEgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5mb3J0dW5lX19leHRyYScpXHJcblx0XHRcdGV4dHJhLmhpZGRlbiA9IGZyZWVTcGlucyA9PT0gMFxyXG5cdFx0XHRleHRyYS50ZXh0Q29udGVudCA9IGArICR7ZnJlZVNwaW5zfSBmcmVlIHNwaW5zYFxyXG5cdFx0XHRzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5mb3J0dW5lX19yZXN1bHQtZGV0YWlsJykudGV4dENvbnRlbnQgPSBmaXJzdFNwaW4gPyAnWW91ciBmaXJzdCBib251cyBpcyBpbi4gWW91IGhhdmUgb25lIG1vcmUgc3Bpbi4nIDogYFRoZSBzZWNvbmQgc3BpbiBhZGRzICR7ZnJlZVNwaW5zfSBmcmVlIHNwaW5zIHRvIHlvdXIgZmlyc3QgJHtjYXNoLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfSDigrQgYm9udXMuYFxyXG5cdFx0XHRzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5mb3J0dW5lX19wcml6ZS1pbWcnKS5zcmMgPSBmaXJzdFNwaW4gPyAnaW1nL2ZvcnR1bmUtY29pbi5zdmcnIDogJ2ltZy9mb3J0dW5lLWdpZnQuc3ZnJ1xyXG5cdFx0XHRjb250aW51ZUJ0bi50ZXh0Q29udGVudCA9IGZpcnN0U3BpbiA/ICdTcGluIGFnYWluJyA6ICdSZXN0YXJ0IGRlbW8nXHJcblx0XHRcdHByZXZpb3VzT3ZlcmZsb3cgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG5cdFx0XHRkaWFsb2cuc2hvd01vZGFsKClcclxuXHRcdFx0Y29udGludWVCdG4uZm9jdXMoKVxyXG5cdFx0fVxyXG5cclxuXHRcdGFzeW5jIGZ1bmN0aW9uIHNwaW5XaGVlbCgpIHtcclxuXHRcdFx0aWYgKGlzU3Bpbm5pbmcgfHwgY29tcGxldGVkU3BpbnMgPj0gdG90YWxTcGlucykgcmV0dXJuXHJcblx0XHRcdGNvbnN0IHNlY3RvckluZGV4ID0gc2VjdG9ycy5maW5kSW5kZXgoc2VjdG9yID0+IE51bWJlcihzZWN0b3IuZGF0YXNldC5zcGluKSA9PT0gY29tcGxldGVkU3BpbnMgKyAxKVxyXG5cdFx0XHRpZiAoc2VjdG9ySW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0c3RhdHVzLnRleHRDb250ZW50ID0gJ1RoZSBwcml6ZSBzZWN0b3IgaXMgdW5hdmFpbGFibGUuJ1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHNlY3RvciA9IHNlY3RvcnNbc2VjdG9ySW5kZXhdXHJcblx0XHRcdGNvbnN0IHRhcmdldEFuZ2xlID0gKDM2MCAtIHNlY3RvckluZGV4ICogMzYwIC8gc2VjdG9ycy5sZW5ndGgpICUgMzYwXHJcblx0XHRcdGNvbnN0IGZpbmFsQW5nbGUgPSByb3RhdGlvbiArIDE0NDAgKyAoKHRhcmdldEFuZ2xlIC0gcm90YXRpb24gJSAzNjAgKyAzNjApICUgMzYwKVxyXG5cdFx0XHRpc1NwaW5uaW5nID0gdHJ1ZVxyXG5cdFx0XHRzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLXNwaW5uaW5nJylcclxuXHRcdFx0dXBkYXRlVmlldygpXHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2Ygd2hlZWwuYW5pbWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdFx0YW5pbWF0aW9uID0gd2hlZWwuYW5pbWF0ZShbXHJcblx0XHRcdFx0XHRcdHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRpb259ZGVnKWAgfSxcclxuXHRcdFx0XHRcdFx0eyB0cmFuc2Zvcm06IGByb3RhdGUoJHtmaW5hbEFuZ2xlfWRlZylgIH1cclxuXHRcdFx0XHRcdF0sIHtcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IHJlZHVjZWRNb3Rpb24ubWF0Y2hlcyA/IDEyMCA6IE51bWJlcihzZWN0aW9uLmRhdGFzZXQuZHVyYXRpb24pIHx8IDQzMDAsXHJcblx0XHRcdFx0XHRcdGVhc2luZzogJ2N1YmljLWJlemllciguMTIsLjY2LC4xMiwxKScsXHJcblx0XHRcdFx0XHRcdGZpbGw6ICdmb3J3YXJkcydcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRhd2FpdCBhbmltYXRpb24uZmluaXNoZWRcclxuXHRcdFx0XHRcdHdoZWVsLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtmaW5hbEFuZ2xlfWRlZylgXHJcblx0XHRcdFx0XHRhbmltYXRpb24uY2FuY2VsKClcclxuXHRcdFx0XHRcdGFuaW1hdGlvbiA9IG51bGxcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0d2hlZWwuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2ZpbmFsQW5nbGV9ZGVnKWBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cm90YXRpb24gPSBmaW5hbEFuZ2xlXHJcblx0XHRcdFx0aWYgKHNlY3Rvci5kYXRhc2V0LmtpbmQgPT09ICdjYXNoJykgY2FzaCArPSBOdW1iZXIoc2VjdG9yLmRhdGFzZXQudmFsdWUpXHJcblx0XHRcdFx0ZWxzZSBmcmVlU3BpbnMgKz0gTnVtYmVyKHNlY3Rvci5kYXRhc2V0LnZhbHVlKVxyXG5cdFx0XHRcdGNvbXBsZXRlZFNwaW5zKytcclxuXHRcdFx0XHRzdGF0dXMudGV4dENvbnRlbnQgPSBgU3BpbiAke2NvbXBsZXRlZFNwaW5zfTogJHtzZWN0b3IuZGF0YXNldC5sYWJlbH0uYFxyXG5cdFx0XHRcdHNob3dSZXN1bHQoKVxyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdGlmIChlcnJvci5uYW1lICE9PSAnQWJvcnRFcnJvcicpIHN0YXR1cy50ZXh0Q29udGVudCA9ICdUaGUgc3BpbiBjb3VsZCBub3QgZmluaXNoLiBQbGVhc2UgdHJ5IGFnYWluLidcclxuXHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHRpc1NwaW5uaW5nID0gZmFsc2VcclxuXHRcdFx0XHRzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNwaW5uaW5nJylcclxuXHRcdFx0XHR1cGRhdGVWaWV3KClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlc2V0V2hlZWwoKSB7XHJcblx0XHRcdGlmIChpc1NwaW5uaW5nKSByZXR1cm5cclxuXHRcdFx0YW5pbWF0aW9uPy5jYW5jZWwoKVxyXG5cdFx0XHRhbmltYXRpb24gPSBudWxsXHJcblx0XHRcdGNvbXBsZXRlZFNwaW5zID0gcm90YXRpb24gPSBjYXNoID0gZnJlZVNwaW5zID0gMFxyXG5cdFx0XHR3aGVlbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xyXG5cdFx0XHRzdGF0dXMudGV4dENvbnRlbnQgPSAnRGVtbyByZXN0YXJ0ZWQuIFR3byBzcGlucyBhdmFpbGFibGUuJ1xyXG5cdFx0XHR1cGRhdGVWaWV3KClcclxuXHRcdFx0c3BpbkJ0bi5mb2N1cygpXHJcblx0XHR9XHJcblxyXG5cdFx0c3BpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNwaW5XaGVlbClcclxuXHRcdGNlbnRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNwaW5XaGVlbClcclxuXHRcdHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFdoZWVsKVxyXG5cdFx0c2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuZm9ydHVuZV9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpYWxvZy5jbG9zZSgpKVxyXG5cdFx0Y29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGRpYWxvZy5jbG9zZSgpXHJcblx0XHRcdGlmIChjb21wbGV0ZWRTcGlucyA8IHRvdGFsU3BpbnMpIHNwaW5XaGVlbCgpXHJcblx0XHRcdGVsc2UgcmVzZXRXaGVlbCgpXHJcblx0XHR9KVxyXG5cdFx0ZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0ICE9PSBkaWFsb2cpIHJldHVyblxyXG5cdFx0XHRjb25zdCBib3VuZHMgPSBkaWFsb2cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHRcdFx0aWYgKGV2ZW50LmNsaWVudFggPCBib3VuZHMubGVmdCB8fCBldmVudC5jbGllbnRYID4gYm91bmRzLnJpZ2h0IHx8IGV2ZW50LmNsaWVudFkgPCBib3VuZHMudG9wIHx8IGV2ZW50LmNsaWVudFkgPiBib3VuZHMuYm90dG9tKSBkaWFsb2cuY2xvc2UoKVxyXG5cdFx0fSlcclxuXHRcdGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHByZXZpb3VzT3ZlcmZsb3dcclxuXHRcdFx0aWYgKCFpc1NwaW5uaW5nKSAoY29tcGxldGVkU3BpbnMgPT09IHRvdGFsU3BpbnMgPyByZXN0YXJ0QnRuIDogc3BpbkJ0bikuZm9jdXMoKVxyXG5cdFx0fSlcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IGFuaW1hdGlvbj8uY2FuY2VsKCkpXHJcblx0XHR1cGRhdGVWaWV3KClcclxuXHR9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UHJvamVjdFdoZWVscygpIHtcclxuXHRpbml0V2hlZWxzKClcclxuXHRpbml0Rm9ydHVuZVdoZWVsKClcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRQcm9qZWN0V2hlZWxzKVxyXG5lbHNlIGluaXRQcm9qZWN0V2hlZWxzKClcclxuIl19
