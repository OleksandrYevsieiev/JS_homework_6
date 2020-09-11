"use strict";

/* 1.Сделать два инпута: в один вводить параметр(число),
во втором показывать объем шара при заданном параметре. */

const rootDiv = document.getElementById("root");
const userInput = document.createElement("input");
const sphereVolume = document.createElement("input");

rootDiv.append(userInput);
rootDiv.append(sphereVolume);

userInput.addEventListener("input", (event) => {
  sphereVolume.value = (4 / 3) * 3.1415 * userInput.value ** 3;
});

/* 2.Дан элемент #elem. Реализуйте 4 функции:
- Добавьте ему класс www.
- Удалите у него класс www.
- Проверьте наличие у него класса www.
- Добавьте ему класс www, если его нет и удалите - если есть. */

const elem = document.createElement("div");
elem.id = "elem";

elem.classList.add("www");
elem.classList.remove("www");
elem.classList.contains("www");
elem.classList.toggle("www");

/* 3. Вставьте элементы массива объектов(id, title, description) в конец ul так,
чтобы каждый на каждый объект был свой li. 
Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
Сделайте так, чтобы по нажатию на кнопку внтри li эта li удалялась из разметки. */

const ulRootDiv = document.getElementById("ulRoot");
const form = document.createElement("form");
ulRootDiv.append(form);

let inputArray = [];
const ul = document.createElement("ul");
ulRootDiv.append(ul);

const input = document.createElement("input");
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
form.append(input);
form.append(submitBtn);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.length <= 0) {
    alert("Enter a correct value");
    return;
  }

  inputArray.push(input.value);

  const li = document.createElement("li");
  li.textContent = input.value;

  ul.append(li);

  const delBtn = document.createElement("button");

  li.append(delBtn);
  delBtn.dataset.value = input.value;
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", (event) => {
    const {
      target: {
        dataset: { value },
      },
    } = event;

    inputArray.splice(inputArray.indexOf(value), 1);
    li.remove();
  });

  li.addEventListener("click", (event) => {
    li.style.color = "red";
  });

  event.target.reset();
  return delBtn;
});

/* 4. Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции.
Класс должен работать следующим образом:
const elem = new Elem('селектор');
elem.html('!'); //запишет в текст элемента '!'
elem.append('!'); //запишет в начало элемента '!'
elem.prepend('!'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www
//Должны работать цепочки методов:
elem.html('hello').append('!').prepend('!').attr('class', 'www').attr('title', 'hello'); */

class Elem {
  constructor(selector) {
    this.selector = selector;
  }

  html(value) {
    this.value = value;
    return this;
  }

  append(value) {
    this.value += value;
    return this;
  }

  prepend(value) {
    this.value = value + this.value;
    return this;
  }

  attr(attId, attIdVvalue) {
    this.attId = attId;
    this.attIdVvalue = attIdVvalue;
    return this;
  }
}

const elemMeow = new Elem("#test");
elemMeow
  .html("hope this")
  .prepend("I")
  .append("works")
  .attr("checkingClass", "checkingClassValue");
