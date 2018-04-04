var div = document.getElementById('m_Money');
var div_per_turn = document.getElementById('money_per_turn');
var content = div.innerText;
var timestep = 1;
console.log(content);
var money = getMoney();
var perturn = getPerTurn();
if(perturn==null || isNaN(perturn)){
  perturn = .01;
}
if(money==null || isNaN(money)){
  money = 10.0;
}
printMoney();
//runTurn();

function printMoney(){
  console.log("money: " + money);
  console.log("perturn: " + perturn);
  div.innerText ="Balance = " + round(money,2);
  div_per_turn.innerText  = "Coins per second = " + round(perturn,2);
}
function setMoney(){
  localStorage.setItem('money',money);
}
function getMoney(){
  var tempMoney = localStorage.getItem('money');
  return parseFloat(tempMoney);
}
function setPerTurn(){
  localStorage.setItem('perturn',perturn);

}
function getPerTurn(){
  var temp = localStorage.getItem('perturn');
  return parseFloat(temp);
}
var runTurn = window.setInterval(function(){
  addMoney();
  printMoney();
  setMoney();
  setPerTurn();
},timestep*1000);

function addMoney(){

  if(isNaN(perturn)){
    perturn = .01;
  }
  money+=timestep*perturn;
  if(isNaN(money)){
    money = 0;
  }
  console.log("money= " + money);
}
function round(num,precision){
  var factor = Math.pow(10,precision);
  return Math.round(num*factor)/factor;

}
