var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem) {
    case 0: 
    console.log('Domingo')
    case 1:
    console.log('Segunda')
    break
    case 2: 
    console.log('Terça')
    break
    case 3: 
    console.log('quarta')
    break
    case 4: 
    console.log('quinta')
    break
    case 5:
    console.log('sexta')
    break
    case 6:
    console.log('sabado')
    break
    
}