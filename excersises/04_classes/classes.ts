export class Vehicle {
  constructor(
      public brand: string,
      public model: string,
      public speed: number
  ){}

  async accelerate(amount: number): Promise<number> {
      this.speed += amount;
      return this.speed;
  }
  async deaccelerate(amount: number): Promise<number> {
      this.speed -= amount;
      return this.speed;
  }
}

export class ManTruck extends Vehicle {
    load: number = 0;

    constructor(
        public model: string,
        public speed: number
    ) {
        super("Man", model, speed);
    }

    async loadOnto(amount: number) {
        this.load += amount;
        return this.load;
    }
}

export class Book {
  private pages: string[] = [];
  public title: string;

  constructor(
      title: string,
      ...pages: string[]
  ) {
      this.title = title;
      this.pages = pages;
  }

  getPages(): string[] {
      return this.pages;
  }

  getPage(i: number): string {
      return this.pages[i-1];
  }

  getPageSize(): number {
      return this.pages.length;
  }

  async addPage(page: string) {
      this.pages.push(page);
  }
}

