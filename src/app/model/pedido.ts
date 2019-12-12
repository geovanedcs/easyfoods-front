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
  status: number; // 0 - Cancelado, 1 - solicitado, 2 - pendente(pagamento), 3 - pago

}
