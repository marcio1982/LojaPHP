<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idUsuario')->references('id')->on('users')->onDelete('cascade');
            $table->date('dataPedido');
            $table->string('tipoPagamento',30);
            $table->float('total',8,2);
            $table->float('frete',8,2);
            $table->string('enderecoEntrega');
            $table->string('observacao');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
}
