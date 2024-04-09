import { question_3 } from '../question.js';

document.addEventListener('DOMContentLoaded', function () {
    let contagem = 1;
    let acertos = 0;
    let erros = 0;
    let currentQuestionIndex = 0;
    let respostaClicada = false;

    const result = document.getElementById('result')
    const selectResponse = document.getElementById('quiz');
    const pergunta = document.getElementById('pergunta');
    const reset = document.getElementById('reset');
    const retorno = document.getElementById('retorno');

    function nextQuestion() {
        // Verifica se ainda há perguntas restantes
        if (currentQuestionIndex <= question_3.length - 1) {
            currentQuestionIndex++;
        } else {
            alert('acertou todas');
            return;
        }

        // Seleciona a próxima pergunta e embaralha as opções de resposta
        
        const currentAnswers = question_3[currentQuestionIndex - 1];
        console.log(currentAnswers)
        shuffleAnswersOpcoes(currentAnswers.opcoes);
        pergunta.textContent = currentAnswers.question;

        result.innerHTML = `
            <span>${contagem}/${question_3.length}
        `

        // Atualiza as opções de resposta na tela
        selectResponse.innerHTML = `
                <button id='button_1' onClick="responseAlternative(${currentAnswers.opcoes[0].correct})"><strong>${currentAnswers.opcoes[0].option}</strong></button>
                <button id='button_2' onClick="responseAlternative(${currentAnswers.opcoes[1].correct})"><strong>${currentAnswers.opcoes[1].option}</strong></button>
                <button id='button_3' onClick="responseAlternative(${currentAnswers.opcoes[2].correct})"><strong>${currentAnswers.opcoes[2].option}</strong></button>
                <button id='button_4' onClick="responseAlternative(${currentAnswers.opcoes[3].correct})"><strong>${currentAnswers.opcoes[3].option}</strong></button>
        `;

        respostaClicada = false;

        // Avança para a próxima pergunta após um pequeno atraso (por exemplo, 20 segundos)
       setTimeout(() => {
           if (!respostaClicada) {
             nextQuestion();
            }
        }, 20000); // 20000 milissegundos = 20 segundos
    }

    window.responseAlternative = (alternativa) => {
        respostaClicada = true; // Define que uma resposta foi clicada
        if (alternativa) {
            acertos++;
            console.log(acertos)
        } else {
            erros++;
            alert('Resposta errada!' + erros);
            console.log(erros)
        }
        contagem++;

        nextQuestion()
    };

    function shuffleAnswersOpcoes(opcoes) {
        for (let i = opcoes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
        }
    }

    function shuffleQuestions() {
        for (let i = question_3.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question_3[i], question_3[j]] = [question_3[j], question_3[i]];
        }
    }

    reset.addEventListener('click', function () {
        reiniciar();
    });

    function reiniciar() {
        acertos = 0;
        erros = 0;
        currentQuestionIndex = 0;
        shuffleQuestions(); // Embaralha as perguntas novamente
        nextQuestion();
    }

    // Embaralha as perguntas inicialmente
    shuffleQuestions();
    // Inicia o quiz com a primeira pergunta
    nextQuestion();

    //retorno.addEventListener('click', function () {

    //});
});
