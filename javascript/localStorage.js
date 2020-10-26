const localStorageListLoaded = loadFromStorageList('Motto and Notes')
let localStorageList = localStorageListLoaded || [];

export default function addToStorageList(motto, notes) {
  const journalEntry = {motto: motto, notes: notes};
  localStorageList = [...localStorageList, journalEntry];
  saveToStorageList(localStorageList)
}

export function saveToStorageList(input) {
  localStorage.setItem('Motto and Notes', JSON.stringify(input));
}

export function loadFromStorageList(name) {
  try {
   return JSON.parse(localStorage.getItem(name));
 } catch(error) {
   console.log(error.message);
 }
}