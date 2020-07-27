


function MontantduTarif {

    do {
        TarifHabituel = parseInt(prompt(entrez le Montant du Tarif))

    }


    while (isNaN(TarifHabituel) || TarifHabituel <= 0 )
    return TarifHabituel
}


// un message msg qui demandera de fournir le type de client (premium, middle ou basic.) et son ancienneté (1-longue,2  moyenne, 3 courte)


function propositions(msg) {

    do {
        choix = parseInt(prompt(msg))

    }


    while (isNaN(choix) || choix > 3 || choix < 1)
    return choix
}
//niveau de promotion
function NiveauPromotion(TypeClient) {
    if (TypeClient == 1) {

        NiveauPromotion = 0.5 //réduction de 50%

    } else if (TypeClient == 2) {
    NiveauPromotion=-(0.25) //réduction de 25%
    }else {
    NiveauPromotion=0
    }
    return NiveauPromotion
}

//Majoration de la promotion offerte selon l'ancienneté (seniority) 1-longue durée  ou myenne 2 courte durée 3-courte durée
function ClienSeniority(seniority) {
    if (seniority == 1) {
        return MinorationTarif = 0.5
    } else if (seniority == 2) {
        return MinorationTarif = 0.25
    } else {
        return MinorationTarif = 0
    }
}

//création d'un objet promotion
var promotion=new Object()

//function qui initialisation de l'objet promotion incluant les attributs Typeclient et Seniority
function Reduction (){

promotion.TypeClient=propositions("entrez le type de client 1.premium 2.middle 3.basic")
promotion.Seniority=propositions("entrez l'ancienneté du client 1.lobgue durée 2.moyenne durée 3.courte durée")
console.log(promotion)

  
}

//J'appelle la fonction Reduction() pour initialiser l'objet promotion
 Reduction()

 //calcul du tarif à payer aprés réduction en demandant d'entrer le tarif habituel dans un input
function TarifApayer (TarifHabituel){
var input = document.getElementById('input').value  //récuperer la valeur du Tarif Habituel dans l'input
 SommeApayer= input*(1-promotion.TypeClient-promotion.Seniority)
 document.getElementById('result').innerHTML = SommeApayer; // afficher  le resultat dans la div (result)
}


//Je crée l'evennement sur le boutton qui affichera le résultat en utilisant la function TarifApayer

document.getElementById("btn").addEventListener("click", DisplayResult);

function DisplayResult() {
  
    TarifApayer ()
}




