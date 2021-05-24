export function trigger_native_event(el, event_name) {
    const event = document.createEvent('HTMLEvents');
    event.initEvent(event_name, true, false);
    el.dispatchEvent(event);
}
export { trigger_native_event as trigger__event__native, };
