declare namespace React {
  type ReactNode = any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }

  interface IntrinsicAttributes {
    key?: string | number;
  }
}

declare module "react/jsx-runtime" {
  export const Fragment: any;
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
}

declare module "react" {
  export type ReactNode = any;
  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S);
  export type ChangeEvent<T = Element> = {
    target: T;
  };
  export type KeyboardEvent<T = Element> = {
    key: string;
    shiftKey: boolean;
    preventDefault: () => void;
    target: T;
  };
  const React: any;
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  export function useRef<T>(initialValue: T | null): { current: T | null };
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