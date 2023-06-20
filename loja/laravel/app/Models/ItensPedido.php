<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItensPedido extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'product_id',
        'amount_product',
        'quantity',
        'total_amount',
        'observation_product'
    ];

    public function pedido(){
        return $this->belongsTo('App\Models\Pedido');
    }

    public function produto(){
        return $this->belongsTo('App\Models\Produto');
    }
}
