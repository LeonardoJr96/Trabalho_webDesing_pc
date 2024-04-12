# Quiz App Documentation

Este é um aplicativo de quiz simples que permite aos usuários responder a uma série de perguntas de múltipla escolha.

## Funcionalidades

- Apresenta perguntas de múltipla escolha aos usuários.
- Embaralha tanto as perguntas quanto as opções de resposta para oferecer uma experiência variada.
- Define um temporizador para cada pergunta, garantindo que o usuário responda dentro de um limite de tempo.
- Exibe os resultados finais do quiz, incluindo o número de perguntas respondidas corretamente e a porcentagem de acertos.

## Funções Principais

### nextQuestion()

Avança para a próxima pergunta no quiz, se houver, e atualiza a tela com a nova pergunta e opções de resposta. Se não houver mais perguntas restantes, a função exibirResultado() é chamada para mostrar o resultado final do quiz.

### responseAlternative(alternativa)

Chamada quando o usuário seleciona uma opção de resposta. Verifica se a resposta selecionada está correta ou não, atualizando os contadores de acertos e erros conforme necessário. Também inicia um novo timer após a seleção da resposta.

### startTimer()

Inicia um timer que conta 20 segundos. Se o usuário não selecionar uma resposta dentro desse tempo, a função passa para a próxima pergunta automaticamente.

### shuffleAnswersOpcoes(opcoes)

Embaralha as opções de resposta para garantir que sejam exibidas de forma aleatória para o usuário.

### shuffleQuestions()

Embaralha as perguntas do quiz para oferecer uma ordem variada a cada execução.

### reiniciar()

Reinicia o quiz, redefinindo os contadores de acertos e erros, embaralhando novamente as perguntas e iniciando o quiz com a primeira pergunta.

### exibirResultado()

Mostra o resultado final do quiz, incluindo o número de perguntas respondidas corretamente, o total de perguntas e a porcentagem de acertos.

