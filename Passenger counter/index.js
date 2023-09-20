let count = 0

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

function increment() {
  count++

  countEl.textContent = count
}

function save() {
  let savedNum = count + ' - '
  saveEl.textContent += savedNum
  count = 0
  countEl.textContent = count
}
