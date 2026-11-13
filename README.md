# Jurisflow

[![PHP](https://img.shields.io/badge/PHP-8.3+-777BB4?logo=php&logoColor=white)](https://www.php.net)
[![Laravel](https://img.shields.io/badge/Laravel-13-FF2D20?logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/license/mit)

Workspace jurídico para escritórios que precisam de mais clareza na rotina: clientes, prazos e andamento dos processos em um só lugar.

Projeto de portfólio, em construção. A tela publicada hoje é a página inicial, com a proposta do produto e o acesso à plataforma.

## Sumário

- [Stack](#stack)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts](#scripts)
- [Estrutura](#estrutura)
- [Licença](#licença)

## Stack

| Camada | Tecnologia |
| --- | --- |
| Backend | Laravel 13, PHP 8.3+ |
| Frontend | Inertia.js, React 19, TypeScript |
| Interface | Tailwind CSS 4, componentes no estilo shadcn |
| Build | Vite |
| Banco local | SQLite |
| Qualidade | Pint, PHPStan, Pest |

## Pré-requisitos

- PHP 8.3 ou superior
- Composer 2
- Node.js 22
- npm

## Instalação

```bash
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate
npm install
```

Para instalar, gerar a chave, migrar e gerar o build de produção de uma vez:

```bash
composer setup
```

## Uso

```bash
composer run dev
```

A aplicação fica disponível em somente em local


## Scripts

| Comando | O que faz |
| --- | --- |
| `composer run dev` | Sobe a aplicação em desenvolvimento |
| `composer setup` | Instala dependências, configura o `.env` e gera o build |
| `npm run dev` | Sobe só o Vite |
| `npm run build` | Gera os assets de produção |
| `npm run types:check` | Checa os tipos do TypeScript |
| `composer test` | Roda Pint, PHPStan e Pest |
| `composer ci:check` | Roda as verificações usadas no CI |

O workflow em [`.github/workflows/tests.yml`](.github/workflows/tests.yml) executa `composer ci:check` em push e pull request para a `main`.

## Estrutura

```text
app/                  Aplicação Laravel
resources/js/pages/   Páginas Inertia
resources/js/components/ui/  Componentes de interface
routes/web.php        Rotas web
tests/                Testes Pest
```

## Licença

Distribuído sob a licença [MIT](https://opensource.org/license/mit).
