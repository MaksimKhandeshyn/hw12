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
