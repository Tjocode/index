import './style.css'

function createApp() {
  const app = document.querySelector('#app')
  
  const container = document.createElement('div')
  container.className = 'container'
  
  const highlightText = document.createElement('div')
  highlightText.className = 'highlight-text'
  highlightText.textContent = 'Cuzinho hoje?'
  
  const buttonsContainer = document.createElement('div')
  buttonsContainer.className = 'buttons-container'
  
  const yesButton = document.createElement('button')
  yesButton.className = 'btn btn-yes'
  yesButton.textContent = 'Yes'
  
  const noButton = document.createElement('button')
  noButton.className = 'btn btn-no'
  noButton.textContent = 'No'
  
  // Function to move the No button
  function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth
    const maxY = window.innerHeight - button.offsetHeight
    
    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)
    
    button.style.position = 'fixed'
    button.style.left = randomX + 'px'
    button.style.top = randomY + 'px'
  }
  
  // Add event listeners for both mouse and touch events
  noButton.addEventListener('mouseover', () => moveButton(noButton))
  noButton.addEventListener('touchstart', (e) => {
    e.preventDefault()
    moveButton(noButton)
  })
  
  buttonsContainer.appendChild(yesButton)
  buttonsContainer.appendChild(noButton)
  
  container.appendChild(highlightText)
  container.appendChild(buttonsContainer)
  app.appendChild(container)
}

createApp()