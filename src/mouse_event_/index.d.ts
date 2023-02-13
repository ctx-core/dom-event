export declare function MouseEvent_(
	eventType:string, params?:MouseEvent__params_T
):MouseEvent
export type MouseEvent__params_T = MouseEventInit|MouseEventParams_I
export interface MouseEventParams_I {
	bubbles?:boolean;
	cancelable?:boolean;
	view?:any;
	detail?:number;
	screenX?:number;
	screenY?:number;
	clientX?:number;
	clientY?:number;
	ctrlKey?:boolean;
	altKey?:boolean;
	shiftKey?:boolean;
	metaKey?:boolean;
	button?:number;
	relatedTarget?:any;
}
export { MouseEvent_ as _MouseEvent, }
