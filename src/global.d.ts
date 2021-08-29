export {};

declare global {
  interface Window {
    [propName: string]: unknow;
  }
}
