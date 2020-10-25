/////////////////////////////////////////////
// NAVIGATION SINGLE PAGE
const home = get('.js-home');
const codeBuddy = get('.js-buddy');
const team = get('.js-team');
const energy = get('.js-energy');
const journal = get('.js-journal');
const detail = get('.js-detail')
// LIST OF EVERY SINGLE PAGE
const pagesList = getAll("body > section")

// JOURNAL DETAIL FORMULAR
const rateTodayForm = get(".journaldetail")

// HEAD-TITLE OF EVERY SINGLE PAGE
const headTitle = get(".head__title")
// NAV BUTTONS
const homeButton = get('.home-btn');
const buddyButton = get('.buddy-btn');
const teamButton = get('.team-btn');
const energyButton = get('.energy-btn');
const journalButton = get('.journal-btn');
// BUTTON TO JOURNAL DETAIL PAGE
const detailButton = get('.detail-btn');
// BUTTON TO SAVE FORMULAR
const detailSaveButton = get(".journaldetail__savebutton")


const allBigBtns = getAll('.btn__big');
const allMediumBtns = getAll('.btn__medium');
const allSmallBtns = getAll('.btn__small');
const allExtrasBtns = getAll('.btn__extrasmall')

const starContainer = getAll(".journaldetail__starcontainer > img")
const rectangleContainer = getAll(".journaldetail__rectanglecontainer > img")
const navigationList = getAll(".nav-bar > a")


// NAV LOGIC
navigationList.forEach((anchor, index) => {
  anchor.addEventListener("click", () => {
    resetPages(pagesList);
    // GO TO HOME PAGE
    if(index === 0){
      home.classList.remove("hidden");
      headTitle.innerText="Dashboard";
    }
    // GO TO CODE-BUDDY PAGE
    else if(index === 1){
      codeBuddy.classList.remove("hidden");
      headTitle.innerText="Code Buddy"
    }
    // GOT TO TEAM PAGE
    else if(index === 2){
      team.classList.remove("hidden");
      headTitle.innerText="Teams"
    }
    // GOT TO ENERGY PAGE
    else if(index === 3){
      energy.classList.remove("hidden");
      headTitle.innerText="Energy"
    }
    // GOT TO JOURNAL PAGE
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


// FUNCTIONS
function resetPages(pages) {
  return pages.forEach(page => page.classList.add('hidden'));
}

function getAll (selector) {
  return document.querySelectorAll(selector);
}

function get (selector) {
  return document.querySelector(selector);
}

///////////////
//LOCALSTORAGE

const form = document.querySelector('form');

const localStorageListLoaded = loadFromStorageList('Motto and Notes')

let localStorageList = localStorageListLoaded || [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const motto = form.motto.value;
    const notes = form.notes.value;
    addToStorageList(motto, notes);
    form.reset()
});


function addToStorageList(motto, notes) {
    const journalEntry = {motto: motto, notes: notes};
    localStorageList = [...localStorageList, journalEntry];
    saveToStorageList(localStorageList)
}

function saveToStorageList(input) {
    localStorage.setItem('Motto and Notes', JSON.stringify(input));
}

function loadFromStorageList(name) {
    try {
     return JSON.parse(localStorage.getItem(name));
   } catch(error) {
     console.log(error.message);
   }
}


///////////////////
///CODE BUDDES API

const codeBuddiesAPI = 'https://muc-2020-w1-student-api.vercel.app/api/buddies'

fetchAPI(codeBuddiesAPI, codeBuddiesSection)

async function fetchAPI(http, htmlCreator) {
  try {
    const result = await fetch(http);
    const data = await result.json();
    data.forEach(pair => htmlCreator(pair));
  } catch (error) {
    console.error(error.message);
  }
}

function codeBuddiesSection (inputAPI) {
  const elDiv = createContainer('.buddies__container')

  inputAPI.forEach(function forEachPerson(input, i) {
    switch (true) {
    case (i === 0) :
      elDiv.innerHTML += `
          <div class="buddy__content one bookmark">
            <h3 class="heading-3">${input}</h3>
          </div>
          <img class="buddy-imagedash" src="/img/Plus.svg" alt="" />
          `;
      break;
    default :
      elDiv.innerHTML += `
          <div class="buddy__content two bookmark">
            <h3 class="heading-3">${input}</h3>
          </div>
          `;
    }
  });
}

/////////////////////////////
//CODE TEAMS

const teamsAPI = 'https://muc-2020-w1-student-api.vercel.app/api/teams'

fetchAPI(teamsAPI, teamsSection)

function teamsSection (inputAPI) {
  const elDiv = createContainer('.teams__container')
  //elDiv.innerHTML += `<h2 class="buddy__content--title heading-2">Team ${i}</h2>`
  inputAPI.forEach(function forEachPerson(input, i) {
    
    switch (true) {
      case (i === 0): 
        elDiv.innerHTML += `
            <div class="buddy__content one bookmark">
              <h3 class="heading-3">${input}</h3>
            </div> `;
        break;
      case (i === 1): 
        elDiv.innerHTML += `
            <div class="buddy__content b-style bookmark">
              <h3 class="heading-3">${input}</h3>
            </div> `;
        break;
      default:
        elDiv.innerHTML += `
            <div class="buddy__content two bookmark">
              <h3 class="heading-3">${input}</h3>
            </div> `;
      }
    })
}

function create(input) {
  return document.createElement(input)
}

function createContainer(target) {
  const element = get(target);
  const elDiv = create('div');
  element.appendChild(elDiv);
  elDiv.classList.add('buddy');
  
  return elDiv
}
//