function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const lists = document.getElementById("app").querySelectorAll(".ranked-list li")
  debugger
  for(let i = 0; i < lists.length; i++) {
    lists[i].innerHTML = (parseInt(lists[i].innerHTML) + n).toString()
  }
  return null
}

function deepestChild() {
  var current = "div#grand-node div"

  while (true) {

    if (document.querySelector(current)) {
        current += " div"
    } else {
      return document.querySelector(current.slice(0, current.length - 4))
    }

  }
}
