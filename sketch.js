let fundo;
let personagem;
let xPersonagem = 10;
let yPersonagem = 220;
let inimigo;
let xInimigo = 620;
let yInimigo = 220;
let velocidadeXinimigo = 6;
let tamanhoInimigo = 150


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(fundo);
  image(personagem, xPersonagem, yPersonagem, 150, 150);
  movimentoPersonagem();
  image(inimigo, xInimigo, yInimigo, 150, tamanhoInimigo);
  inimigoMovimento();
  inimigoLimite();
  colisaoPersonagemcomInimigo();
}

function movimentoPersonagem(){
  if(keyIsDown(UP_ARROW)){
    ypersonagemtivernapocisaonormal();
    yPersonagem -= 190;
    setTimeout(voltepocisao, 800);
  }
}
function ypersonagemtivernapocisaonormal(){
  yPersonagem = 220;
}
function voltepocisao(){
  yPersonagem = 220;
}

function inimigoMovimento(){
  xInimigo -= velocidadeXinimigo
}

function inimigoLimite(){
  if(xInimigo < -50){
    limiteInimigo();
    xInimigo = 620;
  }
}

function colisaoPersonagemcomInimigo(){
  if(xPersonagem + yPersonagem > xInimigo + yInimigo){
    alert("Fim de jogo");
  }
}


function limiteInimigo(){
  if(velocidadeXinimigo < 12){
    velocidadeXinimigo += 0.2;
  }
}

function preload(){
  fundo = loadImage("floresta.jpg");
  personagem = loadImage("personagem.png");
  inimigo = loadImage("cacto.png");
}