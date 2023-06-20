<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Produto;
Use Log;

class ProdutoController extends Controller
{
    
    public function getAll(){
      $data = Produto::get();
      return response()->json($data, 200);
    }


    public function search($request)
    {
      if($request != ""){
        $data = Produto::where('titulo', 'like', '%'.$request.'%')->orWhere('descricao', 'like', '%'.$request.'%')->get();
      }
      return response()->json($data, 200);
    }

    /*public function search($request)
    {
      Log::info('test log'.$request);
      $data =  Produto::where('titulo', 'like', '%'.$request.'%')->orWhere('descricao', 'like', '%'.$request.'%')->get();
      Log::info(response()->json($data, 200));
      return response()->json($data, 200);
    }*/

    public function create(Request $request){
        $data['titulo'] = $request['titulo'];
        $data['descricao'] = $request['descricao'];
        $data['imagens'] = $request['imagens'];
        $data['preco'] = $request['preco'];
        $data['precoPromocional'] = $request['precoPromocional'];
        $data['estoque'] = $request['estoque'];
        $data['altura'] = $request['altura'];
        $data['largura'] = $request['largura'];
        $data['comprimento'] = $request['comprimento'];
        $data['peso'] = $request['peso'];
        Produto::create($data);
        return response()->json([
            'message' => "Produto criado com sucesso!!!",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Produto::find($id)->delete();
        return response()->json([
            'message' => "Produto deletado com sucesso!!",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Produto::find($id);
        return response()->json($data, 200);
      }

      public function update(Request $request,$id){
        $data['titulo'] = $request['titulo'];
        $data['descricao'] = $request['descricao'];
        
        $data['preco'] = $request['preco'];
        $data['precoPromocional'] = $request['precoPromocional'];
        $data['estoque'] = $request['estoque'];
        $data['altura'] = $request['altura'];
        $data['largura'] = $request['largura'];
        $data['comprimento'] = $request['comprimento'];
        $data['peso'] = $request['peso'];

        $data['imagens'] = $request['imagens'];
        
       /* if (data['imagens'] != null && $image = $request->file($data['imagens'])) {
          $destinationPath = '/';
          $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
          $image->move($destinationPath, $profileImage);
          $data['imagens'] = $profileImage;
        }else{
          unset($data['imagens']);
        }*/
        Produto::find($id)->update($data);
        return response()->json([
            'message' => "Produto atualizado com sucesso!!",
            'success' => true
        ], 200);
      }
}
