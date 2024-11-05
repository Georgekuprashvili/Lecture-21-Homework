// 1
for (let index = 1; index <= 15; index++) {
  if (index > 5) {
    console.log(index + " ეს რიცხვი მეტია 5ზე");
  } else {
    console.log(index);
  }
}

// 2
let numbers = [3, 6, 9, 12, 15];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    console.log(numbers[index]);
  }
}

// 3

let n = "anastasia";
for (let index = 0; index < n.length; index++) {
  if (n[index] === "a") {
    console.log(n[index] + "ეს ასო არის a");
  } else {
    console.log(n[index]);
  }
}

// 4
let colours = ["red", "green", "blue", "yellow"];
for (let index = 0; index < colours.length; index++) {
  if (colours[index].length > 5) {
    console.log(colours[index]);
  }
}

// 5
for (let index = 1; index < 50; index++) {
  if (index % 7 === 0) {
    console.log(index + " ეს რიცხვი იყოფა 7ზე");
  }
}

// 6
let numbers2 = [4, 8, 12, 16, 20];
for (let index = 0; index < numbers2.length; index++) {
  let numbers3 = numbers2[index] * 2;
  console.log(numbers3);
}

// 7
let M = "Javascript";
for (let index = 0; index < M.length; index++) {
  if (M[index] === "J") {
    break;
  }
  console.log(M[index]);
}

// 8
let numbers4 = [5, 10, 15, 20, 25];
for (let index = 0; index < numbers4.length; index++) {
  if (numbers4[index] % 5 === 0) {
    console.log(numbers4[index]);
  }
}

// 9
let hello = "hello world";
for (let index = 0; index < hello.length; index++) {
  if (hello[index] != "o") {
    console.log(hello[index]);
  }
}

// 10
let sum = 0;
let G = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < G.length; index++) {
  if (G[index] % 2 === 0) {
    sum += G[index];
  }
  console.log(sum);
}

// 11
let number10 = 10;
for (let index = 1; index <= 10; index++) {
  console.log(`${number10} * ${index} = ${number10 * index}`);
}

// 12
let numbers5 = [2, 7, 4, 9, 5];
for (let index = 0; index < numbers.length; index++) {
  if (numbers5[index] > 4) {
    numbers5[index] = numbers5[index] * 3;
  }
  console.log(numbers5[index]);
}

// 13
for (let index = 1; index < 30; index++) {
  if (index > 10) {
    console.log(index + "ეს რიცხვი მეტია 10 ზე");
  } else {
    console.log(index);
  }
}

// 14
let front = "frontend";
for (let index = 0; index < front.length; index++) {
  if (front[index] === "e") {
    console.log(front[index] + "ეს ასო არის e");
  } else {
    console.log(front[index]);
  }
}

// 15
let numbers6 = [100, 200, 300, 400, 500];
for (let index = 0; index < numbers6.length; index++) {
  if (numbers6[index] < 250) {
    console.log(numbers6[index]);
  }
}
