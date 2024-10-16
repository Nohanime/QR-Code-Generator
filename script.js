let qrcode = null;

function generateQR() {
  const text = document.getElementById("qr-text").value;
  const qrcodeContainer = document.getElementById("qrcode");

  // Effacer le QR code précédent
  qrcodeContainer.innerHTML = "";

  // Créer un nouveau QR code
  qrcode = new QRCode(qrcodeContainer, {
    text: text,
    width: 300,
    height: 300,
  });
}
