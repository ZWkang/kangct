let supportPassive = false;

try {
  const opts = Object.defineProperty({}, 'passive', {
    get() {
      supportPassive = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {}

let passEvents = supportPassive ? { capture: false, passive: true } : false;

export default passEvents;
