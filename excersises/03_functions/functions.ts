export type RepeatParams = {
  times: number;
  join: (false | string);
};

export function repeat(s: string, params: RepeatParams) {
    let a = Array.from({length: params.times}).map(() => s);
    if (params.join === false) {
        return a;
    }

    return a.join(params.join);
}

export type Callback = (err: string|null, result: number) => void;
export type TimeoutOptions = {
    time: number;
    callback: Callback;
};

export function timeout(o: TimeoutOptions) {
  setTimeout(() => o.callback(null, o.time), o.time);
}
