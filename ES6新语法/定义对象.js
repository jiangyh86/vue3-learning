function Player(name, age) { 
  this.age = age;
  this.name = name;
}
//定义对象的成员函数
Player.prototype.toPrint = function () { 
  console.log(this.age + "----" + this.name);
}
var Player1 = new Player("EDW", 11);
var Player2 = new Player("2DD", 41);
//调用成员函数
Player1.toPrint();
Player2.toPrint();