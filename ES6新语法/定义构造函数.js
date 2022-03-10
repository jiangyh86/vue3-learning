class Player {
  //定义构造函数
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
  //定义成员函数
  //toPrint() { 
  //let _this=this
  //setTimeout(function(){
  // console.log(_this.age + "----" + _this.name);
  //},1000)
  //}
  //}

  toPrint() {
    setTimeout(() => {
      console.log(this.age + "----" + this.name);
    }, 1000)
  }
}
let play1 = new Player("ss", 33)
play1.toPrint()