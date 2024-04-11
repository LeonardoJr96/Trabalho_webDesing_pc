//ficara as classses com as respostas
const question_1 = [
    {
        question: "Qual é a linguagem de programação usada principalmente para estilizar páginas da web?",
        opcoes: [
        {option: "CSS", correct: true},
        {option: "Python", correct: false},
        {option: "JavaScript", correct: false},
        {option: "Ruby", correct: false}
        ]
    }, 
    {
        question: "Qual das seguintes opções é um tipo de estrutura de dados em JavaScript?",
        opcoes: [
         { option: "Lista", correct: true },
         { option: "Tabela", correct: false },
         { option: "Caixa de Seleção", correct: false },
         { option: "Todos os anteriores", correct: false }
        ],
    },
    {
        question: "Em HTML, qual tag é usada para definir uma lista não ordenada?",
        opcoes: [
         { option: "< ul >", correct: true },
         { option: "< ol >", correct: false },
         { option: "< list >", correct: false },
         { option: "< li >", correct: false }
        ],
    },
    {
        question: 'O que o acrônimo "CSS" significa?',
        opcoes: [
         { option: "Cascading Style Sheets", correct: true },
         { option: "Computer Style Sheets", correct: false },
         { option: "Custom Style Script", correct: false },
         { option: "Creative Style Selector", correct: false }
        ],
    },
    {
        question: "Qual é a sintaxe correta para criar uma função em JavaScript?",
        opcoes: [
         { option: "function minhaFuncao(){}", correct: true },
         { option: " função minhaFuncao(){}", correct: false },
         { option: "def minhaFuncao(){}", correct: false },
         { option: "function = minhaFuncao  (){}", correct: false }
        ],
    },
    {
        question: "Qual é o seletor de ID em CSS",
        opcoes: [
         { option: "#", correct: true },
         { option: ".", correct: false },
         { option: "@", correct: false },
         { option: "&", correct: false }
        ],
    },
    {
        question: 'Qual é a função do operador "++" em JavaScript?',
        opcoes: [
         { option: "Incrementa um valor", correct: true },
         { option: "Decrementa um valor", correct: false },
         { option: "Divide um valor", correct: false },
         { option: "Atribui um valor", correct: false }
        ],
    },
    {
        question: 'Em HTML, qual elemento é usado para criar um link?',
        opcoes: [
         { option: "a", correct: true },
         { option: "link", correct: false },
         { option: "href", correct: false },
         { option: "url", correct: false }
        ],
    },
    {
        question: 'Qual é a estrutura de repetição em JavaScript que executa um bloco de código enquanto uma condição específica for verdadeira?',
        opcoes: [
         { option: "while", correct: true },
         { option: "for", correct: false },
         { option: "if", correct: false },
         { option: "do while", correct: false }
        ],
    }
]

const question_2 = [
    {
        question: "Quantas vezes o personagem Dominic Toretto foi interpretado por Vin Diesel na série de filmes 'Velozes e Furiosos'?",
        opcoes: [
            {option: "8", correct: true},
            {option: "6", correct: false},
            {option: "7", correct: false},
            {option: "9", correct: false}
        ]
    },
    {
        question: "Em 'Velozes e Furiosos 7', qual foi o último carro dirigido por Paul Walker como Brian O'Conner?",
        opcoes: [
            {option: "Toyota Supra", correct: true},
            {option: "Dodge Charger", correct: false},
            {option: "Nissan Skyline GT-R", correct: false},
            {option: "Ford Mustang", correct: false}
        ]
    },
    {
        question: "Qual é o modelo do carro que Dom Toretto (Vin Diesel) usa para correr contra Brian O'Conner (Paul Walker) na cena final de 'Velozes e Furiosos'?",
        opcoes: [
            {option: "Dodge Charger", correct: true},
            {option: "Toyota Supra", correct: false},
            {option: "Chevrolet Camaro", correct: false},
            {option: "Nissan Skyline GT-R", correct: false}
        ]
    },
    {
        question: "Quantos filmes da série 'Velozes e Furiosos' foram lançados até 2022?",
        opcoes: [
            {option: "9", correct: true},
            {option: "8", correct: false},
            {option: "10", correct: false},
            {option: "7", correct: false}
        ]
    },
    {
        question: "Qual é o nome do personagem interpretado por Dwayne 'The Rock' Johnson na série 'Velozes e Furiosos'?",
        opcoes: [
            {option: "Luke Hobbs", correct: true},
            {option: "Deckard Shaw", correct: false},
            {option: "Dominic Toretto", correct: false},
            {option: "Brian O'Conner", correct: false}
        ]
    },
    {
        question: "Em 'Velozes e Furiosos 6', qual cidade é palco da cena de abertura da corrida entre Dom e Brian?",
        opcoes: [
            {option: "Las Vegas", correct: true},
            {option: "Londres", correct: false},
            {option: "Rio de Janeiro", correct: false},
            {option: "Los Angeles", correct: false}
        ]
    }
]

const question_3 = [
    {
        question: "Qual é o resultado de 5 + 3?",
        opcoes: [
            {option: "7", correct: true},
            {option: "8", correct: false},
            {option: "6", correct: false},
            {option: "9", correct: false}
        ]
    },
    {
        question: "Quanto é 12 dividido por 3?",
        opcoes: [
            {option: "4", correct: true},
            {option: "3", correct: false},
            {option: "6", correct: false},
            {option: "2", correct: false}
        ]
    },
    {
        question: "Se um pacote de bolachas custa $2 e você compra 3 pacotes, quanto você pagará no total?",
        opcoes: [
            {option: "$6", correct: true},
            {option: "$5", correct: false},
            {option: "$4", correct: false},
            {option: "$8", correct: false}
        ]
    },
    {
        question: "Qual é a área de um retângulo com comprimento 6 e largura 4?",
        opcoes: [
            {option: "24", correct: true},
            {option: "18", correct: false},
            {option: "12", correct: false},
            {option: "30", correct: false}
        ]
    },
    {
        question: "Qual é a raiz quadrada de 625?",
        opcoes: [
            {option: "25", correct: true},
            {option: "20", correct: false},
            {option: "30", correct: false},
            {option: "35", correct: false}
        ]
    },
    {
        question: "Se um ônibus viaja a uma velocidade média de 60 km/h, quantos quilômetros ele percorre em 2 horas?",
        opcoes: [
            {option: "120", correct: true},
            {option: "100", correct: false},
            {option: "140", correct: false},
            {option: "80", correct: false}
        ]
    }
]

export {question_1, question_2, question_3};