import * as base64js from 'base64-js';

export function Base64Encode(str: string): string {
  const bytes = new TextEncoder().encode(str);
  return base64js.fromByteArray(bytes);
}
export function Base64Decode(str: string): string {
  const bytes = base64js.toByteArray(str);
  return new TextDecoder().decode(bytes);
}
