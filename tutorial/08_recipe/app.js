// Application ID 0bf75414
// Application Keys cc56daea07ec2a75d5c84864d8d9f272
const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

const APP_ID = '0bf75414'
const APP_KEY = 'cc56daea07ec2a75d5c84864d8d9f272'

function paintRecipe(items) {
  let foods = ''
  items.map((item) => {
    console.log(item)

    foods += `<div class="food">
    <div class="food_img">
      <img src="${item.recipe.image}" alt="" />
    </div>
    <div class="food_info">
      <div class="food_title">
        <h3>${item.recipe.label}</h3>
        <a href="${item.recipe.url}" target="_blank">view recipe</a>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Perspiciatis distinctio a facere voluptatem! Ratione obcaecati,
        cupiditate beatae nisi labore est perspiciatis facere rem repellat
        omnis cumque a reiciendis eligendi iure?
      </p>
    </div>
  </div>`
  })

  foodList.innerHTML = foods
}

function getRecipe(query) {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

  fetch(url)
    .then((res) => res.json())
    .then((data) => paintRecipe(data.hits))
}

function init() {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const query = input.value
    getRecipe(query)
  })
}

init()
