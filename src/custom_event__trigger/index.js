export function custom_event__trigger(el, event_name, detail) {
	let event
	if (window.CustomEvent) {
		event = new CustomEvent(event_name, {
			detail
		})
	} else {
		event = document.createEvent('CustomEvent')
		event.initCustomEvent(event_name, true, true, detail)
	}
	el.dispatchEvent(event)
}
export {
	custom_event__trigger as trigger_custom_event,
	custom_event__trigger as trigger__event__custom,
}
