/**
 * Decodes a base64-encoded string at runtime, keeping sensitive values
 * like email and phone out of plain-text form in the source/bundle.
 */
export function fromBase64(encoded: string): string {
  return atob(encoded);
}
