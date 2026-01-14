/// <reference types="astro/client" />

// Reference the virtual module types from the plugin
declare module 'virtual:astro-prerender-config' {
    export const base: string;
    export const prerenderedPath: string;
    export const cssPath: string;
}
