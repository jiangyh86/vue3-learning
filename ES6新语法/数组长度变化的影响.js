//数组长度变化的影响
//数组的length属性不是只读的，可以修改
let players = ["curry", "james", "kobe"];
//原始长度是3，将数组长度修改为2，相当于删除了末尾一项
players.length = 2;
console.log(players[2])//数组下标是2，打印结果是undefined

//超过数组长度赋值的影响
let players = ["curry", "james", "kobe"];
players[7] = "fwf";//设置数组中第8项
console.log(players.length);//结果为8
console.log(players[5]);//undifined