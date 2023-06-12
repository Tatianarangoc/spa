const btn = document.querySelector(".btn");



btn.addEventListener("click", () => {

    validation();

})
function validation() {

    const text = document.querySelector(".text")
    const name = document.getElementById("name").value;
    const email = document.getElementById("mail").value;
    const phone = document.getElementById("number").value;
    const message = document.getElementById("msg").value;
    const checkbox = document.getElementById("privacy").value;


    if (name === "" || email === "" || phone === "" || message === "" || checkbox == "") {

        text.innerHTML = "Debe rellenar todos los campos"
    }
    else {
        text.innerHTML = ""
        text.innerHTML = "Hemos recibido su mensaje, muy pronto Nos pondremos en contacto";
        text.style.background = "	#00FF00"
    }


};