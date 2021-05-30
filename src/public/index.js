// Hello world
const init = () => {
  const body = document.getElementById('root')
  const title = document.createElement('h1')

  title.innerHTML = 'yo'
  body.appendChild(title)
  return body
}

init()
