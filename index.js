let conteneur = document.querySelector('#conteneur');
let auteur = document.querySelector('.auteur');
let btn = document.querySelector('#btn');
let body = document.body;
let Index = 0;

btn.addEventListener('click', () => {
  if (Index < tableau.length) {
    conteneur.textContent = tableau[Index].contenue;
    auteur.textContent = "⏤" + tableau[Index].auteur;
    Index++;
  } 
  else {
    Index = 0;
    conteneur.textContent = tableau[Index].contenue;
    auteur.textContent = "⏤" + tableau[Index].auteur;
    Index++;
  }
});