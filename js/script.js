/**
 * 1. creo array di oggetti, dove ogni oggetto è una card:
 *  - l'oggetto avrà 3 proprietà ovvero immagine nome  e ruolo
 * 2. faccio un ciclo per leggere tutte le info dell'array
 * 3. stampo in html tutto l'array (ovvero le card)
 * 4. aggiugno tramite il form la nuova card
 * - creo nuovo oggetto
 * - faccio un push all'array per aggiungere la nuova card
 * - faccio un ciclo
 * - stampo in html
 * 
 */

//creo array di oggetti/card
const allCards = [
  {
    immagine:'img/wayne-barnett-founder-ceo.jpg',
    nome:'Wayne Barnett',
    ruolo:'Founder & CEO'
  },
  {
    immagine:'img/angela-caroll-chief-editor.jpg',
    nome:'Angela Caroll',
    ruolo:'Chief Editor'
  },
  {
    immagine:'img/walter-gordon-office-manager.jpg',
    nome:'Walter Gordon',
    ruolo:'Office Manager'
  },
  {
    immagine:'img/angela-lopez-social-media-manager.jpg',
    nome:'Angela Lopez',
    ruolo:'Social Media Manager'
  },
  {
    immagine:'img/scott-estrada-developer.jpg',
    nome:'Scott Estrada',
    ruolo:'Developer'
  },
  {
    immagine:'img/barbara-ramos-graphic-designer.jpg',
    nome:'Barbara Ramos',
    ruolo:'Graphic Designer'
  }
]

//eseguo ciclo su array per leggerne contenuto
let htmlText = '';

for(let index in allCards){
  const card = allCards[index];
  console.log('card', card);

  const cardImg = card.immagine;
  const cardName = card.nome;
  const cardRole = card.ruolo;
  
  console.log(cardImg);
  console.log(cardName);
  console.log(cardRole);
  console.log('----->');

  //genero html
  htmlText += `
      <div class="team-card">
       <div class="card-image">
        <img src="${cardImg}"/>
       </div>
       <div class="card-text">
         <h3>${cardName}</h3>
         <p>${cardRole}</p>
        </div>
      </div>
      `;
}
console.log(htmlText);

//stampo il contenuto in html
document.querySelector('.team-container').innerHTML = htmlText


// const nuovaCard = {
//   
// }