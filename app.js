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

const boutonRejouer = document.querySelector("#rejouer")
boutonRejouer.style.display=("none")

// creer un tableau ou on va stocker toutes les essaies 
let  valeurs = [] 
// ---------------------------------------------------------------------------

// creer une fonction qui va etre appeller à chaque fois on click sur le bouton 
 bouton.addEventListener("click", (e)=>{
    //  en 10 tours ça s'arrete 
if(valeurs.length < 10){
    e.preventDefault();
// recuperer le nombre deviner en stockant dans une variable
    let valeurNombreDeviner = nombreDeviner.value

    // creer un condition qui permet de comparer le nombre aleatoire et le nombre deviner 
    if(nombreAleatoire==valeurNombreDeviner){
        // afficher ce message 
         message.innerHTML = "Bravo, Tu as deviné le bon nombre qui est :"+ nombreAleatoire;
         message.style.color=("#fff")  
         message.style.backgroundColor=("rgb(25, 90, 25)")
         boutonRejouer.style.display=("")
         boutonRejouer.addEventListener("click", ()=>{
         document.location.reload();
         })
    }else if (nombreAleatoire > valeurNombreDeviner ){
        console.log(nombreAleatoire+ " > "+ valeurNombreDeviner )
        message.innerHTML="essayez une autre fois, le nombre est inférieur au bon nombre"
        message.style.color=("#fff")    
        message.style.backgroundColor=("rgb(119, 15, 15)")   
    }else if (nombreAleatoire < valeurNombreDeviner  ){
        console.log(nombreAleatoire+ " < "+ valeurNombreDeviner )    
        message.innerHTML="essayez une autre fois, le nombre est supérieur au bon nombre"
        message.style.color=("#fff")  
        message.style.backgroundColor=("rgb(119, 15, 15)")   
    } 

// stocker cette valeur au tableau des essaies  
   const count = valeurs.push(valeurNombreDeviner)
// afficher le tableau dans le navigateur 
    result.innerHTML = valeurs 
  

    console.log(nombreAleatoire==valeurNombreDeviner)
    console.log(valeurs.length)
    console.log(nombreAleatoire)
    console.log(valeurNombreDeviner)    
    console.log(valeurs)
} else {
    message.innerHTML="Le jeu est terminé, essayez une autre fois"
    e.preventDefault();
    boutonRejouer.style.display=("")
    boutonRejouer.addEventListener("click", ()=>{
        document.location.reload();
    })
}
})   









