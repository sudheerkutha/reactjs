import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog
  return (
    <li>
      <div className="title-date-container">
        <h1 className="item-title">{title}</h1>
        <p className="item-date">{publishedDate}</p>
      </div>
      <p className="item-description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
