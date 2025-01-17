//--1--
const user = {
  hobby: "soccer",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
for (const i of keys) {
  console.log(`Keys: ${user[i]}`);
}
//--2--
const countProps = (obj) => {
  obj = {
    paws: 4,
    color: "white",
    owner: true,
    cost: 1200,
    age: 1,
  };
  const arr = Object.keys(obj);
  console.log(`The amount of keys is: ${arr.length}`);
  return arr;
};
countProps();
//--3--
const findBestEmployee = (employees) => {
  employees = {
    John: 40,
    Bill: 50,
    Steve: 10,
  };
  const kyes = Object.entries(employees);
  console.log(kyes);
  for (const i of kyes) {
    const name = i[0];
    const tasksDone = i[1];
    console.log(`${name}: ${tasksDone}`);
  }
  return Math.max(...kyes);
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
  let res;
  for (let i in arr) {
    res = arr[i] + arr[i];
  }
  const keys = Object.entries(employees);
  for (const i of keys) {
    const pos = i[0];
    const sal = i[1];
    console.log(`${pos}: ${sal}`);
  }
  console.log(res);
  return res;
};
countTotalSalary();
//--5--
const getAllPropValue = (arr, prop) => {
  arr = [
    { name: "firstObj", value: 0 },
    { name: "secondObj", value: 1 },
    { name: "thirdObj", value: 2 },
  ];
  console.log(arr);
  const name = Object.entries(...arr);
  for (let i of name) {
    const prop = i[0];
    console.log(`This is value: ${prop}.`);
  }
  return prop;
};
getAllPropValue();
//--6--
const calculateTotalPrice = (allProducts, productName) => {
  allProducts = [
    { name: "meat", cost: 241, amount: 2 },
    { name: "CocaCola", cost: 36, amount: 10 },
    { name: "apple", cost: 10, amount: 5 },
  ];
  const arrName = Object.values(...allProducts);
  for (let i of arrName) {
    const fe = i[0];
    console.log(fe);
  }
  // for (let i of arrName) {
  //   productName = i[0];
  //   console.log(productName);
  // }
  console.log(arrName);
};
calculateTotalPrice();
