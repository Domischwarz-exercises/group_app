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