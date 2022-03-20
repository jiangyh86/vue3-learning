
export default function dateFormat(date) {
    let y = date.getFullYear()
    let m = (date.getMonth() + 1).toString().padStart(2, '0')
    let d = date.getDate().toString().padStart(2, '0')
  
    //时分秒
    let hh = date.getHours().toString().padStart(2, '0')
    let mm = date.getMinutes().toString().padStart(2, '0')
    let ss = date.getSeconds().toString().padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }