export declare function _MouseEvent(eventType: string, params?: MouseEventParamsInterface): MouseEvent;
export interface MouseEventParamsInterface {
    bubbles?: boolean;
    cancelable?: boolean;
    view?: any;
    detail?: number;
    screenX?: number;
    screenY?: number;
    clientX?: number;
    clientY?: number;
    ctrlKey?: boolean;
    altKey?: boolean;
    shiftKey?: boolean;
    metaKey?: boolean;
    button?: number;
    relatedTarget?: any;
}
