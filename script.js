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

//---------------------------------------------------------------------

function togglePasswordVisibility(inputId, iconId) {
  const passwordInput = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.src = "./images/visibility_off.svg";
    icon.alt = "Hide password";
  } else {
    passwordInput.type = "password";
    icon.src = "./images/visibility.svg";
    icon.alt = "Show password";
  }
}

// Event listeners pour les boutons de visibilité du mot de passe
document.addEventListener("DOMContentLoaded", function () {
  const passwordToggle = document.querySelector(
    ".password-container .toggle-password"
  );
  const confirmPasswordToggle = document.querySelector(
    ".confirm-password-container .toggle-password"
  );

  if (passwordToggle) {
    passwordToggle.addEventListener("click", function () {
      togglePasswordVisibility("password", "password-toggle-icon");
    });
  }

  if (confirmPasswordToggle) {
    confirmPasswordToggle.addEventListener("click", function () {
      togglePasswordVisibility(
        "confirm-password",
        "confirm-password-toggle-icon"
      );
    });
  }
});
