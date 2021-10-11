export class WordDocument {
  constructor(private content: string) {}

  readContent() {
    return this.content;
  }
}

export class GoogleDocument {
  constructor(private content: string) {}

  fetchContent() {
    return this.content;
  }
}

export class HttpError extends Error {
  constructor(readonly status: number, message: string) {
    super(message);
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(404, message);
  }
}
