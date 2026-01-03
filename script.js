//dropdown function 
function dropdown(){
  document.getElementById('dropdownbtn').classList.toggle('show'); 
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// edw kanw to value na einai arithmos kai oxi apla string

function getNumberFromInput(Id){
  const value = parseFloat(document.getElementById(Id).value);  
  return isNaN(value) ? 0 : value;
}

// edw vlepw pio einai to balance moy

function getBalance(){
  const balanceElement = document.getElementById("balance");
  const value = parseFloat(balanceElement.textContent)
  return Number.isFinite(value) ? value : 0;
}

//edw ftiaxnw to pws tha fainetai to balance moy 

function setBalance(value){
  document.getElementById("balance").textContent = value.toFixed(2);
}

// to income moy

function addIncome(){
  const income = getNumberFromInput("income");
  const balance = getBalance();
  const newBalance = balance + income;
  setBalance(newBalance);
}

// ta expenses moy 

function addExpense(){
  const expense = getNumberFromInput("expenses");
  const balance = getBalance();
  const newBalance = balance - expense;
  setBalance(newBalance);
}

// description toy transaction 

function addTransaction(){

}