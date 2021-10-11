export interface CarExpect {
  brand: string;
  model: string;
  doors: number;
  leftHanded: boolean;
}

export type CarCheck<T> = T extends CarExpect ? T : never;
