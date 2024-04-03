import {question_1} from '../question.mjs'

document.addEventListener('DOMContentLoaded', function() {
    const selectResponse = document.getElementById('quiz_2');
    const pergunta = document.getElementById('pergunta')

    // Seleciona uma pergunta aleatória da lista de perguntas
    const aleatoriaPerguntas = Math.floor(Math.random() * question_1.length)
    const currentAnswers = question_1[aleatoriaPerguntas];

    shuffleAnswersOpcoes(currentAnswers.opcoes); //deixa aleatório a resposta
    pergunta.textContent = currentAnswers.question; //define a pergunta

    selectResponse.innerHTML = `
        <button id='button_1' onClick="responseAlternative(${currentAnswers.opcoes[0].correct})"><strong>${currentAnswers.opcoes[0].option}</strong></button>
        <button id='button_2' onClick="responseAlternative(${currentAnswers.opcoes[1].correct})"><strong>${currentAnswers.opcoes[1].option}</strong></button>
        <button id='button_3' onClick="responseAlternative(${currentAnswers.opcoes[2].correct})"><strong>${currentAnswers.opcoes[2].option}</strong></button>
        <button id='button_4' onClick="responseAlternative(${currentAnswers.opcoes[3].correct})"><strong>${currentAnswers.opcoes[3].option}</strong></button>
    `; // cria um elemento dinamico

    console.log('Botões:', button_1, button_2, button_3, button_4);

    window.responseAlternative = (alternativa) => {
        if (alternativa) {
            alert('resposta certa');
        } else {
            alert('resposta errada');
        }
    }// função para determinar se está certa ou errada

    function shuffleAnswersOpcoes(opcoes) {
        for (let i = opcoes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
        }
    }; //função que embaralha os arrays answers

}); 