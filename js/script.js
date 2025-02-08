//--1--
// const user = {
//   hobby: "soccer",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// for (let i of keys) {
//   console.log(`Keys: ${user[i]}`);
// }
//--2--
const countProps = (obj) => {
  obj = {
    paws: 4,
    color: "white",
    owner: true,
    cost: 1200,
    age: 1,
    wieght: 20,
  };
  const arr = Object.keys(obj);
  console.log(`The amount of keys is: ${arr.length}`);
  return arr;
};
// countProps();

//--3--
//Завдання 3 - тут має повертатись ім'я співробітника, а не кількість його задач.

const findBestEmployee = (employees) => {
  employees = {
    John: 40,
    Bill: 50,
    Steve: 10,
  };
  let maxTasks = 0;
  let name = "";
  for (let [employee, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      name = employee;
    }
    console.log(`${employee}: ${tasks}`);
  }
  console.log(name);
  return name;
};

findBestEmployee();

//--4--
const countTotalSalary = (employees) => {
  employees = {
    junior: 1000,
    middle: 3000,
    senior: 5000,
  };

  const arr = Object.values(employees);
  const [a, b, c] = arr;
  let res = a + b + c;

  const keys = Object.entries(employees);

  for (let [pos, sal] of keys) {
    console.log(`${pos}: ${sal}`);
  }
  console.log(res);

  return res;
};
// countTotalSalary();

//--5--
//Завдання 5 - тут має повертатись масив значень властовості
const getAllPropValue = (arr, prop) => {
  arr = [
    { name: "firstObj", value: 0 },
    { name: "secondObj", value: 1 },
    { name: "thirdObj", value: 2 },
  ];
  for (let i of arr) {
    console.log(arr[i]);
  }
};
// getAllPropValue();

//--6--
const calculateTotalPrice = (allProducts, productName) => {
  allProducts = [
    { name: "meat", cost: 241, amount: 2 },
    { name: "CocaCola", cost: 36, amount: 10 },
    { name: "apple", cost: 10, amount: 5 },
  ];
  const arrs = Object.entries(allProducts);
  for (let i in arrs) {
    productName = arrs[i][1];
    console.log(`This is name of product: ${productName.name}`);
  }

  const mult = Object.values(allProducts);
  for (let i in mult) {
    const res = mult[i];
    const multiplay = res.cost * res.amount;

    console.log(`Cost of ${res.name} is: ${multiplay}`);
  }
};
// calculateTotalPrice();
//--7--

let adding = document.getElementById("adding");
let deducation = document.getElementById("deduction");
const bankFunction = () => {
  let account = {
    userName: "Maksim",
    id: 192983457358,
    balance: 100000,
    password: "atatatatata",
    deposit: function () {
      let firstNum = 10;
      this.balance += firstNum;
      console.log(`Your balance is: ${this.balance}`);
    },
    withdraw: function () {
      let secondNum = 10;
      this.balance -= secondNum;
      console.log(`Your balance is: ${this.balance}`);
    },
    cgl: function print() {
      console.log(this.password);
    },
  };
  adding.addEventListener("click", () => account.deposit());
  deducation.addEventListener("click", () => account.withdraw());
};
// bankFunction();
