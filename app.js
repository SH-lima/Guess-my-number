// creer une fonction qui permet de donner un nombre entier aleatoire 
const getRandomInt =(max)=> {
    // stocker le nombre aleatoire dans une variable 
     return Math.floor(Math.random() * Math.floor(max));
  }
// stocker le nombre aleatoire dans une variable 
const nombreAleatoire = getRandomInt(100)
// -----------------------------------------------------------------

// selectionner l'element html ou on vas afficher le resultat
const result = document.querySelector("#result")

// selectionner le bouton 
const bouton = document.querySelector("#bouton")

// selectionner ou va afficher le nombre deviner par l'utilisateur 
let nombreDeviner = document.getElementById('nombreDeviner');

let message = document.querySelector('#message')

// creer un tableau ou on va stocker toutes les essaies 
let  valeurs = [] 
// ---------------------------------------------------------------------------
for (let index = 0; index <9; index++) {
    
    

// creer une fonction qui va etre appeller à chaque fois on click sur le bouton 
 bouton.addEventListener("click", (e)=>{

    e.preventDefault();
// recuperer le nombre deviner en stockant dans une variable
    let valeurNombreDeviner = nombreDeviner.value

    // creer un condition qui permet de comparer le nombre aleatoire et le nombre deviner 
    if(nombreAleatoire==valeurNombreDeviner){
        // afficher ce message 
         message.innerHTML = "Bravo, Tu as deviné le bon nombre qui est :"+ nombreAleatoire;
    }else if (nombreAleatoire > valeurNombreDeviner ){
        console.log(nombreAleatoire+ " > "+ valeurNombreDeviner )
        message.innerHTML="essayez une autre fois, le nombre est inférieur de le bon nombre"
    }else if (nombreAleatoire < valeurNombreDeviner  ){
        console.log(nombreAleatoire+ " < "+ valeurNombreDeviner )    
       message.innerHTML="essayez une autre fois, le nombre est supérieur de le bon nombre"

    }

// stocker cette valeur au tableau des essaies  
    valeurs += ` ${valeurNombreDeviner}`
// afficher le tableau dans le navigateur 
    result.innerHTML = valeurs 
  



    console.log(nombreAleatoire)
    console.log(valeurNombreDeviner)    
    console.log(valeurs)
})   



}





