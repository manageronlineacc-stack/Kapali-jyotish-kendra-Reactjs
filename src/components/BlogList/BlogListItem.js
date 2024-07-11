import { useNavigate } from 'react-router-dom';
import { slugify } from '../../util/slugify';

function BlogListItem({blogImg, blogTitle, blogShortDescrp, blogDate, blogId}) {
  const navigate = useNavigate();
  const handleClick = () => {
    const slug = slugify(blogTitle);
    navigate(`/blogs/${slug}`);
  };
  return (
    <div className='blog-item-inner'>
      <div className='blog-img'>
        <img src={blogImg} alt='blog post of kapali' />
      </div>
      <div className='blog-content'>
        <h3>{ blogTitle }</h3>
        <ul className='action-icons'>
          <li>
            <i className='fa fa-calendar'></i>
            { blogDate }
          </li>
          <li>
            <i className="fa fa-clock-o"></i>
            20 mins read
          </li>
          <li>
            <i className="fa fa-user"></i>
            Swamy Sivasuji
          </li>
        </ul>
        <p>{blogShortDescrp}</p>
        <div className="arrow-btn"  onClick={handleClick}>Read More</div>
      </div>
    </div>
  );
}

export default BlogListItem