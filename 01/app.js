// document.addEventListener("DOMContentLoaded", init)

// function init() {
//   console.log("DOM")

//   const formEl = document.querySelector("form")
//   console.log(formEl)

//   if (formEl) {
//     formEl.addEventListener("submit", handleSubmit)
//   }
// }

// function handleSubmit(e) {
//   e.preventDefault() //zatrzymuje domyślną akcję formularza
//   console.log("submit")

//   console.log(e.target.elements)

//   const firstNameEl = e.target.elements.firstName
//   const lastNameEl = e.target.elements.lastName

//   const firstName = firstNameEl.value
//   const lastName = lastNameEl.value

//   console.log(firstName, lastName)

//   if (firstName !== "" && lastName !== "") {
//     const liElement = document.createElement("li")
//     liElement.classList.add("user-list__person")
//     liElement.innerText = firstName + " " + lastName

//     const ulElement = e.target.nextElementSibling
//     ulElement.appendChild(liElement)

//     firstNameEl.value = ""
//     lastNameEl.value = ""
//   } else {
//     alert("Wprowadź prawidłowe dane!")
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  // Pobranie formularza i listy użytkowników
  const form = document.querySelector("form")
  const usersList = document.querySelector(".users-list")

  // Dodanie nasłuchiwacza zdarzeń do formularza
  form.addEventListener("submit", function (e) {
    // Zatrzymanie domyślnej akcji formularza
    e.preventDefault()

    // Pobranie danych z formularza
    const firstName = form.querySelector('input[name="firstName"]').value.trim()
    const lastName = form.querySelector('input[name="lastName"]').value.trim()

    // Sprawdzenie, czy oba pola są wypełnione
    if (firstName === "" || lastName === "") {
      alert("Proszę wypełnić wszystkie pola!")
      return
    }

    // Utworzenie nowego elementu <li>
    const newListItem = document.createElement("li")
    newListItem.className = "users-list__person"
    newListItem.textContent = `${firstName} ${lastName}`

    // Dodanie nowego elementu do listy
    usersList.appendChild(newListItem)

    // Wyczyść pola formularza
    form.reset()
  })
})
