const user = {
  name: "MC",
  age: 29,
  married: true,
  greet: function () {
    console.log("Hello there");
  },
};

console.log(user.name);
user.greet();
const obj = {
  color: "red",
  height: 100,
};

const list = [1, 2, 3, 4];
const testList = ["a", "b", "c"];

list[1];

obj.height;

const newList = [
  { color: "red", height: 100 },
  { color: "green", height: 50 },
];

newList[0].color;

newList[1].height;

newList.push({ color: "black", height: 10 });

newList.pop();

list.splice(0, 1);
