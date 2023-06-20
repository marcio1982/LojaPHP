<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Pedido;
use App\Models\ItensPedido;
use Illuminate\Support\Facades\DB;
use Auth;
Use Log;

class PedidoController extends Controller
{
    
    public function getAll(){
        //$data = Pedido::get();
         //$product = Order::with('companions')->where('id_product','=',$id)->get();

         $data = DB::table('pedidos')
         ->join('itens_pedidos', 'pedidos.id', '=', 'itens_pedidos.idPedido')
         ->join('produto', 'itens_pedidos.idProduto', '=', 'produto.id')
         ->select('pedidos.*', 'itens_pedidos.*', 'produto.titulo')
         //->where('pedidos.idUsuario', '=', Auth::user()->id)
         ->groupBy('itens_pedidos.idProduto','pedidos.id','itens_pedidos.id','produto.titulo')            
         ->get();        

        // return view('order.order',compact(['orders']));
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['dataPedido'] = $request['dataPedido'];
        $data['tipoPagamento'] = $request['tipoPagamento'];
        $data['total'] = $request['total'];
        $data['frete'] = $request['frete'];
        $data['enderecoEntrega'] = $request['enderecoEntrega'];
        $data['observacao'] = $request['observacao'];
        $data['idUsuario'] = $request['idUsuario'];
        Pedido::create($data);
        foreach (ItensPedido::getContent() as $d):
            //$itensPedido = new ItensPedido();
            $data_pedido['order_id'] = Pedido::id;
            $data_pedido['product_id'] = $d->id;
            $data_pedido['preco'] = $d->preco;
            $data_pedido['quantidade'] = $d->quantidade;
            $data_pedido['total'] = ($d->preco*$d->quantidade);
            $data_pedido['observacao'] = $d->observacao;
            //$itensPedido->save();
            ItensPedido::create($data_pedido);
        endforeach;
        ItensPedido::clear();   
        return response()->json([
            'message' => "Pedido criado com sucesso!!!",
            'success' => true
        ], 200);
      }
}
