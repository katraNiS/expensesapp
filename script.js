const transaction = {
  type: "",
  name: "",
  value: 0,
  date: "",
};

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
//test
/* function addTransactionToTableview(transaction){
  document.creatElement("tr");
  tr.innnerHTML = 
} */

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
// to description toy transaction
function addTransactionDescription(){
  const description = document.getElementById("transactionDescription").value;
  console.log(description);
}

// description toy transaction 
transactionBtn.addEventListener("click", addTransaction);

function addTransaction(){

  // pernw ta stoixeia 
  const transactionType = document.getElementById("transactionType").value;
  const prevIncome = document.getElementById("income");
  const prevExpenses = document.getElementById("expenses");
  const name = document.getElementById("transactionName").value;
  const date = new Date().toLocaleDateString();
  const tbodyid = document.getElementById("transactionTableBody");
  
  // pernw ta ypoloipa kai to poso toy transaction
  const amount = getNumberFromInput("transactionValue");
  const balance = getBalance();
  const income = getNumberFromInput("transactionValue");
  const expenses = getNumberFromInput("transactionValue");
  
  //debug
  /* console.log("amount:", amount, typeof amount);
  console.log("balance:", balance, typeof balance);
  console.log({transactionType, amount, name, date})*/

  // table me ta transactions
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = transactionType;
  if (transactionType === "income"){
    td1.style.color = "green";
  } else if (transactionType === "expenses"){
    td1.style.color = "red";
  }
  tr.appendChild(td1);
  const td2 = document.createElement("td");
  td2.textContent = name;
  tr.appendChild(td2);
  const td3 = document.createElement("td");
  td3.textContent = transactionType === "income" ? `+${amount.toFixed(2)}` : `-${amount.toFixed(2)}`;
  tr.appendChild(td3);
  const td4 = document.createElement("td");
  td4.textContent = date;
  tr.appendChild(td4);
  const td5 = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    tbodyid.removeChild(tr);
  });
  td5.appendChild(deleteBtn);
  tr.appendChild(td5);
  tbodyid.appendChild(tr);

  if (transactionType === "income"){
    const newBalance = balance + income;
    const totalIncome = parseFloat(prevIncome.textContent) + getNumberFromInput("transactionValue");
    setBalance(newBalance);
    setIncome(totalIncome);
  }

  else if (transactionType === "expenses"){
    const newBalance = balance - expenses;
    const totalExpenses = parseFloat(prevExpenses.textContent) + getNumberFromInput("transactionValue");
    setBalance(newBalance);
    setExpenses(totalExpenses);
  }

  else if (transactionType ===""){
    console.log("wrong!")
  }
}
