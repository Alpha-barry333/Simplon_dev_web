
let motDePasse = "MonSuperMDP123";


function verifierLongueur(mdp) {
  const LONGUEUR_MIN = 8;

  if (mdp.length >= LONGUEUR_MIN) {
    return true;
  } else {
    console.log("Erreur : Le mot de passe est trop court.");
    return false;
  }
}


function verifierContientChiffre(mdp) {
  let regexChiffre = /\d/;

  if (regexChiffre.test(mdp)) {
    return true;
  } else {
    console.log("Erreur : Le mot de passe doit contenir au moins un chiffre.");
    return false;
  }
}


function verifierInterdit(mdp, motInterdit) {
  if (mdp !== motInterdit) {
    return true;
  } else {
    console.log("Erreur : Ce mot de passe est interdit.");
    return false;
  }
}


function validerMotDePasse(mdpAChecker) {
  
  let estLong = verifierLongueur(mdpAChecker);
  let aUnChiffre = verifierContientChiffre(mdpAChecker);
  let nEstPasInterdit = verifierInterdit(mdpAChecker, "password");

  if (estLong && aUnChiffre && nEstPasInterdit) {
    console.log("Succès : Mot de passe validé.");
  } else {
    console.log("Échec : Veuillez corriger les erreurs.");
  }
}


validerMotDePasse(motDePasse);