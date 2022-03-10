//定义对象
class Player { 
  //定义构造函数
  constructor(name, age) { 
    this.age = age;
    this.name = name;
  }
  //定义成员函数
  toPrint() { 
    console.log(this.age + "----" + this.name);
  }
}
class BestPlayer extends Player { 
  constructor() { 
    super();
    this.name = "wedw";
    this.age = 12;
  }
}
let bestplayer = new BestPlayer();
bestplayer.toPrint();

var Player1 = new Player("wefw", 23);
Player1.toPrint();