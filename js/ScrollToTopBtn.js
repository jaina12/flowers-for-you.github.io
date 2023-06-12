const myButton = document.getElementById('myBtn')

const scrollFunction = () => {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    myButton.style.display = 'block'
  } else {
    myButton.style.display = 'none'
  }
}


const topFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

window.onscroll = () => scrollFunction()
