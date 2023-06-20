export interface Pedido {
    id: number;
    idUsuario: number;
    dataPedido: Date;
    tipoPagamento: string;
    total: number;
    frete: number;
    enderecoEntrega: string;
    observacao: string;
}

export interface itensPedido extends Pedido {
    id: number;
    idPedido: number;
    idProduto: number;
    preco: number;
    quantidade: number;
    total: number;
  }
  
  export const itensPedido = [
  
  ]