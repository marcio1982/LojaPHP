export interface Produto {
    id: number;
    titulo: string;
    descricao: string;
    imagens: string;
    preco: number;
    precoPromocional: number;
    estoque: number;
    altura: number;
    largura: number;
    comprimento: number;
    peso: number;
}

export interface ProdutoCarrinho extends Produto {
    quantidade: number;
  }
  
  export const produtos = [
  
  ]
