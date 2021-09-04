export function join(arr: string[]) { return arr.join(" - "); }

export function multiplyAll(x: number, arr: number[]) {
    return arr.map((e) => {
        return x * e;
    });
}

export function sayHello(s: string, capitalize: boolean = false) {
    if (capitalize) {
        return `Hello, ${s.toUpperCase()}!`;
    } else {
        return `Hello, ${s}!`;
    }
}
