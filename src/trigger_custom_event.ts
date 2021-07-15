export function trigger_custom_event<T>(
	el: HTMLElement, event_name: string, detail: T
):void {
	let event
	if (window.CustomEvent) {
		event = new CustomEvent<T>(event_name, { detail })
	} else {
		event = document.createEvent('CustomEvent')
		event.initCustomEvent(event_name, true, true, detail)
	}
	el.dispatchEvent(event)
}
export {
	trigger_custom_event as trigger__event__custom
}
