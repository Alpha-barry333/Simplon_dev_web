
let nomArticle = "Clavier Mécanique"; 
let prixUnitaire = 75.99;            
let quantite = 3;                
let clientFidele = true;              
let tauxReduction = 0.10;             
let TVA = 0.20;                       

function calculerPrixHT(prix, qte) {
    let prixHT = prix * qte;  
    return prixHT;
}


function calculerPrixTotalTTC(prixHT) {
    let prixTTC = prixHT * (1 + TVA);
    return prixTTC;
}

function verifierReduction(estFidele, prix, taux) {

   
    let prixApresReduction = prix;

   
    if (estFidele && prix > 200) {
        prixApresReduction = prix - (prix * taux);
    }

    return prixApresReduction;
}

let prixHT = calculerPrixHT(prixUnitaire, quantite);
let prixTTC = calculerPrixTotalTTC(prixHT);
let prixFinal = verifierReduction(clientFidele, prixTTC, tauxReduction);


console.log(
    "Le prix final (TTC après réduction) pour " +
    nomArticle +
    " est : " +
    prixFinal.toFixed(2) + " GNF."
);
