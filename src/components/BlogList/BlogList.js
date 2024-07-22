import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import './BlogList.scss';

const GET_POSTS = gql`
  query MyQuery {
    posts {
      title
      slug
      date
      excerpt
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
`;

function BlogListItem({ blogImg, blogTitle, blogShortDescrp, blogDate, onClick }) {
  return (
    <div className='blog-item-inner' onClick={onClick}>
      <div className='blog-img'>
        <img src={blogImg} alt='blog post' />
      </div>
      <div className='blog-content'>
        <h3>{blogTitle}</h3>
        <ul className='action-icons'>
          <li>
            <i className='fa fa-calendar'></i>
            {blogDate}
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
        <div className="arrow-btn">Read More</div>
      </div>
    </div>
  );
}

function BlogList() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleServiceClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  return (
    <div className='blog-list-sidebar-wrapper'>
      <div className='container'>
        <div className='column-wrapper'>
          <div className='blog-list-wrapper'>
            {data.posts.map((blogItem) => (
              <BlogListItem
                key={blogItem.slug}
                blogImg={blogItem.coverImage.url}
                blogTitle={blogItem.title}
                blogShortDescrp={blogItem.excerpt}
                blogDate={blogItem.date}
                onClick={() => handleServiceClick(blogItem.slug)}
              />
            ))}
          </div>
          <div className='sidebar-wrapper'>
            <div className='sidebar-widget'>
              <h5>Instagram Feed</h5>
              <div className='content'>
                <iframe
                  src="https://www.instagram.com/kapalijyotishkendra/embed"
                  title='instagram'
                  width="100%"
                  height="385px"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
