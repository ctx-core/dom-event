export function trigger_custom_event(el, event_name, detail) {
    let event;
    if (window.CustomEvent) {
        event = new CustomEvent(event_name, { detail });
    }
    else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(event_name, true, true, detail);
    }
    el.dispatchEvent(event);
}
export { trigger_custom_event as trigger__event__custom };
