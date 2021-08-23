import './style.scss'
import curiosityImg from './images/Curiosity.jpeg'
import opportunityImg from './images/Opportunity.jpeg'
import spiritImg from './images/Spirit.jpeg'
import {fromJS} from 'immutable'
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
async function fetchData(pathName) {
  if (pathName === '/') {
    await fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => {
        homePage(data, createUIElement)
      })
      .catch((error) => console.log(error))
  }
  await fetch(`http://localhost:3000/${pathName}`)
    .then((response) => response.json())
    .then((data) => {
      createRoverPage(data)
    })
    .catch((error) => console.log(error))
}

const createRoverPage = (data) => {
  //convert to an immutableJS object
  let state = fromJS({
    images: data.photos.splice(0, 10),
    info: data.manifest,
  })

  return RoverPage(state)
}

const homePage = (image, createUI) => {
  container.innerHTML = '' //reset the page
  const homePageContainer = createUI('div', 'className', 'homepage-container')
  const titleContainer = createUI('div', 'className', 'image-data-title')
  const title = createUI('h1', 'innerHTML', 'Photo of the day')
  const imageDate = createUI('span', 'innerHTML', image.date)

  appendElToParent(titleContainer, [title, imageDate])
  const imageOfTheDay = createUI('img', 'src', image.hdurl)
  const imageData = createUI('div', 'className', 'image-data')
  const imageExplanation = createUI(
    'div',
    'className',
    'image-data-explanation',
  )
  imageExplanation.innerHTML = image.explanation
  appendElToParent(imageData, [titleContainer, imageExplanation])
  appendElToParent(homePageContainer, [imageOfTheDay, imageData])
  appendElToParent(mainContainer, homePageContainer)
  return appendElToParent(container, homePageContainer)
}

//Rover Image gallery
const imageGallery = (images, createUI) => {
  const galleryContainer = createUI('div', 'className', 'gallery-container')
  const ul = createUI('ul', 'className', 'gallery')
  const imageList = images.map((image) => {
    const li = createUI('li')
    const imgPath = image.get('img_src')
    const img = createUI('img', 'src', imgPath)
    appendElToParent(li, img)
    return li
  })
  appendElToParent(ul, imageList.toJS())
  appendElToParent(galleryContainer, ul)
  return galleryContainer
}

// Rover Info
const info = (roverInfo, createUI) => {
  const infoContainer = createUI('div', 'className', 'info-container')
  //Rover name
  const roverName = createUI('h1', 'innerHTML', roverInfo.getIn(['name']))
  //Mission status
  const missionStatus = createUI(
    'h2',
    'innerHTML',
    `Mission status: ${roverInfo.getIn(['status'])}`,
  )
  //Landing date
  const landingDate = createUI(
    'p',
    'innerHTML',
    `Landed on: ${roverInfo.getIn(['landing_date'])}`,
  )
  //Launch date
  const launchDate = createUI(
    'p',
    'innerHTML',
    `Launched on ${roverInfo.getIn(['launch_date'])}`,
  )
  //Last photo date
  const lastPhotoDate = createUI(
    'p',
    'innerHTML',
    `Last Photo taken on: ${roverInfo.getIn(['max_date'])}`,
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
  const images = state.getIn(['images'])
  const roverInfo = state.getIn(['info'])
  const gallery = imageGallery(images, createUIElement)
  const roverData = info(roverInfo, createUIElement)

  appendElToParent(mainContainer, [roverData, gallery])
  return appendElToParent(container, mainContainer)
}

// Create Menu
const nav = (navItemList, activePage, createUI) => {
  const links = navItemList.map((linkText) => {
    const linkContainer = createUI('div', 'className', 'nav-link-container')
    activePage === linkText
      ? linkContainer.classList.add('active')
      : linkContainer.remove('active')
    const link = createUI(
      'a',
      'innerHTML',
      linkText === '/' ? 'Home' : linkText,
    )
    link.setAttribute(
      'href',
      linkText === '/'
        ? 'http://localhost:8080/'
        : `http://localhost:8080/${linkText}`,
    )
    link.onclick = function () {
      fetchData(linkText)
    }
    appendElToParent(linkContainer, link)
    return linkContainer
  })
  return appendElToParent(navElement, links)
}

const init = (roverName) => {
  const navLinks = ['/', ...ROVERS]
  nav(navLinks, roverName, createUIElement)
  document.body.appendChild(navElement)
  document.body.appendChild(container)
}

window.onload = function () {
  const pathName =
    [...window.location.pathname].length > 1
      ? [...window.location.pathname].slice(1).join('')
      : window.location.pathname
  fetchData(pathName).then(() => init(pathName))
}
