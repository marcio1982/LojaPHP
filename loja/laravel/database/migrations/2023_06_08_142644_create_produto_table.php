<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProdutoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produto', function (Blueprint $table) {
            $table->id();
            $table->string('titulo')->nullable(false);
            $table->text('descricao')->nullable(false);
            $table->text('imagens')->nullable(false);
            $table->float('preco', 10, 2)->nullable(false);
            $table->float('precoPromocional', 10, 2)->nullable(true);
            $table->integer('estoque')->nullable(false);
            $table->float('altura', 10, 2)->nullable(false);
            $table->float('largura', 10, 2)->nullable(false);
            $table->float('comprimento', 10, 2)->nullable(false);
            $table->float('peso', 10, 2)->nullable(false);
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
        Schema::dropIfExists('produto');
    }
}
