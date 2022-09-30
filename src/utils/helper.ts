export function isPlainObject<T>(value: unknown): value is Record<PropertyKey, T> {
  if (typeof value !== 'object' || value === null) return false
  const prototype = Object.getPrototypeOf(value)
  return (
    prototype === null
    || prototype === Object.prototype
    || Object.getPrototypeOf(prototype) === null
  ) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value)
}
