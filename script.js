const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generatebtn');
const downloadBtn = document.getElementById('downloadbtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();
});

function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

function isEmptyInput() {
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");
}

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior

    let img = document.querySelector('.qr-body img');

    if (img !== null) {
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAttr);
        downloadBtn.setAttribute("download", "qrcode.png"); // Suggest adding a download attribute
    } else {
        let canvas = document.querySelector('canvas');
        if (canvas) {
            let imgUrl = canvas.toDataURL();
            downloadBtn.setAttribute("href", imgUrl);
            downloadBtn.setAttribute("download", "qrcode.png"); // Suggest adding a download attribute
        } else {
            alert("QR code not generated yet.");
        }
    }
});











