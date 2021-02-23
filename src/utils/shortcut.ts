export interface ShortCut {
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  code: string;
  // isComposing: boolean;
  // key: string;
  // location: number;
  // metaKey: boolean;
  // repeat: boolean;
}

function instanceOfShortCut(object: any): object is ShortCut {
  return !('ctrlKey' in object);
}

export function isShortcut(event: KeyboardEvent, sc: ShortCut): boolean {
  const ctrl = sc.ctrl || false;
  const shift = sc.shift || false;
  const alt = sc.alt || false;
  return (
    event.ctrlKey === ctrl &&
    event.shiftKey === shift &&
    event.altKey === alt &&
    event.code === sc.code
  );
}

export function setShortcutByEvent(sc: ShortCut, ev: KeyboardEvent): void {
  sc.ctrl = ev.ctrlKey;
  sc.shift = ev.shiftKey;
  sc.alt = ev.altKey;
  sc.code = ev.code;
}

export function Shortcut2Str(sc: ShortCut | KeyboardEvent): string {
  let str = '';
  let ctrl: boolean;
  let shift: boolean;
  let alt: boolean;
  if (instanceOfShortCut(sc)) {
    ctrl = sc.ctrl || false;
    alt = sc.alt || false;
    shift = sc.shift || false;
  } else {
    ctrl = sc.ctrlKey || false;
    alt = sc.altKey || false;
    shift = sc.shiftKey || false;
  }
  if (ctrl) str += 'Ctrl+';
  if (shift) str += 'Shift+';
  if (alt) str += 'Alt+';
  if (sc.code.match(/^(Alt|Shift|Control)/) === null) {
    str += sc.code;
  }
  return str;
}
