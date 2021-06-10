var i = 0;
var qtd = imagem.length;
qtd = qtd-1;


function carrossel() {
	document.getElementById('meuCarrossel').src = imagem[i];
	document.getElementById('meuCarrossel').style.opacity=1;
	setTimeout(function(){ fadeout(i); }, time);
}

function fadeout(v) {
	var i = v;
	document.getElementById('meuCarrossel').style.opacity=0;
	setTimeout(function(){ rand(i); }, 300);
}	

function rand(v){
	var i = v;
	i = i+1;
	document.getElementById('meuCarrossel').src = imagem[i];
	document.getElementById('meuCarrossel').style.opacity=1;
	
	if(i==qtd)
	i=-1;
	
	setTimeout(function(){ fadeout(i); }, time);
}	