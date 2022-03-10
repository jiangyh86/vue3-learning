//箭头函数简写
let noParam = function () { 
  return 7;
}
//无参箭头函数
let noParamA = () => 7;

let sun = function (num1, num2) { 
  return num1 + num2;
}
//带参箭头函数
let sumA = (num1, num2) => num1 + num2;

let add = function (num1, num2) {
  num1 += 5;
  num2 += 5;
  return num1 + num2;
}

let addA = (num1, num2) => { 
  num1 += 5;
  num2 += 5;
  return num1 + num2;
}