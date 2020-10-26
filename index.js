import {fetchAPI, get, getAll, resetPages} from './javascript/helpFunctions.js';
import addToStorageList from './javascript/localStorage.js';
import codeBuddiesSection from './javascript/codeBuddies.js';

/////////////////////////////////////////////
// NAVIGATION SINGLE PAGE

const home = get('.js-home');
const codeBuddy = get('.js-buddy');
const team = get('.js-team');
const energy = get('.js-energy');
const journal = get('.js-journal');
const detail = get('.js-detail')

// list of every page
const pagesList = getAll("body > section")

// journal detail
const rateTodayForm = get(".journaldetail")

// head title of each page
const headTitle = get(".head__title")

// button to journal detail page
const detailButton = get('.detail-btn');

// button to save form
const detailSaveButton = get(".journaldetail__savebutton")
const detailCancelButton = get(".journaldetail__cancelbutton")

//stars and rectangles
const starContainer = getAll(".journaldetail__starcontainer > img")
const rectangleContainer = getAll(".journaldetail__rectanglecontainer > img")
//navbuttons
const navigationList = getAll(".nav-bar > a")


// navigation logic
navigationList.forEach((anchor, index) => {
  anchor.addEventListener("click", () => {
    resetPages(pagesList);
    // home page
    if(index === 0){
      home.classList.remove("hidden");
      headTitle.innerText="Dashboard";
    }
    // code buddy page
    else if(index === 1){
      codeBuddy.classList.remove("hidden");
      headTitle.innerText="Code Buddy"
    }
    // team page
    else if(index === 2){
      team.classList.remove("hidden");
      headTitle.innerText="Teams"
    }
    // energy page
    else if(index === 3){
      energy.classList.remove("hidden");
      headTitle.innerText="Energy"
    }
    // journal page
    else if(index === 4){
      journal.classList.remove("hidden");
      headTitle.innerText="Journal"
    }
  })
})


// GO TO JOURNAL DETAIL PAGE

detailButton.addEventListener('click', () => {
  resetPages(pagesList);
  detail.classList.remove('hidden');
})

// RESET THE FORMULAR ON JOURNAL DETAIL

detailSaveButton.addEventListener("click", () => {
  rateTodayForm.reset();
  starContainer.forEach(star => star.src = "img/starGrey.png");
  rectangleContainer.forEach(rectangle => rectangle.src = "img/rectangleGrey.png");
  resetPages(pagesList)
  journal.classList.remove("hidden");
  headTitle.innerText="Journal"
})


// CANCEL THE FORMULAR ON JOURNAL DETAIL

detailCancelButton.addEventListener("click", () => {

  rateTodayForm.reset();
  starContainer.forEach(star => star.src = "img/starGrey.png");
  rectangleContainer.forEach(rectangle => rectangle.src = "img/rectangleGrey.png");
  resetPages(pagesList)
  journal.classList.remove("hidden");
  headTitle.innerText="Journal"
})

// JOURNAL DETAIL RATE STARS LOGIC

starContainer.forEach((img, index) =>{
  img.addEventListener("click", () => {
    starContainer.forEach(star => star.src = "img/starGrey.png");
    for (let i = 0; i <= index; i++){
      starContainer[i].src="img/starBlue.png"; 
    }
  })
})


// JOURNAL DETAIL RATE RECTANGLES LOGIC

rectangleContainer.forEach((img, index) =>{
  img.addEventListener("click", () => {
    rectangleContainer.forEach(rectangle => rectangle.src = "img/rectangleGrey.png");
    for (let i = 0; i <= index; i++){
      rectangleContainer[i].src="img/rectangleBlue.png"; 
    }
  })
})


// RESET THE FORMULAR ON JOURNAL DETAIL

detailSaveButton.addEventListener("click", () => {
  rateTodayForm.reset();
})

///////////////
//LOCALSTORAGE

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const motto = form.motto.value;
    const notes = form.notes.value;
    addToStorageList(motto, notes);
    form.reset()
});

///////////////////
///CODE BUDDES API

const codeBuddiesAPI = 'https://muc-2020-w1-student-api.vercel.app/api/buddies'

fetchAPI(codeBuddiesAPI, codeBuddiesSection)

/////////////////////////////
//CODE TEAMS

const teamsAPI = 'https://muc-2020-w1-student-api.vercel.app/api/teams'

fetchAPI(teamsAPI, teamsSection)

function teamsSection (inputAPI, index) {
  const elDiv = createContainer('.teams__container', 'buddy')
  elDiv.innerHTML += `<h2 class="buddy__content--title heading-2">Team ${index+1}</h2>`
  
  //creating HTML for teams 
  inputAPI.forEach(function forEachPerson(input, i) {
    switch (true) {
      case (i === 0): 
        elDiv.innerHTML += `
            <div class="buddy__content one bookmark">
              <h3 class="heading-3">${input}</h3>
            </div>`;
        break;
      case (i === inputAPI.length-1): 
        elDiv.innerHTML += `
            <div class="buddy__content two bookmark">
              <h3 class="heading-3">${input}</h3>
            </div>`;
        break;
      default:
        elDiv.innerHTML += `
            <div class="buddy__content b-style bookmark">
              <h3 class="heading-3">${input}</h3>
            </div>`;
      }
    })
}


///////////////////
///JOURNALS API

const journalsAPI = 'https://muc-2020-w1-student-api.vercel.app/api/journals'

fetchAPI(journalsAPI, journalsSection)

function journalsSection(inputAPI, index) {
  const elDiv = createContainer('.journal__container', 'card')
  elDiv.innerHTML += `
  <h3 class="card__date card-grid">YESTERDAY</h3>
  <h4 class="card__startitle card-grid card-title">Rating:</h4>
  <div class="card__starcontainer">
    <img class="card__star--img" src="img/starBlue.png" alt="Black star" />
    <img class="card__star--img" src="img/starBlue.png" alt="Black star" />
    
    <img class="card__star--img" src="img/starBlue.png" alt="Black star" />
    <img class="card__star--img" src="img/starGrey.png" alt="Grey star" />
    <img class="card__star--img" src="img/starGrey.png" alt="Grey star" />
  </div>

<h4 class="card__rectangletitle card-grid card-title">Comprehension:</h4>
<div class="card__rectanglecontainer card-grid ">
  <img class="card__rectangle--img" src="img/rectangleBlue.png" alt="" />
  <img class="card__rectangle--img" src="img/rectangleBlue.png" alt="" />
  <img class="card__rectangle--img" src="img/rectangleBlue.png" alt="" />
  <img class="card__rectangle--img" src="img/rectangleBlue.png" alt="" />
  <img class="card__rectangle--img" src="img/rectangleBlue.png" alt="" />
  <img class="card__rectangle--img" src="img/rectangleBlue.png" alt="" />
  <img class="card__rectangle--img" src="img/rectangleBlue.png" alt="" />
  <img class="card__rectangle--img" src="img/rectangleGrey.png" alt="" />
  <img class="card__rectangle--img" src="img/rectangleGrey.png" alt="" />
  <img class="card__rectangle--img" src="img/rectangleGrey.png" alt="" />
</div>
<h4 class="card__mottotitle card-grid card-title">Motto:</h4>
<h3 class="card__motto card-grid ">${inputAPI.motto}</h3>
<h4 class="card__notetitle card-grid card-title">Notes:</h4>
<p class="card__note card-grid ">${inputAPI.notes}
</p>
  `
}

//function html container creator
function createContainer(target, className) {
  const element = get(target);
  const elDiv = document.createElement('div');
  element.appendChild(elDiv);
  elDiv.classList.add(className);
  
  return elDiv
}
