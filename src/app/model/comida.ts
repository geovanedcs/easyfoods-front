import {ComidaIngrediente} from './comidaIngrediente';

export class Comida {
  id: number;
  comida: string;
  inativo: boolean;
  ingredienteList: ComidaIngrediente[];
}
