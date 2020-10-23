/////////////////////////////////////////////
// NAVIGATION SINGLE PAGE
const home = get('.js-home');
const codeBuddy = get('.js-buddy');
const team = get('.js-team');
const energy = get('.js-energy');
const journal = get('.js-journal');
const detail = get('.js-detail')

const homeButton = get('.home-btn');
const buddyButton = get('.buddy-btn');
const teamButton = get('.team-btn');
const energyButton = get('.energy-btn');
const journalButton = get('.journal-btn');
const detailButton = get('.detail-btn')

const allBigBtns = getAll('.btn__big');
const allMediumBtns = getAll('.btn__medium');
const allSmallBtns = getAll('.btn__small');
const allExtrasBtns = getAll('.btn__extrasmall')

const navigation = [homeButton, buddyButton, teamButton, energyButton, journalButton, detailButton];
const pagesList = [home, codeBuddy, team, energy, journal, detail];

homeButton.addEventListener('click', () => {
  resetPages(pagesList);
  home.classList.remove('hidden');
  document.querySelector('.head__title').innerText = 'Dashboard';
});

buddyButton.addEventListener('click', () => {
  resetPages(pagesList);
  codeBuddy.classList.remove('hidden');
  document.querySelector('.head__title').innerText = 'Code Buddy';
});

teamButton.addEventListener('click', () => {
  resetPages(pagesList);
  team.classList.remove('hidden');
  document.querySelector('.head__title').innerText = 'Teams';
});

energyButton.addEventListener('click', () => {
  resetPages(pagesList);
  energy.classList.remove('hidden');
  document.querySelector('.head__title').innerText = 'Energy';
});

journalButton.addEventListener('click', () => {
  resetPages(pagesList);
  journal.classList.remove('hidden');
  document.querySelector('.head__title').innerText = 'Journal';
});

detailButton.addEventListener('click', () => {
  resetPages(pagesList);
  detail.classList.remove('hidden');
})


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
  const sectionBuddy = get('.buddies__container');
  const elDiv = document.createElement('div');
  sectionBuddy.appendChild(elDiv);
  elDiv.classList.add("buddy");
  
  inputAPI.forEach(function testCase(input, i) {
    switch (true) {
    case (i === 0) :
      elDiv.innerHTML += `
          <div class="buddy__content one bookmark">
          <h3 class="heading-3">${input}</h3>
          </div>`;
      break;
    default :
      elDiv.innerHTML += `
          <div class="buddy__content two bookmark">
          <h3 class="heading-3">${input}</h3>
          </div>`;
    }
  });
}

/////////////////////////////
//CODE TEAMS

const teamsAPI = 'https://muc-2020-w1-student-api.vercel.app/api/teams'

fetchAPI(teamsAPI, teamsSection)

function teamsSection (inputAPI) {
  const sectionTeam = get('.teams__container');
  const elDiv = create('div');
  sectionTeam.appendChild(elDiv);
  elDiv.classList.add("buddy")
  inputAPI.forEach(person => {
   let loopResult = `
  <div class="buddy__content bookmark">
    <h3 class="heading-3">${person}</h3>
  </div>
  `;
  elDiv.InnerHTML += loopResult
 
})
}

function create(input) {
  return document.createElement(input)
}
//<h2 class="buddy__content--title heading-2">Team ${counter}</h2>