// import scss react content
import './BlogGrid.scss';
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

function BlogItem({ blogImg, blogTitle, blogShortDescrp, blogDate, onClick}) { 
  return (
      <div className='blog-item' onClick={onClick}>
        <img src={blogImg} alt='blog post of kapali' />
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
          <p>{ blogShortDescrp }</p>
        </div>
      </div>
  );
}

function BlogGrid() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleServiceClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };
  return (
    <div className='blog-grid-wrapper'>
      <div className='container'>
        <div className='blog-grid-header'>
          <h3>Our Blogs</h3>
          <div className='view-cta'><Link to='/blogs'>View More</Link></div>
        </div>
        <div className='two-column'>
          {data.posts.slice(0, 2).map((blogItem) => (
            <BlogItem  
            key={blogItem.slug}
            blogImg={blogItem.coverImage.url}
            blogTitle={blogItem.title}
            blogShortDescrp={blogItem.excerpt}
            blogDate={blogItem.date}
            onClick={() => handleServiceClick(blogItem.slug)}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;