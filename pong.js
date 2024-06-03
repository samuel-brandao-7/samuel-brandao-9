//variáveis da bolinha 
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() { 
 createCanvas(600, 400); 
}

function draw() {
  background(0);
  let velocidadeYOponente;
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
}

function mostraBolinha() {
  cicle(xBolinha, yBolinha. diametro);
}

function movimentoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {}
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
if (ybolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
 }


function mostraRaquete () {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}
function movimentaMinhaRaquete() {
  if(kevIsDown(UP_ARROW)) {
     yRaquete -= 10;
  }
  if(keyIlDown(DOWM_ARROW)) {
    yRaquete -= 10;
  }
}

   rect(x,y,raqueteLargura,raqueteAltura);



function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
     yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}


function verificaColisaoRaquete(x,y) {
    colidiu = collideRectCircle(x,y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
    }
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 -30;
  yRaqueteOponente += velocidadeYOponnete
}
