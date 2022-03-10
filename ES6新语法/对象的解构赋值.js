//对象的解构赋值
let { age: age, name: name } = { name: "james", age: 22 }
//对象的解构赋值，变量名对上即可，顺序不重要
//简写形式：let {age,name}={namer:"james",age:33}
console.log(name + "--" + age);//james--33


//对象方法的解构
let { sqrt, sin, cos } = Math
console.log(sqrt(4))//2