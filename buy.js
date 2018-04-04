var money = getMoney();
var perturn = getPerTurn();
if(isNaN(money))
  money = 10;
if(isNaN(perturn)){
  perturn = .01;
}
console.log("money: " + getMoney());
function buy_investment(){
  if(money>=10){
    money-=10;
    perturn+=.01;
  }
  setMoney();
  setPerTurn();
}
function setMoney(){
  localStorage.setItem('money',money);
}
function getMoney(){
  return parseFloat(localStorage.getItem('money'));
}
function setPerTurn(){
  localStorage.setItem('perturn',perturn);
}
function getPerTurn(){
  return parseFloat(localStorage.getItem('perturn'));
}
