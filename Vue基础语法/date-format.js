let dt = new Date()
let y = dt.getFullYear()
let m = (dt.getMonth() + 1).toString().padStart(2, '0')
let d = dt.getDate().toString().padStart(2, '0')

//时分秒
let hh = dt.getHours().toString().padStart(2, '0')
let mm = dt.getMinutes().toString().padStart(2, '0')
let ss = dt.getSeconds().toString().padStart(2, '0')

let formatStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
console.log(formatStr)

let dateFormat = function (date) {
  let y = date.getFullYear()
  let m = (date.getMonth() + 1).toString().padStart(2, '0')
  let d = date.getDate().toString().padStart(2, '0')

  //时分秒
  let hh = date.getHours().toString().padStart(2, '0')
  let mm = date.getMinutes().toString().padStart(2, '0')
  let ss = date.getSeconds().toString().padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
