export function trigger_native_event(el: HTMLElement, event_name: string) {
	const event = document.createEvent('HTMLEvents')
	event.initEvent(event_name, true, false)
	el.dispatchEvent(event)
}
export {
	trigger_native_event as trigger__event__native,
}
