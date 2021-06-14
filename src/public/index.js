import './style.scss'
const body = document.getElementById('root')
const title = document.createElement('h1')
const navElement = document.createElement('nav')
let mainContainer = document.createElement('div')
mainContainer.className = 'main-container'
const ROVERS = ['curiosity', 'opportunity', 'spirit']

function append(parent, el) {
  return parent.appendChild(el)
}

let store
//Fetch Rover info
async function getRoverData(rover) {
  await fetch(`http://localhost:3000/${rover}`)
    .then((response) => response.json())
    .then(({data}) => {
      console.log(data)
      getImageAndData(data)
    })
    .catch((error) => console.log(error))
}

const titleElm = (name) => {
  title.innerHTML = name
  body.appendChild(title)
}

const getImageAndData = (data) => {
  console.log('>>', data)
  let newState = {
    images: data[0].photos.splice(0, 10),
    info: data[1].photo_manifest,
  }

  updateState(newState)
  console.log('lll', newState)
  titleElm(newState.info.name)
  const page = RoverPage(newState, newState.info.name)
  body.appendChild(page)
}

const updateState = (newState) => {
  store = {
    ...store,
    [newState.info.name]: {...newState},
  }
  // console.log('store', store)
  return store
}

const RoverPage = (state) => {
  const ul = document.createElement('ul')
  const galleryContainer = document.createElement('div')
  galleryContainer.className = 'gallery-container'
  mainContainer.innerHTML = ''
  ul.className = 'gallery'
  const images = state.images
  console.log('ddd', state, images)

  const imageList = images.map((image) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = image.img_src
    append(li, img)
    return li
  })
  imageList.forEach((imageLi) => append(ul, imageLi))
  append(galleryContainer, ul)
  mainContainer.appendChild(galleryContainer)
  return mainContainer
}

const nav = () => {
  const links = ROVERS.map((rover) => {
    const linkContainer = document.createElement('div')
    linkContainer.className = 'nav-link-container'
    const link = document.createElement('a')
    const linkText = document.createTextNode(rover)
    link.append(linkText)
    link.setAttribute('href', `http://localhost:8080/${rover}`)
    link.onclick = function () {
      stop.event
      getRoverData(rover)
      return false
    }
    append(linkContainer, link)
    return linkContainer
  })
  return links.forEach((link) => append(navElement, link))
}

const init = () => {
  console.log('store', store)
  nav()
  body.appendChild(navElement)
  body.appendChild(mainContainer)
  return body
}

window.onload = function () {
  const roverName = [...window.location.pathname].slice(1).join('')
  getRoverData(roverName).then(() => init())
}
