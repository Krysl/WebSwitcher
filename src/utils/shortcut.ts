export interface ShortCut {
  ctrl: boolean;
  shift: boolean;
  alt: boolean;
  code: string;
  // isComposing: boolean;
  // key: string;
  // location: number;
  // metaKey: boolean;
  // repeat: boolean;
}

export function isShortcut(event: KeyboardEvent, sc: ShortCut): boolean {
  return (
    event.ctrlKey === sc.ctrl &&
    event.shiftKey === sc.shift &&
    event.altKey === sc.alt &&
    event.code === sc.code
  );
}
