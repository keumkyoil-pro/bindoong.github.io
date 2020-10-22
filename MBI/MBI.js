
function Reset() {
  var Globalscore = document.getElementById('Globalscore');
  Globalscore.innerHTML = 0;
  Globalscore.style.backgroundColor = 'white';
  document.getElementsByClassName('total')[0].style.backgroundColor = 'white';
  document.getElementsByClassName('severe')[0].style.backgroundColor = 'white';
  document.getElementsByClassName('moderate')[0].style.backgroundColor = 'white';
  document.getElementsByClassName('mild')[0].style.backgroundColor = 'white';
  document.getElementsByClassName('minimal')[0].style.backgroundColor = 'white';
}

function result() {
  var PH1 = document.getElementsByName('PH');
  var PH_value;
  for (var i=0; i<PH1.length; i++) {
      if(PH1[i].checked) {
          PH_value = PH1[i].value;
      }
  }
  var BS2 = document.getElementsByName('BS');
  var BS_value;
  for (var i=0; i<BS2.length; i++) {
      if(BS2[i].checked) {
          BS_value = BS2[i].value;
      }
  }
  var FE3 = document.getElementsByName('FE');
  var FE_value;
  for (var i=0; i<FE3.length; i++) {
      if(FE3[i].checked) {
          FE_value = FE3[i].value;
      }
  }
  var TO4 = document.getElementsByName('TO');
  var TO_value;
  for (var i=0; i<TO4.length; i++) {
      if(TO4[i].checked) {
          TO_value = TO4[i].value;
      }
  }
  var SC5 = document.getElementsByName('SC');
  var SC_value;
  for (var i=0; i<SC5.length; i++) {
      if(SC5[i].checked) {
          SC_value = SC5[i].value;
      }
  }
  var DR6 = document.getElementsByName('DR');
  var DR_value;
  for (var i=0; i<DR6.length; i++) {
      if(DR6[i].checked) {
          DR_value = DR6[i].value;
      }
  }
  var BO7 = document.getElementsByName('BO');
  var BO_value;
  for (var i=0; i<BO7.length; i++) {
      if(BO7[i].checked) {
          BO_value = BO7[i].value;
      }
  }
  var BL8 = document.getElementsByName('BL');
  var BL_value;
  for (var i=0; i<BL8.length; i++) {
      if(BL8[i].checked) {
          BL_value = BL8[i].value;
      }
  }
  var AW9 = document.getElementsByName('AW');
  var AW_value;
  for (var i=0; i<AW9.length; i++) {
      if(AW9[i].checked) {
          AW_value = AW9[i].value;
      }
  }
  var CB10 = document.getElementsByName('CB');
  var CB_value;
  for (var i=0; i<CB10.length; i++) {
      if(CB10[i].checked) {
          CB_value = CB10[i].value;
      }
  }

  var Sumvalue = Number(PH_value) + Number(BS_value) + Number(FE_value) + Number(TO_value) + Number(SC_value) + Number(DR_value) + Number(BO_value) + Number(BL_value) + Number(AW_value) + Number(CB_value)

  Globalscore.innerHTML = Sumvalue;
  Globalscore.style.backgroundColor = 'rgb(254, 240, 58)';

      if(Sumvalue < 25) {
          document.getElementsByClassName('total')[0].style.backgroundColor = 'rgb(254, 240, 58)';
      } else if(25<= Sumvalue <50) {
          document.getElementsByClassName('severe')[0].style.backgroundColor = 'rgb(254, 240, 58)';
      } else if(50<= Sumvalue <75) {
          document.getElementsByClassName('moderate')[0].style.backgroundColor = 'rgb(254, 240, 58)';
      } else if(75<= Sumvalue <91) {
          document.getElementsByClassName('mild')[0].style.backgroundColor = 'rgb(254, 240, 58)';
      } else {
          document.getElementsByClassName('minimal')[0].style.backgroundColor = 'rgb(254, 240, 58)';
      }
}
