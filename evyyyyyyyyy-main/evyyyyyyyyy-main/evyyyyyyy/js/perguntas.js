export const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ],
                proxima: 1,
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Ficou entusiasmado com as infinitas possibilidades da nova tecnologia.",
                    "Pensou nas diversas formas como isso poderia ajudar no dia a dia."
                ],
                proxima: 2,
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para ajudar a encontrar informações relevantes e explicar numa linguagem simples.",
                afirmacao: [
                    "Aprendeu a usar a IA como uma ferramenta prática para acelerar pesquisas de estudos.",
                    "Conseguiu resumir temas complexos com rapidez usando assistentes virtuais."
                ],
                proxima: 3,
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Preferiu focar no pensamento crítico próprio e na troca de ideias com pessoas reais.",
                    "Valorizou o conhecimento prévio e a reflexão em grupo."
                ],
                proxima: 4,
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nesse debate, como você se posiciona sobre o impacto da IA no futuro do trabalho?",
        alternativas: [
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Defendeu a proteção dos empregos tradicionais e a segurança dos trabalhadores.",
                    "Trouxe reflexões sobre os riscos de substituição de mão de obra."
                ],
                proxima: 5,
            },
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Acreditou no surgimento de novas carreiras e no aprimoramento das capacidades humanas através das máquinas.",
                    "Destacou o surgimento de novas profissões focadas em tecnologia."
                ],
                proxima: 6,
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design tradicional como o Paint.",
                afirmacao: [
                    "Valorizou o processo criativo manual e autoral na arte digital.",
                    "Preferiu desenhar cada detalhe com suas próprias mãos."
                ],
                proxima: 7,
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: [
                    "Explorou a geração de imagens por inteligência artificial para expressar suas ideias de forma rápida.",
                    "Usou prompts avançados para criar ilustrações impressionantes."
                ],
                proxima: 7,
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: [
                    "Entendeu que a IA precisa do discernimento humano para garantir a precisão das informações.",
                    "Revisou o conteúdo para garantir que a voz autêntica do grupo fosse preservada."
                ],
                proxima: 7,
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: [
                    "Passou a considerar o processo de elaboração de comandos (prompts) como parte da autoria do trabalho.",
                    "Acreditou que estruturar bons comandos já demonstra aprendizado relevante."
                ],
                proxima: 7,
            }
        ]
    },
    {
        enunciado: "Com todas essas experiências, qual será o seu próximo passo para continuar aprendendo sobre tecnologia?",
        alternativas: [
            {
                texto: "Aprofundar os estudos em programação e lógica para entender o funcionamento interno das ferramentas de IA.",
                afirmacao: [
                    "Decidiu dominar o código por trás da inteligência artificial.",
                    "Buscou cursos avançados de programação para criar suas próprias soluções."
                ]
                // Sem a chave 'proxima' -> final da história (undefined)
            },
            {
                texto: "Focar em ética e impacto social da tecnologia para garantir o uso responsável no futuro.",
                afirmacao: [
                    "Tornou-se um defensor do uso ético e consciente de novas tecnologias na sociedade.",
                    "Passou a liderar discussões sobre responsabilidade no desenvolvimento tecnológico."
                ]
                // Sem a chave 'proxima' -> final da história (undefined)
            }
        ]
    }
];