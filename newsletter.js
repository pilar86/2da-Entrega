
const email = document.getElementById("email")


newsform.addEventListener("", e=>{
    e.preventDefault()
    let warnings = ""
    let suscribite = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        suscribite = true
    }
    if(suscribite){
        parrafo.innerHTML = warnings
    }else{
        Swal.fire({
            title: 'Mensaje enviado!',
            text: 'Revise su casilla de correo',
            icon:'success',
            timer:5000
         });
    }
})

    

Swal.fire({
    title: 'Suscribite al Newsletter!',
    text: 'No te pierdas de las novedades y descuentos.',
    imageUrl: './img/backNews.jpg',
    imageWidth: 400,
    imageHeight: 260,
    imageAlt: 'Custom image',
  })

