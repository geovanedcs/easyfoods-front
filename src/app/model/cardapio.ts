import {ComidaCardapio} from './comidaCardapio';

export class Cardapio {
  id?: number;
  cardapio: string;
  idDia: number;
  inativo?: boolean;
  comidaCardapioList?: ComidaCardapio[];
}
