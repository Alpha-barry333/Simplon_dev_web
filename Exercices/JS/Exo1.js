
let nomArticle = "Clavier Mécanique";
let prixUnitaire = 5000;              
let quantite = 3;                       
let clientFidele = true;             

let prixTotal = prixUnitaire * quantite;

let tauxReduction = 0.10;

if (clientFidele && prixTotal > 20000) {
  prixTotal = prixTotal - (prixTotal * tauxReduction);
}

console.log(
  "La commande de " + nomArticle +
  " (x" + quantite + ") par le client " +
  (clientFidele ? "Fidèle" : "Non-Fidèle") +
  " s'élève à " + prixTotal + " GNF."
);