<?php
use App\Models\Produto;
use Illuminate\Database\Seeder;

class ProdutoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $produto1 = Produto::create([
            'titulo' => 'Mouse gamer multilaser 2400 dpi preto E grafite - MO269 - Padrão',
            'descricao' => 'Mouse Gamer Multilaser Preto, desenvolvido com efeito de luz de LED verde, super veloz, alcança até 2400 DPIs. Possui descanso de dedo ergonômico, mantendo o conforto e estabilidade durante os jogos. Para que o uso do seu computador seja melhor, mais confortável e dinâmico existe uma grande influência do mouse. É um acessório que pode até impactar em produtividade. Com um design ergonômico você terá em mãos um produto de qualidade que irá facilitar muito a sua vida no notebook ou PC. Imagens Meramente Ilustrativas',
            'imagens' => 'assets/images/mouse.png',
            'preco'=> '120.00',
            'precoPromocional' => '99.00',
            'estoque' => '10',
            'altura' => '10',
            'largura' => '20',
            'comprimento' => '30',
            'peso' => '100',
        ]);

        $produto2 = Produto::create([
            'titulo' => 'Smartphone Samsung Galaxy A03 Core 32GB 4G Wi-Fi Tela 6.5 Dual Chip 2GB RAM Câmera 8MP + Selfie 5MP',
            'descricao' => 'A linha A da Samsung continua crescendo, conheça o Galaxy A03 Core que combina a potência de processamento Octa-core e 2 GB de RAM, para um desempenho rápido e eficiente. Ele vem com 32 GB de armazenamento interno, podendo ser ampliado e garantir ainda mais espaço com um cartão microSD de até 1 TB (vendido separadamente). Para fotos nítidas e deslumbrantes o Galaxy A03 Core conta com a câmera principal de 8MP e uma câmera frontal de 5 MP para aquelas selfies perfeitas. Sua bateria de 5.000 mAh permite que você continue realizando suas atividades, por horas.',
            'imagens' => '/assets/images/celular.jpg',
            'preco'=> '1999.00',
            'precoPromocional' => '1500',
            'estoque' => '5',
            'altura' => '10',
            'largura' => '20',
            'comprimento' => '30',
            'peso' => '250',
        ]);

        $produto3 = Produto::create([
            'titulo' => 'Notebook Positivo Motion C 15 Intel Celeron N4020 4GB 128GB W11 15,6 + Alexa Integrada + Office M365 + 2 Anos De Garantia',
            'descricao' => 'Notebook Positivo Motion Gray Intel Celeron 4GB Positivo Motion C - Agora com 2 anos de garantia de fábrica e Alexa integrada. Com o avanço da tecnologia e a correria do dia a dia, fica complicado estar preso a um computador convencional com CPU, monitor e outros periféricos. O Notebook é um aparelho eletrônico que auxilia a sua rotina seja onde você estiver, no trabalho, nos horários de estudo e nos momentos de lazer. A Positivo apresenta o Notebook Motion Gray C4128g-15. Ele tem design contemporâneo e refinado com acabamento texturizado fosco, que não deixa marcas de dedos. A tela HD Widescreen é de 15,6" com resolução 1366x768 antirreflexiva (Matte) e painel TN. Conta com processador Intel Celeron Dual Core, 4GB de RAM, 128GB de capacidade do eMMC, armazenamento em nuvem com Dropbox com uso grátis por 1 ano e sistema operacional Windows 11 Home. Para não tem abandonar a bateria tem duração de até 8 horas. Mais tempo para suas atividades. Agora todo lugar vira sala de estudo ou um escritório. E com assistente de voz Alexa integrada, é diversão ou informação e ajuda nas tarefas apenas por comando de voz. Você pode usar sua voz para pedir informações, músicas, notícias e muitos mais, além de poder controlar seus dispositivos inteligentes e desfrutar de todas as funcionalidades que o app Alexa possui.',
            'imagens' => '/assets/images/laptop.jpg',
            'preco'=> '2500.00',
            'precoPromocional' => '1999.00',
            'estoque' => '2',
            'altura' => '10',
            'largura' => '20',
            'comprimento' => '30',
            'peso' => '2000',
        ]);
    }
}
