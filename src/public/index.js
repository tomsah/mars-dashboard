import './style.scss'
const ROVERS = ['curiosity', 'opportunity', 'spirit']
const container = document.getElementById('root')
const navElement = document.createElement('nav')
let mainContainer = document.createElement('div')
mainContainer.className = 'main-container'
const loader = document.createElement('div')
loader.innerHTML = 'Loading....'

container.appendChild(loader)

function append(parent, el) {
  return parent.appendChild(el)
}

//Fetch Rover info
async function fetchRoverData(rover) {
  await fetch(`http://localhost:3000/${rover}`)
    .then((response) => response.json())
    .then((data) => {
      createRoverPage(data)
    })
    .catch((error) => console.log(error))
}

const createRoverPage = (data) => {
  let state = {
    images: data.photos.splice(0, 10),
    info: data.manifest,
  }
  return RoverPage(state)
}

//Rover Image gallery
const imageGallery = (images) => {
  const ul = document.createElement('ul')
  const galleryContainer = document.createElement('div')
  galleryContainer.className = 'gallery-container'
  ul.className = 'gallery'
  const imageList = images.map((image) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = image.img_src
    append(li, img)
    return li
  })
  imageList.forEach((imageLi) => append(ul, imageLi))
  append(galleryContainer, ul)
  return galleryContainer
}

// Rover Info
const info = (roverInfo) => {
  console.log(roverInfo)
  const infoContainer = document.createElement('div')
  infoContainer.className = 'info-container'
  //Rover name
  const roverName = document.createElement('h1')
  roverName.innerHTML = roverInfo.name
  //Mission status
  const missionStatus = document.createElement('h2')
  missionStatus.innerHTML = `Mission status: ${roverInfo.status}`
  //Landing date
  const landingDate = document.createElement('p')
  landingDate.innerHTML = `Landed on: ${roverInfo.landing_date}`
  //Launch date
  const launchDate = document.createElement('p')
  launchDate.innerHTML = `Launched on ${roverInfo.launch_date}`
  //Last photo date
  const lastPhotoDate = document.createElement('p')
  lastPhotoDate.innerHTML = `Last Photo taken on: ${roverInfo.max_date}`

  infoContainer.appendChild(roverName)
  infoContainer.appendChild(missionStatus)
  infoContainer.appendChild(landingDate)
  infoContainer.appendChild(launchDate)
  infoContainer.appendChild(lastPhotoDate)

  return infoContainer
}

// Create Rover page
const RoverPage = (state) => {
  container.innerHTML = '' //reset the page
  const gallery = imageGallery(state.images)
  const RoverData = info(state.info)
  mainContainer.appendChild(RoverData)
  mainContainer.appendChild(gallery)
  return container.appendChild(mainContainer)
}

// Create Menu
const nav = () => {
  const links = ROVERS.map((rover) => {
    const linkContainer = document.createElement('div')
    linkContainer.className = 'nav-link-container'
    const link = document.createElement('a')
    const linkText = document.createTextNode(rover)
    link.append(linkText)
    link.setAttribute('href', `http://localhost:8080/${rover}`)
    link.onclick = function () {
      fetchRoverData(rover)
    }
    append(linkContainer, link)
    return linkContainer
  })
  return links.forEach((link) => append(navElement, link))
}

const init = () => {
  nav()
  document.body.appendChild(navElement)
  document.body.appendChild(container)
}

window.onload = function () {
  const roverName = [...window.location.pathname].slice(1).join('')
  fetchRoverData(roverName).then(() => init())
}
