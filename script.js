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

function setIncome(value){
  document.getElementById("income").textContent = value.toFixed(2);
}

function setExpenses(value){
  document.getElementById("expenses").textContent = value.toFixed(2);
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
transactionBtn.addEventListener("click", addTransaction);

function addTransaction(){
  // pernw ta stoixeia 
  const transactionType = document.getElementById("transactionType").value;
  const prevIncome = document.getElementById("income");
  const prevExpenses = document.getElementById("expenses");
  // ypologizw to neo total income kai total expenses
  const totalIncome = parseFloat(prevIncome.textContent) + getNumberFromInput("transactionValue");
  const totalExpenses = parseFloat(prevExpenses.textContent) + getNumberFromInput("transactionValue");
  // pernw ta ypoloipa kai to poso toy transaction
  const amount = getNumberFromInput("transactionValue");
  const balance = getBalance();
  const income = getNumberFromInput("transactionValue");
  const expenses = getNumberFromInput("transactionValue");
  
  console.log("amount:", amount, typeof amount);
  console.log("balance:", balance, typeof balance);

  if (transactionType === "income"){
    const newBalance = balance + income;
    console.log(newBalance);
    setBalance(newBalance);
    setIncome(totalIncome);
  }

  else if (transactionType === "expenses"){
    const newBalance = balance - expenses;
    console.log(newBalance);
    setBalance(newBalance);
    setExpenses(totalExpenses);
  }

  else if (transactionType ===""){
    console.log("wrong!")
  }

}