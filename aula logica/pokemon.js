let nomesPokemon = ["Poochyena" , "ZigZagoon" , "Dragonite" , "Dragonite" , "Dragonitte" , "Poochyena" , "Hurmple"]
let nivelPokemon = [2 , 2 , 5 , 5 , 5 , 3 , 2]
let vidaPokemon = [13 , 13 , 25 , 24 , 24 , 15 , 14]

console.log(nomesPokemon[0] + " cadastrado com sucesso")
console.log(nomesPokemon[1] + " cadastrado com sucesso")
console.log(nomesPokemon[2] + " cadastrado com sucesso")
console.log(nomesPokemon[3] + " cadastrado com sucesso")
console.log(nomesPokemon[4] + " cadastrado com sucesso")
console.log(nomesPokemon[5] + " cadastrado com sucesso")
console.log(nomesPokemon[6] + " cadastrado com sucesso")

console.log("O " + nomesPokemon[0] + " tem o nível " + nivelPokemon[0] + " e " + vidaPokemon[0] + " de hp") 


let vencer = nivelPokemon[2]>= 3

if(vencer){
  console.log("o pokemon venceu")
} else {
  console.log("o pokemon perdeu")
}


// agora vamos supor que meu pokemon Hurmple está com menos vida do que o normal, o normal dele seria 18 de vida, então ele precisa tomar uma poção para recuperar. Para isso criei o for, e no pontosVida tive que puxar a vida do meu pokemon da matriz lá em cima.


let pontosVida = vidaPokemon[6] 

for(let i = vidaPokemon[6]; i < 18; i++){
    pontosVida +=1
    console.log("Tomou poção mágica " + i)
}

console.log(pontosVida + " Totais")
