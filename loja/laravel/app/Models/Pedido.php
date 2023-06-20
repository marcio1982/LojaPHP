<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $table = "pedido";

    protected $primaryKey = 'id';

    protected $fillable = [
        'customer_id',
        'address',
        'amount_order',
        'deliver_date',
        'way_to_pay',
        'change',
        'status',
        'observation_order'
    ];

    //relacion uno a muchos en productos
    public function produto(){
        return $this->hasMany('App\Models\Produto');
    }

    //relacion uno a muchos en productos
    public function itensPedido(){
        return $this->hasMany('App\Models\ItensPedido');
    }
}
