const transactionData = [];

const addMoneyParent = document.getElementById("addMoneyParent");
const addMoneyPage = document.getElementById("addMoneyPage");
const addMoneyButton = document.getElementById("addMoneyButton");

const cashOutParent = document.getElementById("cashOutParent");
const cashOutPage = document.getElementById("cashOutPage");
const cashOutButton = document.getElementById("cashOutButton");

const transactionParent = document.getElementById("transactionParent");
const transactionPage = document.getElementById("transactionPage");
const transactionDiv = document.getElementById("transactionDiv");

const totalBalance = document.getElementById("totalBalance");
const totalBalanceValue = totalBalance.innerText;
let convertedTotalBalanceValue = parseInt(totalBalanceValue);
console.log(convertedTotalBalanceValue);

//add money function
addMoneyButton.addEventListener("click", function () {
  const amount = document.getElementById("addAmount");
  const amountValue = amount.value;
  const convertedAmountValue = parseInt(amountValue);
  console.log(convertedAmountValue);
  /* const newTotalBalance = convertedTotalBalanceValue + convertedAmountValue;
  console.log(newTotalBalance); */

  convertedTotalBalanceValue =
    convertedTotalBalanceValue + convertedAmountValue;
  totalBalance.innerText = convertedTotalBalanceValue;

  const data = {
    name: "add money ",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  console.log(transactionData);
});
//add money toggle
addMoneyParent.addEventListener("click", function () {
  addMoneyPage.style.display = "block";
  cashOutPage.style.display = "none";
  transactionPage.style.display = "none";
  addMoneyParent.classList.add("border-green-500", "!bg-green-200");
});

//cashOut function
cashOutButton.addEventListener("click", function () {
  const amount = document.getElementById("cashAmount");
  const amountValue = amount.value;
  const convertedAmountValue = parseInt(amountValue);
  console.log(convertedAmountValue);
  /* const newTotalBalance = convertedTotalBalanceValue + convertedAmountValue;
  console.log(newTotalBalance); */

  convertedTotalBalanceValue =
    convertedTotalBalanceValue - convertedAmountValue;
  totalBalance.innerText = convertedTotalBalanceValue;

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});
//cash out toggle
cashOutParent.addEventListener("click", function () {
  cashOutPage.style.display = "block";
  addMoneyPage.style.display = "none";
  transactionPage.style.display = "none";
  cashOutParent.classList.add("border-blue-500", "!bg-blue-200");
});

//transaction page

transactionParent.addEventListener("click", function () {
  transactionPage.style.display = "block";
  cashOutPage.style.display = "none";
  addMoneyPage.style.display = "none";
  transactionParent.classList.add("border-gray-500", "!bg-gray-200");
  const transactionDiv = document.getElementById("transactionDiv");
  console.log(transactionDiv);

  /*  const newP = document.createElement("p");
  newP.innerText = "hello";
  transactionDiv.appendChild(newP); */

  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
   <div class="flex flex-col items-center justify-center bg-orange-200 p-3 m-1 border-red-300">
    <h2>${data.name}</h2>
        <h2>${data.date}</h2>
   </div>
    `;
    transactionDiv.appendChild(div);
  }
});
