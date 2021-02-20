export {};

declare global {
  interface Window {
    onurlchange: (() => any) | null;
  }
}
