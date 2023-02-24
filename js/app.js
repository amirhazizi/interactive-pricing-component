const pageviews = document.querySelector("#pageviews")
const slider = document.querySelector("#slider")
const checkbox = document.querySelector("#switcher")
const sliderResult = document.querySelector("#slider-value")
// billing array
const bills = [8, 12, 16, 24, 36]
// billing amount
let billing = 0
let yearBilling = 0
// slider change event
slider.oninput = sliderChanger
// domcontentload event
window.addEventListener("DOMContentLoaded", sliderChanger)

// slider change value event
function sliderChanger() {
  const sliderValue = parseInt(slider.value)
  let resultValue
  billing = bills[sliderValue]
  yearBilling = billing - billing / 4
  const sliderPercent = (sliderValue / slider.max) * 100
  console.log(100 - sliderPercent)
  slider.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${sliderPercent}%, hsl(224, 65%, 95%) ${sliderPercent}%)`
  if (sliderValue < 4) {
    if (sliderValue == 0) resultValue = `10K`
    else if (sliderValue == 1) resultValue = `50K`
    else if (sliderValue == 2) resultValue = `100K`
    else resultValue = `50K`
  } else {
    resultValue = `1M`
  }
  billingCheck()
  pageviews.textContent = resultValue
}
// checkbox checked event
checkbox.addEventListener("change", billingCheck)
// checkbox check event
function billingCheck() {
  if (checkbox.checked) {
    sliderResult.textContent = `$${yearBilling}.00`
  } else {
    sliderResult.textContent = `$${billing}.00`
  }
}
