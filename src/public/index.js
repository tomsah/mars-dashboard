import './style.scss'
import curiosityImg from './images/Curiosity.jpeg'
import opportunityImg from './images/Opportunity.jpeg'
import spiritImg from './images/Spirit.jpeg'
const ROVERS = ['curiosity', 'opportunity', 'spirit']
const roverImg = {
  Curiosity: curiosityImg,
  Opportunity: opportunityImg,
  Spirit: spiritImg,
}
const container = document.getElementById('root')

const createUIElement = (element, option, text) => {
  const markup = document.createElement(element)
  if (Boolean(option) && Boolean(text)) markup[option] = text
  return markup
}

function appendElToParent(parent, el) {
  if (Array.isArray(el)) {
    el.forEach((node) => {
      return parent.appendChild(node)
    })
  } else {
    return parent.appendChild(el)
  }
}

const navElement = createUIElement('nav')
const mainContainer = createUIElement('div', 'className', 'main-container')
const loader = createUIElement('div', 'innerHTML', 'Loading....')

appendElToParent(container, loader)

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
const imageGallery = (images, createUI) => {
  const ul = createUI('ul', 'className', 'gallery')
  const galleryContainer = createUI('div', 'className', 'gallery-container')
  const imageList = images.map((image) => {
    const li = createUI('li')
    const img = createUI('img', 'src', image.img_src)
    appendElToParent(li, img)
    return li
  })
  appendElToParent(ul, imageList)
  appendElToParent(galleryContainer, ul)
  return galleryContainer
}

// Rover Info
const info = (roverInfo, createUI) => {
  const infoContainer = createUI('div', 'className', 'info-container')
  //Rover name
  const roverName = createUI('h1', 'innerHTML', roverInfo.name)
  //Mission status
  const missionStatus = createUI(
    'h2',
    'innerHTML',
    `Mission status: ${roverInfo.status}`,
  )
  //Landing date
  const landingDate = createUI(
    'p',
    'innerHTML',
    `Landed on: ${roverInfo.landing_date}`,
  )
  //Launch date
  const launchDate = createUI(
    'p',
    'innerHTML',
    `Launched on ${roverInfo.launch_date}`,
  )
  //Last photo date
  const lastPhotoDate = createUI(
    'p',
    'innerHTML',
    `Last Photo taken on: ${roverInfo.max_date}`,
  )
  const roverImage = createUI('div', 'className', 'rover-image')
  const image = createUI('img', 'src', roverImg[roverInfo.name])
  appendElToParent(roverImage, image)

  const roverData = createUI('div', 'className', 'rover-data')
  appendElToParent(roverData, [
    roverName,
    missionStatus,
    landingDate,
    launchDate,
    lastPhotoDate,
  ])

  appendElToParent(infoContainer, [roverImage, roverData])

  return infoContainer
}

// Create Rover page
const RoverPage = (state) => {
  container.innerHTML = '' //reset the page
  const gallery = imageGallery(state.images, createUIElement)
  const roverData = info(state.info, createUIElement)

  appendElToParent(mainContainer, [roverData, gallery])
  return appendElToParent(container, mainContainer)
}

// Create Menu
const nav = (navItemList, activePage, createUI) => {
  const links = navItemList.map((rover) => {
    const linkContainer = createUI('div', 'className', 'nav-link-container')
    activePage === rover
      ? linkContainer.classList.add('active')
      : linkContainer.remove('active')
    const link = createUI('a', 'innerHTML', rover)
    link.setAttribute('href', `http://localhost:8080/${rover}`)
    link.onclick = function () {
      fetchRoverData(rover)
    }
    appendElToParent(linkContainer, link)
    return linkContainer
  })
  return appendElToParent(navElement, links)
}

const init = (roverName) => {
  nav(ROVERS, roverName, createUIElement)
  document.body.appendChild(navElement)
  document.body.appendChild(container)
}

window.onload = function () {
  const roverName = [...window.location.pathname].slice(1).join('')
  fetchRoverData(roverName).then(() => init(roverName))
}
