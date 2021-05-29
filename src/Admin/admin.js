import './admin.css'

function adminPage() {
  const adminPage = `
    <div class="input">
      <label for="name">Наименование</label>
      <input name="name" class="name" type="text"> </br>
      <label for="model">Модель<label>
      <input name="model" class="model" type="text"> </br>
      <label for="price">Стоимость</label>
      <input name="price" id="price" type="number"> </br>
      <label for="status">Статус</label>
      <input name="status" id="status" type="text"> </br>
      <label for="id">ID</label>
      <input name="id" id="id" type="number"> </br>
      <label for="time">Время</label>
      <input name="time" id="time" type="date"> </br>
    </div>
      
    <div class="buttons">
      <button class="add" onclick="Add">Добавить</button>
      <button>Удалить всё</button>
    </div>
      
    <div class="table">
      <table id="table">
         <tr class="first-line__table">
          <th>№ п/п</th>
          <th>Наименование</th>
          <th>Модель</th>
          <th>Стоимость</th>
          <th>Статус</th>
          <th>ID</th>
          <th>Время</th>
          <th>Действие</th>
         </tr>
      </table>
    </div>  
  `
  return adminPage
}

function Add() {
  const name = document.getElementById('name').value()
  const model = document.getElementById('model').value()
  const tab = {
    name: name.value,
    model: model.value
  }
  adminPage(tab)
}
export default function render(container) {
  container.innerHTML = `<div>${adminPage()}</div>`
  Add()
}