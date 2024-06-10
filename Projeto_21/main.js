let checkButton = document.getElementById('check-button')
let ageInput = document.getElementById('age-input')

checkButton.addEventListener('click', function(){
  let age = parseInt(ageInput.value)
  let message = (age >= 18) ? 'You are and adult' : 'You are not adult'
  alert(message)
  ageInput.value = ''
})