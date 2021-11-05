/**
 * 1. creo array di oggetti, dove ogni oggetto è una card:
 *  - l'oggetto avrà 3 proprietà ovvero immagine nome  e ruolo
 * 2. faccio un ciclo per leggere tutte le info dell'array: tramite funzione
 * 3. stampo in html tutto l'array (ovvero le card) - con funzione genero html
 * 4. aggiungo tramite il form la nuova card
 * - creo nuovo oggetto al click dell'invio del form
 * - faccio un push all'array per aggiungere la nuova card
 * - stampo in html
 * 
 */

//creo array di oggetti/card
const allCards = [
  {
    immagine:'wayne-barnett-founder-ceo.jpg',
    nome:'Wayne Barnett',
    ruolo:'Founder & CEO'
  },
  {
    immagine:'angela-caroll-chief-editor.jpg',
    nome:'Angela Caroll',
    ruolo:'Chief Editor'
  },
  {
    immagine:'walter-gordon-office-manager.jpg',
    nome:'Walter Gordon',
    ruolo:'Office Manager'
  },
  {
    immagine:'angela-lopez-social-media-manager.jpg',
    nome:'Angela Lopez',
    ruolo:'Social Media Manager'
  },
  {
    immagine:'scott-estrada-developer.jpg',
    nome:'Scott Estrada',
    ruolo:'Developer'
  },
  {
    immagine:'barbara-ramos-graphic-designer.jpg',
    nome:'Barbara Ramos',
    ruolo:'Graphic Designer'
  }
]

const bottoneAdd = document.getElementById('addMemberButton');
console.log(bottoneAdd);
bottoneAdd.addEventListener('click', addMember);

takeTeam();


function takeTeam (){
  //reset ambiente dove stampo la prima volta
  document.querySelector('.team-container').innerHTML = '';

  //eseguo ciclo su array per leggerne contenuto
  for(let member in allCards){
    // const card = allCards[index];
    // console.log('card', card);

    // const cardImg = card.immagine;
    // const cardName = card.nome;
    // const cardRole = card.ruolo;
    
    // console.log(cardImg);
    // console.log(cardName);
    // console.log(cardRole);
    // console.log('----->');

    generateHtml(member);  
  }
  
}


//creo funzione per generare html di ogni membro del team
function generateHtml(member){
  //ogni volta aggiungo un membro a quello che già c'è
  //non voglio sovrascrivere!!
  //leggo il contenuto di team-container
  //genero output html
  //infine lo aggiungo all'html già presente!!!

  const container = document.querySelector('.team-container');

  let prevContent = container.innerHTML;

  //destrutturo oggetto
  const {immagine, nome, ruolo} = member;

  //definisco struttura html
  prevContent +=
  `
  <div class="team-card">
    <div class="card-image">
      <img src="img/${immagine}"/>
    </div>
    <div class="card-text">
      <h3>${nome}</h3>
      <p>${ruolo}</p>
    </div>
  </div>
  `;

  //console.log(prevContent);

  container.innerHTML = prevContent;
  
}

//funzione chiamata dal click sul bottone del form
function addMember(){
  //leggo i valori dell'oggetto
  //creo l'oggetto
  //invio oggetto creato alla funzione generateHTML

  const immagineNew = document.getElementById('image').ariaValueMax;
  const nomeNew = document.getElementById('name').ariaValueMax;
  const ruoloNew = document.getElementById('role').ariaValueMax;

  const newMember = {
    image: immagineNew,
    name: nomeNew,
    role: ruoloNew
  }

  generateHtml(newMember)
  

}
  
