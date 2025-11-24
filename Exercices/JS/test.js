nomArticle = "Clavier Mécanique";
prixUnitaire = 5000;
quantite = 3;
clientFidele = true;

prixTotal = prixUnitaire * quantite;

tauxReduction = 0.1;

if (clientFidele && prixTotal > 20000){
    prixTotal = prixTotal * (1 - tauxReduction);
} 