import './Breadcrumb.scss';
import { useLocation, Link } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const formatBreadcrumb = (value) => {
    return value
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letter of each word
  };

  return (
    <div className='container'>
      <div className='breadcrumb-wrapper'>
        <ul>
          <li><Link to='/'>Home</Link><i className='separator fa fa-chevron-right'></i></li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={to}>
                {!isLast ? <Link to={to}>{formatBreadcrumb(value)}</Link> : <span>{formatBreadcrumb(value)}</span>}
                {!isLast && <i className='separator fa fa-chevron-right'></i>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumb;
