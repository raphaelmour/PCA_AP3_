function Enviar() {

   var nome = document.getElementById('nomeid');
   var email = document.getElementById('email');
   var assunto = document.getElementById('assunto')
   var msg = document.getElementById('msg');
   const button = document.getElementById('button')
   
   button.addEventListener('click', (event) => {
       event.preventDefault();
   })

   if (nome.value == '') {
       nome.classList.add('errorInput')
   } else {
    nome.classList.remove('errorInput')
   }

   if (email.value == '') {
       email.classList.add('errorInput')
   } else {
       email.classList.remove('errorInput')
   }

   if (assunto.value == '') {
       assunto.classList.add('errorInput')
   } else {
       assunto.classList.remove('errorInput')
   }

   if (msg.value == '') {
       msg.classList.add('errorInput')
   } else {
       msg.classList.remove('errorInput')
   }

   if (nome.value != "" && email.value != "" && assunto.value != "" && msg.value != "") {
    alert(nome.value + ', suas informações foram enviadas com sucesso!');      
    }
   
}

