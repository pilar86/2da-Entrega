
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");
const btn_enviar = document.querySelector("#btn-enviar")




let validarForm = () => {
};



let limpiar = () => {

    nameInput.value = "";
    email.value = "";
    message.value = "";
};

    

let obtener_datos = () => {
    
    let error = validar();


        if (error) {
                Swal.fire({
                    title:'Consulta NO enviada!',
                    text: 'Verifique todos los campos',
                    icon: 'warning'
                });

        } else {

                Swal.fire({
                    title: 'Mensaje enviado!',
                    text: 'Revise su casilla de correo',
                    icon:'success'
                 });
        }
}


btn_enviar.addEventListener('click', obtener_datos);




/*let obtener_datos = () => {
    let error_validacion = validar();

    if (!error_validacion) {


            swall.fire({
                title: 'Mensaje enviado!',
                text: 'Revise su casilla de correo',
                icon:'success'
            })

    } else {

            swall.fire({
                title:'Consulta NO enviada!',
                text: 'Verifique todos los campos',
                icon: 'warning'
            })

    }
};
*/
