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
const detailButton = get('.detail-btn');

const starOne = get(".card__starone");
const starTwo = get(".card__startwo");
const starThree = get(".card__starthree");
const starFour = get(".card__starfour");
const starFive = get(".card__starfive");

const allBigBtns = getAll('.btn__big');
const allMediumBtns = getAll('.btn__medium');
const allSmallBtns = getAll('.btn__small');
const allExtrasBtns = getAll('.btn__extrasmall')

const navigation = [homeButton, buddyButton, teamButton, energyButton, journalButton, detailButton];
const pagesList = [home, codeBuddy, team, energy, journal, detail];

starOne.addEventListener("click", () => {
  resetStars();
  goBlueStar(starOne);
})

starTwo.addEventListener("click", () => {
  resetStars();
  goBlueStar(starOne, starTwo);
})

starThree.addEventListener("click", () => {
  resetStars();
  goBlueStar(starOne, starTwo, starThree);
})

starFour.addEventListener("click", () => {
  resetStars();
  goBlueStar(starOne, starTwo, starThree, starFour);
})

starFive.addEventListener("click", () => {
  resetStars();
  goBlueStar(starOne, starTwo, starThree, starFour, starFive);
})

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

function resetStars (){
  starOne.src="img/starGrey.png";
  starTwo.src="img/starGrey.png";
  starThree.src="img/starGrey.png";
  starFour.src="img/starGrey.png";
  starFive.src="img/starGrey.png";
}

function goBlueStar (one, two, three, four, five){
  resetStars();
  one.src="img/starBlue.png";
  two.src="img/starBlue.png";
  three.src="img/starBlue.png";
  four.src="img/starBlue.png";
  five.src="img/starBlue.png";
}