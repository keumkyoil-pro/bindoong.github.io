function totalscore() {
  var total = document.querySelectorAll('input[type="checkbox"]:checked').length;
  var total2 = total + "/30"
  document.getElementById("Globalscore").innerHTML = total2;
}

function orientation1score() {
  var orientation1_1 =
  document.querySelectorAll('input[name="orientation1"]:checked').length;
  var orientation1_2 = orientation1_1 + "/5"
  document.getElementById("orientation1_end").innerHTML = orientation1_2;
}
function orientation2score() {
  var orientation2_1 =
  document.querySelectorAll('input[name="orientation2"]:checked').length;
  var orientation2_2 = orientation2_1 + "/4"
  document.getElementById("orientation2_end").innerHTML = orientation2_2;
}
function orientation3score() {
  var orientation3_1 =
  document.querySelectorAll('input[name="orientation3"]:checked').length;
  var orientation3_2 = orientation3_1 + "/1"
  document.getElementById("orientation3_end").innerHTML = orientation3_2;
}
function memoryenrollscore() {
  var memoryenroll_1 =
  document.querySelectorAll('input[name="memoryenroll"]:checked').length;
  var memoryenroll_2 =  memoryenroll_1 + "/3"
  document.getElementById("memoryenroll_end").innerHTML = memoryenroll_2;
}
function memoryrecallscore() {
  var memoryrecall_1 =
  document.querySelectorAll('input[name="memoryrecall"]:checked').length;
  var memoryrecall_2 =  memoryrecall_1 + "/3"
  document.getElementById("memoryrecall_end").innerHTML = memoryrecall_2;
}
function calculationscore() {
  var calculation_1 =
  document.querySelectorAll('input[name="calculation"]:checked').length;
  var calculation_2 =  calculation_1 + "/5"
  document.getElementById("calculation_end").innerHTML = calculation_2;
}
function language1score() {
  var language1_1 =
  document.querySelectorAll('input[name="language1"]:checked').length;
  var language1_2 =  language1_1 + "/2"
  document.getElementById("language1_end").innerHTML = language1_2;
}
function language2score() {
  var language2_1 =
  document.querySelectorAll('input[name="language2"]:checked').length;
  var language2_2 =  language2_1 + "/3"
  document.getElementById("language2_end").innerHTML = language2_2;
}
function language3score() {
  var language3_1 =
  document.querySelectorAll('input[name="language3"]:checked').length;
  var language3_2 =  language3_1 + "/1"
  document.getElementById("language3_end").innerHTML = language3_2;
}
function language4score() {
  var language4_1 =
  document.querySelectorAll('input[name="language4"]:checked').length;
  var language4_2 =  language4_1 + "/1"
  document.getElementById("language4_end").innerHTML = language4_2;
}
function judgement1score() {
  var judgement1_1 =
  document.querySelectorAll('input[name="judgement1"]:checked').length;
  var judgement1_2 =  judgement1_1 + "/1"
  document.getElementById("judgement1_end").innerHTML = judgement1_2;
}
function judgement2score() {
  var judgement2_1 =
  document.querySelectorAll('input[name="judgement2"]:checked').length;
  var judgement2_2 =  judgement2_1 + "/1"
  document.getElementById("judgement2_end").innerHTML = judgement2_2;
}

function mmse_score() {
  var GlobalScore = document.getElementById('Globalscore');
  GlobalScore.style.backgroundColor = 'rgb(254, 240, 58)';
}
function reset_a() {
  var GlobalScore = document.getElementById('Globalscore');
  GlobalScore.innerHTML = "0/30"
  GlobalScore.style.backgroundColor = 'white';
  document.getElementById("orientation1_end").innerHTML= "0/5"
  document.getElementById("orientation2_end").innerHTML= "0/4"
  document.getElementById("orientation3_end").innerHTML= "0/1"
  document.getElementById("memoryenroll_end").innerHTML= "0/3"
  document.getElementById("memoryrecall_end").innerHTML= "0/3"
  document.getElementById("calculation_end").innerHTML= "0/5"
  document.getElementById("language1_end").innerHTML= "0/2"
  document.getElementById("language2_end").innerHTML= "0/3"
  document.getElementById("language3_end").innerHTML= "0/1"
  document.getElementById("language4_end").innerHTML= "0/1"
  document.getElementById("judgement1_end").innerHTML= "0/1"
  document.getElementById("judgement2_end").innerHTML= "0/1"
}
