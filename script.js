const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

/* const data = {
  exercise: ["01-01", "01-02", "01-06"],
  drinkWater: ["01-01", "01-02", "01-06"],
  eatClean: ["01-01", "01-02", "01-06"],
  vitamins: ["01-01", "01-02", "01-06", "01-08", "01-09", "01-10", "01-11"]
} */

button.addEventListener('click', addDay);
form.addEventListener('change', saveRecord);

function addDay() {

  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists){   
  }

  nlwSetup.addDay(today);
}

function saveRecord(){
  localStorage.setItem('NLWSetu@habits', JSON.stringify(nlwSetup.data))
  
}

const data = JSON.parse(localStorage.getItem('NLWSetu@habits')) || {};

nlwSetup.setData(data)
nlwSetup.load()
