narizx = 0
narizy = 0

function preload(){
  filtro = loadImage("https://i.postimg.cc/pdZHQDQK/Design-sem-nome-70.png")
}

function setup() {
  canvas = createCanvas(300,300)
  video = createCapture(VIDEO)
  video.size(300,300)
  video.hide()
  poseNet = ml5.poseNet(video,carregado)
  poseNet.on("pose", obterPoses)
}

function carregado(){
  console.log("carregado com sucesso")
}

function obterPoses(results){
if(results.length>0) 
{
  console.log(results)
  narizx = results[0].pose.nose.x
  narizy = results[0].pose.nose.y
} 
}

function draw(){
image(video,0,0,300,300)
image (filtro,narizx-75,narizy-80,150,150)
}

function takeSnapshot(){
  save("image.png")
}
