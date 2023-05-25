let count = 0

function handlerClick(e){
  count++
  const buttonView = e.target.innerHTML.slice(0,4)
  e.target.innerHTML = buttonView + '-' +count
}