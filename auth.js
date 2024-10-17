// Gérer la création de compte
document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      alert("Un compte avec cet email existe déjà.");
      return;
    }

    // Enregistrer l'utilisateur dans le localStorage
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Compte créé avec succès! Vous pouvez maintenant vous connecter.");
    window.location.href = "connect.html";
  });

// Gérer la connexion
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedUser = localStorage.getItem(email);

  if (!storedUser) {
    alert("Aucun utilisateur trouvé avec cet email.");
    return;
  }

  const user = JSON.parse(storedUser);
  if (user.password !== password) {
    alert("Mot de passe incorrect.");
    return;
  }

  alert("Connexion réussie!");
  // Redirection après la connexion réussie
  window.location.href = "index.html";
});
