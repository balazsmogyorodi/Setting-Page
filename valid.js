// window.addEventListener("load", init)

// function init() {
//     validateForm();
// }

function validateForm() {
    let x = document.validTeszt.knev.value;
    if (x === "") {
        alert("A mező kitöltése kötelező!");
        return false;
    }
   
    
    let y = document.validTeszt.vnev.value;
    if(y === ""){
        alert("A mező kitöltése kötelező!");
        return false;
    }
    

    let password = document.validTeszt.jelszo.value;
    if (password === "") {
        alert("A mező kitöltése kötelező!");
        return false;
    }
    let megerosit = document.validTeszt.jelszoMegerositese.value;
    if (megerosit !== password) {
        alert("Nem egyezik meg a jelszóval!");
        return false;
    }

}