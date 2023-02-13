export function native_event__trigger(el, event_name) {
	const event = document.createEvent('HTMLEvents')
	event.initEvent(event_name, true, false)
	el.dispatchEvent(event)
}
export {
	native_event__trigger as trigger_native_event,
	native_event__trigger as trigger__event__native,
}
