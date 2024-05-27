import './BlogDetail.scss';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      title
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

function BlogDetail() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const post = data?.post;

  if (!post) {
    return (
      <div className='blog-detail-container'>
        <div className='container'>Post not found</div>
      </div>
    );
  }

  return (
    <div className='blog-detail-container'>
      <div className='container'>
        <div className='detail-header'>
          <div className='detail-title'>{post.title}</div>
          <ul className='action-icons'>
            <li>
              <i className='fa fa-calendar'></i>
              {post.date}
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
          <div className='blog-img'>
            <img src={post.coverImage.url} alt={post.title} />
          </div>
        </div>
        <div className='detail-description'>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
