import { Charger } from '@/types/charger';

export const duplication = (chargers: Charger[]) =>
  Array.from(new Set(chargers.map((charger) => charger.statId))).map((statId) =>
    chargers.find((charger) => charger.statId === statId)
  );
