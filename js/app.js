const pageviews = document.querySelector("#pageviews")
const slider = document.querySelector("#slider")
const checkbox = document.querySelector("#switcher")
const sliderResult = document.querySelector("#slider-value")
slider.oninput = () => {
  const sliderValue = parseInt(slider.value)
  let resultValue
  if (sliderValue < 5) {
    if (sliderValue == 1) resultValue = `10K`
    else if (sliderValue == 2) resultValue = `50K`
    else if (sliderValue == 3) resultValue = `100K`
    else resultValue = `50K`
  } else {
    resultValue = `1M`
  }
  pageviews.textContent = resultValue
}
// domcontentload event
window.addEventListener("DOMContentLoaded", () => {
  pageviews.textContent = `10K`
})
