export type PlanetType = {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: Date;
}

export type TransformationType = {
  id: number;
  name: string;
  image: string;
  ki: string;
  deletedAt: Date;
}

export type FighterType = {
    id: number;
    name: string;
    image: string;
    description?: string;
    ki: string;
    maxKi: string;
    affiliation: string;
    race: string;
    gender: string;
    originPlanet: PlanetType;
    transformations: TransformationType[];
  };