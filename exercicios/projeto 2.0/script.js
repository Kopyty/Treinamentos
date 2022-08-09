function verificar() {
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.querySelector('div#res')
 
     if (fano.value.length == 0 || fano.value > ano ) {
          window.alert('Verifique os dados e tente novamente')
     } else {
       var fsex = document.getElementsByName ('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'homem'
        if (idade >=00 && idade < 10 ) {
            // Criança
            img.setAttribute('src', 'midia/foto-bebe-m.png')

        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'midia/foto-jovem-m.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'midia/foto-adulto-m')
        } else {
            // Idoso
            img.setAttribute('src', 'midia/foto-idoso-m.png')
        }

       } else if(fsex[1].checked){
            genero = 'mulher'
       
            if (idade >=00 && idade < 10 ) {
                // Criança
                img.setAttribute('src', 'midia/foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'midia/foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'midia/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'midia/foto-idoso-f.png')
            }
       }

       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    
     }
}