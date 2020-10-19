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
});

buddyButton.addEventListener('click', () => {
  resetPages(pagesList);
  codeBuddy.classList.remove('hidden');
});

teamButton.addEventListener('click', () => {
  resetPages(pagesList);
  team.classList.remove('hidden');
});

energyButton.addEventListener('click', () => {
  resetPages(pagesList);
  energy.classList.remove('hidden');
});

journalButton.addEventListener('click', () => {
  resetPages(pagesList);
  journal.classList.remove('hidden');
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
  