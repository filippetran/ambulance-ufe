/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FpAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface FpAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface FpAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface FpAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFpAmbulanceWlEditorElement;
}
export interface FpAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFpAmbulanceWlListElement;
}
declare global {
    interface HTMLFpAmbulanceWlAppElement extends Components.FpAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLFpAmbulanceWlAppElement: {
        prototype: HTMLFpAmbulanceWlAppElement;
        new (): HTMLFpAmbulanceWlAppElement;
    };
    interface HTMLFpAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLFpAmbulanceWlEditorElement extends Components.FpAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFpAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLFpAmbulanceWlEditorElement, ev: FpAmbulanceWlEditorCustomEvent<HTMLFpAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFpAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLFpAmbulanceWlEditorElement, ev: FpAmbulanceWlEditorCustomEvent<HTMLFpAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFpAmbulanceWlEditorElement: {
        prototype: HTMLFpAmbulanceWlEditorElement;
        new (): HTMLFpAmbulanceWlEditorElement;
    };
    interface HTMLFpAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLFpAmbulanceWlListElement extends Components.FpAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFpAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLFpAmbulanceWlListElement, ev: FpAmbulanceWlListCustomEvent<HTMLFpAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFpAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLFpAmbulanceWlListElement, ev: FpAmbulanceWlListCustomEvent<HTMLFpAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFpAmbulanceWlListElement: {
        prototype: HTMLFpAmbulanceWlListElement;
        new (): HTMLFpAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "fp-ambulance-wl-app": HTMLFpAmbulanceWlAppElement;
        "fp-ambulance-wl-editor": HTMLFpAmbulanceWlEditorElement;
        "fp-ambulance-wl-list": HTMLFpAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface FpAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface FpAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: FpAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface FpAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: FpAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "fp-ambulance-wl-app": FpAmbulanceWlApp;
        "fp-ambulance-wl-editor": FpAmbulanceWlEditor;
        "fp-ambulance-wl-list": FpAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fp-ambulance-wl-app": LocalJSX.FpAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLFpAmbulanceWlAppElement>;
            "fp-ambulance-wl-editor": LocalJSX.FpAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLFpAmbulanceWlEditorElement>;
            "fp-ambulance-wl-list": LocalJSX.FpAmbulanceWlList & JSXBase.HTMLAttributes<HTMLFpAmbulanceWlListElement>;
        }
    }
}
