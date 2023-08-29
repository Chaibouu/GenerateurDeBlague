let conteneur = document.querySelector('#conteneur');
let btn = document.querySelector('#btn');
let body = document.body;
let Index = 0;

btn.addEventListener('click', () => {
  if (Index < tableau.length) {
    conteneur.textContent = tableau[Index].contenue;
    Index++;
  } 
  else {
    Index = 0;
    conteneur.textContent = tableau[Index].contenue;
    Index++;
  }
});