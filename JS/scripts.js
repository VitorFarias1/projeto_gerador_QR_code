const container = document.querySelector(".container");
const qrCodeButton = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImage = document.querySelector("#qr-code img");

//Functions
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeButton.innerText = "Gerando código..."
    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    
    qrCodeImage.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeButton.innerText = "Código criado!"
    })
}

//Events
qrCodeButton.addEventListener("click", () => {
    generateQrCode()
})

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQrCode()
    }
})

//Limpar área do Qr Code
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active")
        qrCodeButton.innerText = "Gerando código...!"
    }
})