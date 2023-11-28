  let heroinome = ["Mulher Maravilha" , "Mulher Aranha" , "Feiticeira Escarlate" , "Bat Girl" , "Gamora" , "SuperGirl" , "Viúva Negra" , "Mulher Invisível"]
  let xp = [800, 2000 , 5000 , 7000 , 8000 , 9000  , 10000 , 10001 ]
  //let classificacaoFerro = "Ferro"
  //let classificaoBronze = "Bronze"
  let classificacoes = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"]

  // essa é a forma simples

  //for (let i = 0; i < xp.length; i++)
  //if(xp[i] < 1000){
    //console.log(classificacaoFerro)
  //} else if(xp[i] >= 1001 && xp[i] <= 2000) {
    //console.log(classificaoBronze)
  //}

console.log("No nosso jogo temos os heróis " + heroinome + " e as classificações do jogo são" + classificacoes)


  // essa é a forma mais elaborado utilizando array
  for (let i = 0; i < xp.length; i++)
  if(xp[i] < 1000){
    console.log("A primeira classificação é " + classificacoes[0])
  } else if(xp[i] >= 1001 && xp[i] <= 2000) {
    console.log("A segunda classificação é " + classificacoes[1])
  } else if(xp[i] >=2001 && xp[i] <= 5000) {
    console.log("A terceira classificação é " + classificacoes[2])
  }  else if(xp[i] >=5001 && xp[i] <= 7000) {
    console.log("A quarta classificação é " + classificacoes[3])
  } else if(xp[i] >=7001 && xp[i] <= 8000) {
    console.log("A quinta classificação é " + classificacoes[4])
  } else if(xp[i] >=8001 && xp[i] <= 9000) {
    console.log("A sexta classificação é " + classificacoes[5])
  } else if(xp[i] >=9001 && xp[i] <= 1000) {
    console.log("A sétima classificação é " + classificacoes[6])
  } else if(xp[i] >=1001) {
    console.log("A ótima e última classificação é " + classificacoes[7])
  }
  

console.log("O Herói de nome " + heroinome[0] + " está no nível de " + classificacoes[0])
console.log("O Herói de nome " + heroinome[1] + " está no nível de " + classificacoes[1])
console.log("O Herói de nome " + heroinome[2] + " está no nível de " + classificacoes[2])
console.log("O Herói de nome " + heroinome[3] + " está no nível de " + classificacoes[3])
console.log("O Herói de nome " + heroinome[4] + " está no nível de " + classificacoes[4])
console.log("O Herói de nome " + heroinome[5] + " está no nível de " + classificacoes[5])
console.log("O Herói de nome " + heroinome[6] + " está no nível de " + classificacoes[6])
console.log("O Herói de nome " + heroinome[7] + " está no nível de " + classificacoes[7])

