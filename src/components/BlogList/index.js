import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list-container">
      {blogsList.map(eachBlog => (
        <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
