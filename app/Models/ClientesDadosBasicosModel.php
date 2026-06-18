<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientesDadosBasicosModel extends Model
{
    protected $table = 'clientes_dados_basicos';
    protected $primaryKey = 'id';

    protected $fillable = [
        'nome',
        'tipo_pessoa',
        'cpf_cnpj',
        'rg_inscricao_estadual',
        'data_nascimento_fundacao',
        'profissao',
        'nacionalidade',
        'ativo',
    ];
}
