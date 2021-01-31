export function _MouseEvent(
	eventType: string,
	params:MouseEventParamsInterface = { bubbles: false, cancelable: false }
) {
	try {
		return new MouseEvent(eventType, params)
	} catch (e) {
	}
	const mouseEvent = document.createEvent('MouseEvent')
	mouseEvent.initMouseEvent(
		eventType,
		params.bubbles || false,
		params.cancelable || false,
		params.view || window,
		params.detail || 0,
		params.screenX || 0,
		params.screenY || 0,
		params.clientX || 0,
		params.clientY || 0,
		params.ctrlKey || false,
		params.altKey || false,
		params.shiftKey || false,
		params.metaKey || false,
		params.button || 0,
		params.relatedTarget || null
	)
	return mouseEvent
}
export interface MouseEventParamsInterface {
	bubbles?:boolean
	cancelable?:boolean
	view?:any
	detail?:number
	screenX?:number
	screenY?:number
	clientX?:number
	clientY?:number
	ctrlKey?:boolean
	altKey?:boolean
	shiftKey?:boolean
	metaKey?:boolean
	button?:number
	relatedTarget?:any
}
