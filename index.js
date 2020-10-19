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

const allBigBtns = getAll('.btn__big');
const allMediumBtns = getAll('.btn__medium');
const allSmallBtns = getAll('.btn__small');
const allExtrasBtns = getAll('.btn__extrasmall')

const starOne = get(".card__starone");
const starTwo = get(".card__startwo");
const starThree = get(".card__starthree");
const starFour = get(".card__starfour");
const starFive = get(".card__starfive");

const rectangleOne = get(".card__rectangleone")
const rectangleTwo = get(".card__rectangletwo")
const rectangleThree = get(".card__rectanglethree")
const rectangleFour = get(".card__rectanglefour")
const rectangleFive = get(".card__rectanglefive")
const rectangleSix = get(".card__rectanglesix")
const rectangleSeven = get(".card__rectangleseven")
const rectangleEight = get(".card__rectangleeight")
const rectangleNine = get(".card__rectanglenine")
const rectangleTen = get(".card__rectangleten")

const navigation = [homeButton, buddyButton, teamButton, energyButton, journalButton, detailButton];
const pagesList = [home, codeBuddy, team, energy, journal, detail];
const starsList = [starOne, starTwo, starThree, starFour, starFive];
const rectangleList = [rectangleOne, rectangleTwo, rectangleThree, rectangleFour, rectangleFive, rectangleSix, rectangleSeven, rectangleEight, rectangleNine, rectangleTen]

starOne.addEventListener("click", () => {
  goBlueStar(starOne);
})

starTwo.addEventListener("click", () => {
  goBlueStar(starOne, starTwo);
})

starThree.addEventListener("click", () => {
  goBlueStar(starOne, starTwo, starThree);
})

starFour.addEventListener("click", () => {
  goBlueStar(starOne, starTwo, starThree, starFour);
})

starFive.addEventListener("click", () => {
  goBlueStar(starOne, starTwo, starThree, starFour, starFive);
})

// Rectangle
rectangleList[0].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0]);
})

rectangleList[1].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0], rectangleList[1]);
})

rectangleList[2].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0], rectangleList[1],rectangleList[2]);
})

rectangleList[3].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0], rectangleList[1],rectangleList[2], rectangleList[3]);
})

rectangleList[4].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0], rectangleList[1],rectangleList[2], rectangleList[3], rectangleList[4]);
})

rectangleList[5].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0], rectangleList[1],rectangleList[2], rectangleList[3], rectangleList[4], rectangleList[5]);
})

rectangleList[6].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0], rectangleList[1],rectangleList[2], rectangleList[3], rectangleList[4], rectangleList[5], rectangleList[6]);
})

rectangleList[7].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0], rectangleList[1],rectangleList[2], rectangleList[3], rectangleList[4], rectangleList[5], rectangleList[6], rectangleList[7]);
})

rectangleList[8].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0], rectangleList[1],rectangleList[2], rectangleList[3], rectangleList[4], rectangleList[5], rectangleList[6], rectangleList[7], rectangleList[8]);
})

rectangleList[9].addEventListener("click", () => {
  goBlueRectangle(rectangleList[0], rectangleList[1],rectangleList[2], rectangleList[3], rectangleList[4], rectangleList[5], rectangleList[6], rectangleList[7], rectangleList[8], rectangleList[9]);
})


// Button
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
  starsList.forEach(star => star.src="img/starGrey.png");
}

function goBlueStar (one, two, three, four, five){
  resetStars();
  one.src="img/starBlue.png";
  two.src="img/starBlue.png";
  three.src="img/starBlue.png";
  four.src="img/starBlue.png";
  five.src="img/starBlue.png";
}

function resetRectangles (){
  rectangleList.forEach(rectangle => rectangle.src="img/rectangleGrey.png");
}

function goBlueRectangle (one, two, three, four, five, six, seven, eight, nine, ten){
  resetRectangles();
  one.src="img/rectangleBlue.png";
  two.src="img/rectangleBlue.png";
  three.src="img/rectangleBlue.png";
  four.src="img/rectangleBlue.png";
  five.src="img/rectangleBlue.png";
  six.src="img/rectangleBlue.png";
  seven.src="img/rectangleBlue.png";
  eight.src="img/rectangleBlue.png";
  nine.src="img/rectangleBlue.png";
  ten.src="img/rectangleBlue.png";
}

