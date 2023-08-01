//status
const anggota = "Anggota JKT48";
const status = document.querySelectorAll(".s1");

status.forEach((status1) => {
  status1.textContent = anggota;
});

const trainee = "Trainee JKT48";
const status2 = document.querySelectorAll(".s2");

status2.forEach((status2) => {
  status2.textContent = trainee;
});








// Data Nama Member JKT48 



//Nama Anggota & Trainee JKT48 

const memberNames = [
  "Ashel", "Christy", "Zee", "Oniel", "Olla", "Feni", "Fiony", "Flora", "Sisca", "Freya",
  "Gita", "Eli", "Indah", "Jessi", "Jesslyn", "Kathrina", "Lulu", "Marsha", "Muthe", "Adel",
  "Shani", "Gracia", "Chika", "Amanda", "Lia", "Callie", "Ella", "Indira", "Lyn", "Raisha"
];

const traineeNames = [
  "Alya", "Anindya", "Cathy", "Elin", "Chelsea", "Cynthia", "Danella", "Daisy", "Gendis",
  "Gracie", "Greesel", "Jeane", "Michie"
];

function setElementInnerHTML(elements, names) {
  elements.forEach((element) => {
    const index = element.getAttribute('data-name');
    element.innerHTML = names[index] || "Undified";
  });
}

const anggotaElements = document.querySelectorAll('.anggota');
const traineeElements = document.querySelectorAll('.trainee');

setElementInnerHTML(anggotaElements, memberNames);
setElementInnerHTML(traineeElements, traineeNames);
