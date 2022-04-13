document.getElementById("maintenance-login").addEventListener("click", ()=>{
    let password = document.getElementById("login-input");
    if (password.value === "BSCDental") { // NOT SECURE - server validation prefered
        window.location.href = "index.html";
    } else {
        // alert('Incorrect password'); // an alert for speed sake
        alert(document.URL);
    }
});