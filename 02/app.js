document.addEventListener("DOMContentLoaded", init)

function init() {
  const formEl = document.querySelector("form")
  const labelList = document.querySelectorAll("label")

  if (formEl) {
    formEl.addEventListener("submit", handleSubmit)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const login = e.target.elements.login
    const pass1 = e.target.elements.pass1
    const pass2 = e.target.elements.pass2
    const checkbox = e.target.elements.accept

    const errors = []

    if (!login.value.includes("@")) {
      errors.push(login.previousElementSibling)
    }

    // if (login.value.indexOf("@") === -1) {
    //   errors.push(login.previousElementSibling)
    // }

    if (pass1.value !== pass2.value || pass1.value.length < 6) {
      errors.push(pass1.previousElementSibling)
      errors.push(pass2.previousElementSibling)
    }

    if (!checkbox.checked) {
      errors.push(checkbox.previousElementSibling)
    }

    resetErrors()

    if (errors.length === 0) {
      console.log("done")
    } else {
      showErrors()
    }

    function resetErrors() {
      labelList.forEach(function (labelEl) {
        labelEl.style.color = ""
      })
    }

    function showErrors() {
      errors.forEach(function (labelEl) {
        labelEl.style.color = "red"
      })
    }
  }
}

/* KOD ver.2  */
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form")

//   form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//     const email = document.querySelector("#formLogin").value
//     const pass1 = document.querySelector("#formPass1").value
//     const pass2 = document.querySelector("#formPass2").value
//     const accept = document.querySelector("#formAccept").checked

//     const errors = []

//     if (!emailRegex.test(email)) {
//       errors.push("#formLogin")
//     }

//     if (pass1.length < 7 || pass1 !== pass2) {
//       if (pass1.length < 7) {
//         errors.push("#formPass1")
//         errors.push("#formPass2")
//       } else {
//         errors.push("#formPass2")
//       }
//     }

//     if (!accept) {
//       errors.push("#formAccept")
//     }

//     document.querySelectorAll("label").forEach((label) => {
//       label.style.color = ""
//     })

//     errors.forEach((selector) => {
//       const label = document.querySelector(
//         `label[for="${selector.substring(1)}"]`
//       )
//       if (label) {
//         label.style.color = "red"
//       }
//     })

//     if (errors.length === 0) {
//       console.log("done")
//     }
//   })
// })
