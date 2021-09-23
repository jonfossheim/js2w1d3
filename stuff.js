const Person = {
  name: 'Jon',
  born: 1997,
  occupation: { 1: 'Co-Founder', 2: 'Lecturer' },
  school: 'Noroff',
  pets: null,
};

// 1

window.localStorage.setItem('key', value);
window.localStorage.getItem('key');
window.localStorage.removeItem('key');

// 2

const createPerson = (name, born, occupation, school, pets) => {
  return {
    name: name,
    born: born,
    occupation: occupation,
    school: school,
    pets: pets,
  };
};

const Bob = createPerson('Bob', 1995, 'Mechanic', 'Ullvang VGS', null);

// 3

const filterBtn = document.getElementById('filterBtn');
const filterInput = document.getElementById('filterInput');
let filterValue;

filterBtn.addEventListener('click', () => {
  filterValue = 0;
  filterValue = parseInt(filterInput.value);
  console.log(filterValue);
});
