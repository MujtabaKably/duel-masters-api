export type Card = {
  setName: string;
  cardName: string;
  cardFileName: string;
  downloadUrl: {
    en: string;
  };
  cardNameProcessed?: string;
  civilizations: string[];
  cost: string | number;
  name: string;
  power?: string | number;
  printings: Printings[];
  subtypes?: string[];
  supertypes?: string[];
  text?: string;
  type: string;
  manaValue: string | number;
};

type Printings = {
  set: string;
  id: string;
  rarity: string;
  illustrator: string;
  flavor?: string;
  image?: string;
};
