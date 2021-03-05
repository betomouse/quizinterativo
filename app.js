/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

const form = document.querySelector('form')
const aceptAnswers = ['D', 'B', 'B', 'E']
const button = document.querySelector('button')
const popup = document.createElement('div')

const handleAnswers = event => {
    event.preventDefault()
    let score = 0
    const answers = [
        form.aswer1,
        form.aswer2,
        form.aswer3,
        form.aswer4
    
    ]

    const calcScore =  (answer, index) => {
        if(answer.value === aceptAnswers[index]) {
            score += 25
        }
    }
    answers.forEach(calcScore)

    const result = button.insertAdjacentElement('beforebegin', popup) 
    result.setAttribute('class', 'popup-wrapper')
    result.style.display = 'block'
    result.innerHTML = `
    <div class="popup">
     <div class="popup-close">x</div>
     <p class="result">Você fez ${score} pontos.</p>
    </div>
    `
    const closePopupClass = ['popup-close', 'popup-wrapper']
    const closePopup = event => {
        event.stopPropagation()
        const isClosePopupClass = closePopupClass.includes(event.target.className)

        if(isClosePopupClass) {
            result.style.display ='none'

            const initAnswers = answer => {
                const cleanInputs = input => {
                    input.checked = ''
                }
                answer.forEach(cleanInputs)
            }
            answers.forEach(initAnswers)
        }
        
    }

    popup.addEventListener('click', closePopup ) 
    
}

form.addEventListener('submit', handleAnswers)
