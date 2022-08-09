var agora = new Date() // A variavel pega a data atual
var hora = agora.getHours() // A variavel agora pega o horario atual

if(hora < 12){
      console.log('Bom dia!')
} else if (hora <= 18) {
     console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
