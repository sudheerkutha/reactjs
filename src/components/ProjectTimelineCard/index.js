// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-timeline-cont">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="content-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-cont">
          <AiFillCalendar className="calender" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} rel="noreferrer" target="_blank">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard