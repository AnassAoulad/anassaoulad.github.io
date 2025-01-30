import './style.css'

const toggleExperiencesButton = document.getElementById(
  'toggleExperiencesButton'
)
const contentExperiences = document.getElementById('content-experiences')
const toggleImage = document.getElementById('toggleImage')

toggleExperiencesButton.addEventListener('click', () => {
  if (
    contentExperiences.style.display === 'none' ||
    contentExperiences.style.display === ''
  ) {
    contentExperiences.style.display = 'block'
    toggleExperiencesButton.innerHTML =
      'Expériences depuis 2019 <img id="toggleImage" src="arrow-down.png" alt="arrow down" width="20">'
  } else {
    contentExperiences.style.display = 'none'
    toggleExperiencesButton.innerHTML =
      'Expériences depuis 2019 <img id="toggleImage" src="arrow-up.png" alt="arrow up" width="20">'
  }
})

const toggleFormationsButton = document.getElementById('toggle-formations')
const contentFormations = document.getElementById('content-formations')

toggleFormationsButton.addEventListener('click', () => {
  if (contentFormations.style.display === 'none') {
    contentFormations.style.display = 'block'
    toggleFormationsButton.innerHTML =
      'Formations depuis 2021 <img id="toggleImage" src="arrow-down.png" alt="arrow down" width="20">'
  } else {
    contentFormations.style.display = 'none'
    toggleFormationsButton.innerHTML =
      'Formations depuis 2021 <img id="toggleImage" src="arrow-up.png" alt="arrow up" width="20">'
  }
})

const ProjectsButton = document.getElementById('projects-button')
const contentProjects = document.getElementById('content-projects')

ProjectsButton.addEventListener('click', () => {
  if (contentProjects.style.display === 'none') {
    contentProjects.style.display = 'block'
    ProjectsButton.innerHTML =
      'Projets <img id="buttonImage" src="arrow-down.png" alt="arrow down" width="20">'
  } else {
    contentProjects.style.display = 'none'
    ProjectsButton.innerHTML =
      'Projets <img id="buttonImage" src="arrow-up.png" alt="arrow up" width="20">'
  }
})
