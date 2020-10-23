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

 //CODE BUDDES API
const codeBuddiesAPI = 'https://muc-2020-w1-student-api.vercel.app/api/buddies'

const codeBuddies = fetchAPI(codeBuddiesAPI)
console.log(codeBuddies)

async function fetchAPI(info) {
  try {
    const result = await fetch(info, {headers: {'Access-Control-Allow-Origin': info}})
    const data = await result.json()
    console.log(data)
  } catch (error) {
    console.error(error.message)
  }
}



  