const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre a história de Leah MacKenzie, uma garota de 17 anos que depende de um coração artificial transportado numa mochila para sobreviver. Qual é a sua primeira reação diante dessa situação delicada?",
        alternativas: [
            {
                texto: "Acho assustador e angustiante ver alguém dependendo de um aparelho para continuar viva.",
                afirmacao: "Você sentiu o peso da fragilidade da vida de Leah logo de início."
            },
            {
                texto: "Acho inspirador como ela demonstra força de vontade mesmo com tantas limitações.",
                afirmacao: "Você enxergou a resiliência e a coragem de Leah diante da adversidade."
            }
        ]
    },
    {
        enunciado: "Inesperadamente, surge um doador compatível com o tipo sanguíneo raro de Leah. No entanto, o órgão vem de uma tragédia local. Como você encara essa notícia?",
        alternativas: [
            {
                texto: "Como um milagre para Leah, mas acompanhado pela tristeza de saber que outra pessoa perdeu a vida.",
                afirmacao: "Compreendeu a dolorosa dualidade do transplante, onde o recomeço de um nasce da perda de outro."
            },
            {
                texto: "Como uma oportunidade única de recomeço que deve ser abraçada sem hesitação.",
                afirmacao: "Focou na esperança e na celebração da nova chance de viver."
            }
        ]
    },
    {
        enunciado: "Após o transplante bem-sucedido, Leah começa a ter pesadelos realistas e sensações estranhas que parecem pertencer ao doador, Eric Kenner. O que ela deveria fazer?",
        alternativas: [
            {
                texto: "Investigar a fundo o que aconteceu com Eric para entender a origem dessas memórias.",
                afirmacao: "Apoiou a busca da verdade, encarando os mistérios que cercavam o antigo dono do coração."
            },
            {
                texto: "Focar em sua recuperação médica e tentar ignorar essas visões perturbadoras.",
                afirmacao: "Preferiu focar na paz e no cuidado com a saúde física e mental."
            }
        ]
    },
    {
        enunciado: "Leah decide se aproximar de Matt Kenner, o irmão gêmeo de Eric, que recusa a ideia de que o irmão tenha tirado a própria vida. O que você acha dessa união?",
        alternativas: [
            {
                texto: "É uma parceria importante para que ambos consigam encontrar respostas e superar a dor.",
                afirmacao: "Valorizou a união, o companheirismo e o apoio mútuo no processo de cura."
            },
            {
                texto: "É algo arriscado, pois mexer com o passado pode trazer perigos imprevisíveis.",
                afirmacao: "Reconheceu os perigos e a tensão de se envolver em um segredo não resolvido."
            }
        ]
    },
    {
        enunciado: "No fim da jornada, diante dos mistérios desvendados e dos sentimentos revelados, qual lição fica mais evidente para você?",
        alternativas: [
            {
                texto: "Que o amor e a verdade têm o poder de curar até as feridas mais profundas.",
                afirmacao: "Concluiu que enfrentar a verdade e abrir o coração é o único caminho para a paz interior."
            },
            {
                texto: "Que a vida é curta e preciosa, e cada segundo deve ser vivido intensamente.",
                afirmacao: "Concluiu que a vida deve ser aproveitada ao máximo, valorizando cada novo batimento do coração."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada com 'Eu e Esse Meu Coração':";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();