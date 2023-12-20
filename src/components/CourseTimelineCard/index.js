// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, description, duration, tagsList} = details
  return (
    <div>
      <div className="course-timeline-cont">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-cont">
          <AiFillClockCircle className="clock" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="list-container">
        {tagsList.map(eachItem => (
          <p key={eachItem.id} className="list-item">
            {eachItem.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
