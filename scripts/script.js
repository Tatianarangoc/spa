const btn = document.querySelector(".btn");



btn.addEventListener("click", (e) => {
    e.preventDefault();
    validation();
})
function validation() {
    const msg = document.querySelector(".msgAlert")
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
        msg.innerHTML = ""
        text.innerHTML = "Hemos recibido su mensaje, muy pronto Nos pondremos en contacto";
        text.style.background = "	#00FF00"
    }


}