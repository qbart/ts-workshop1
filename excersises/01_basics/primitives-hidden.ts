export function add(a: number, b: number) {
  return a + b;
}

export function concat(a: string, b: string | number) {
  return `${a} ${b}`;
}

export function sum(arr: number[]) {
  return arr.reduce((total, current) => total + current, 0);
}

export function negate(val: boolean) {
  return !val;
}
