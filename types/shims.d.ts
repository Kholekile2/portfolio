declare namespace React {
  type ReactNode = any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "react/jsx-runtime" {
  export const Fragment: any;
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
}

declare module "react" {
  export type ReactNode = any;
  const React: any;
  export default React;
}

declare module "next" {
  export type Metadata = any;
}

declare module "next/image" {
  const Image: any;
  export default Image;
}

declare module "next/link" {
  const Link: any;
  export default Link;
}

declare module "next/font/google" {
  export const Geist: any;
  export const Geist_Mono: any;
}