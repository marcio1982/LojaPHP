<?php

use App\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@teste.com',
            'password' => bcrypt('admin'),
            'tipo'=> 'admin',
            'endereco' => 'rua 123',
            'bairro' => 'zona 03',
            'cidade' => 'Maringá',
            'uf' => 'PR',
            'cep' => '87000123',
            'telefone' => '(44) 1234-9874', 
        ]);

        //$users = factory(User::class, 5)->create();

        $user = User::create([
            'name' => 'Cliente Teste',
            'email' => 'cliente@teste.com',
            'password' => bcrypt('cliente'),
            'tipo'=> 'cliente',
            'endereco' => 'rua joao de barro',
            'bairro' => 'zona 07',
            'cidade' => 'Maringá',
            'uf' => 'PR',
            'cep' => '87043070',
            'telefone' => '(44) 12345-9874',
        ]);

        //$users = factory(User::class, 6)->create();
    }
}
