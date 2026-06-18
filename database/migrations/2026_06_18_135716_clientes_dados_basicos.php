<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clientes_dados_basicos', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('tipo_pessoa');
            $table->string('cpf_cnpj');
            $table->string('rg_inscricao_estadual')->nullable();
            $table->date('data_nascimento_fundacao')->nullable();
            $table->string('profissao')->nullable();
            $table->string('nacionalidade')->nullable();
            $table->boolean('ativo')->default(true);
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clientes_dados_basicos');
    }
};
