export function hasOwnProperty<X extends unknown, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function copy<T>(dst: T, src: T): void {
  for (const key in src) {
    if (Object.prototype.hasOwnProperty.call(src, key)) {
      if (key in dst) {
        dst[key] = src[key];
      }
    }
  }
}

export function equal<T>(a: T, b: T): boolean {
  if (typeof a === 'object') {
    for (const key in a) {
      if (Object.prototype.hasOwnProperty.call(a, key)) {
        if (key in b) {
          if (typeof b[key] !== typeof a[key]) return false;
          if (equal(b[key], a[key]) === false) return false;
        }
      }
    }
  } else {
    return a === b;
  }
  return true;
}
