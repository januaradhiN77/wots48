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










const showroomsNames = [
  "Ashel /アシェル（JKT48）", "Christy/クリスティー（JKT48）", "Zee/ジー（JKT48）", "Oniel/オニエル（JKT48）", "Olla/オラ（JKT48）", "Feni/フェニ（JKT48）", "Fiony /フィオニー（JKT48）", "Flora/フロラ（JKT48）", "Sisca/シスカ（JKT48）", "Freya/フレヤ（JKT48）",
  "Gita/ギタ（JKT48）", "Eli/エリ（JKT48）", "Indah/インダー（JKT48）", "Jessi/ジェシ（JKT48）", "Kathrina/カトリナ（JKT48）", "Lulu /ルル （JKT48）", "Marsha/マーシャ（JKT48）", "Muthe/ムテ（JKT48）", "Adel/アデル（JKT48）",
  "Shani/シャニ（JKT48）", "Gracia/グラシア（JKT48）", "Chika/チカ（JKT48）", "Amanda/アマンダ（JKT48）", "Lia /リア（JKT48）", "Callie /カリー（JKT48）", "Ella /エラ（JKT48）", "Indira /インディラ（JKT48）", "Lyn /リーン（JKT48）", "Raisha /ライシャ（JKT48）", "Alya /アリア（JKT48）", "Anindya /アニンディア（JKT48）", "Cathy/キャシー（JKT48）", "Elin /エリン（JKT48）", "Chelsea /チェルシー（JKT48）", "Cynthia /シンティア（JKT48）", "Danella /ダネラ（JKT48）", "Daisy /デイシー（JKT48）", "Gendis /ゲンディス（JKT48）", "Gracie /グラシー（JKT48）", "Greesel /グリーセル（JKT48）", "Jeane /ジーン（JKT48）", "Michie /ミチー（JKT48）"
];

function setElementInnerHTML(elements, names) {
  elements.forEach((element) => {
    const index = element.getAttribute('data-name');
    element.innerHTML = names[index] || "Undified";
  });
}

const showroomElements = document.querySelectorAll('.srname');


setElementInnerHTML(showroomElements, showroomsNames);

