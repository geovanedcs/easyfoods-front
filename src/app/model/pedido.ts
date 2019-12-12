import {TamanhoMarmita} from "./tamanho-marmita";
import {Cliente} from "./cliente";
import {Cardapio} from "./cardapio";

export class Pedido {
  id: number;
  dataPedido: Date;
  tamanhoMarmita: TamanhoMarmita;
  quantidade: number;
  cliente: Cliente;
  vendedor: Cliente;
  cardapio: Cardapio;
  status: number; // 0 - CANCELADO | 1 - SOLICITADO(default) | 2 - PENDENTE | 3 - PAGO
}
