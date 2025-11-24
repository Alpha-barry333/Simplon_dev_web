
let motDePasse = "MonSuperMDP123";
let resultatValidation = true;


if (motDePasse.length < 8) {
  console.log("Erreur : Le mot de passe est trop court.");
  resultatValidation = false;
}


let contientChiffre = /\d/.test(motDePasse);

if (!contientChiffre) {
  console.log("Erreur : Le mot de passe doit contenir au moins un chiffre.");
  resultatValidation = false;
}

if (motDePasse === "password") {
  console.log("Erreur : Ce mot de passe est interdit.");
  resultatValidation = false;
}

if (resultatValidation === true) {
  console.log("Succès : Le mot de passe est sécurisé et validé.");
} else {
  console.log("Échec : Veuillez revoir votre mot de passe pour corriger les erreurs ci-dessus.");
}