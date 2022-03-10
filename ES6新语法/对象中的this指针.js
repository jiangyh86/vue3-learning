//对象中的this指针
class Player {
  //定义构造函数
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
  toPrint() { 
    console.log(this.age + "----" + this.name);
  }
}

var Player1 = new Player('ss', 22);
Player1.toPrint();