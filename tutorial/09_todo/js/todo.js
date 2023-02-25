const form = document.querySelector('form')
const input = form.querySelector('input')
const ul = document.querySelector('.todo_list')

const todos = []

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function paintTodo(text) {
  const li = document.createElement('li')
  const span = document.createElement('span')

  li.innerText = text
  li.id = todos.length + 1
  span.innerText = 'x'

  li.appendChild(span)
  ul.appendChild(li)

  todos.push({ id: todos.length + 1, text })

  saveTodo()

  console.log(todos)
}

function handleSubmit(e) {
  e.preventDefault()
  paintTodo(input.value)
}

function init() {
  form.addEventListener('submit', handleSubmit)
}

init()
