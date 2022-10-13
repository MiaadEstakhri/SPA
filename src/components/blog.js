import { Link, useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

const Blog = () => {
  const { id } = useParams();
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  return (
    <div>
      <h2>Blog Details - {id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}> go to next blog page</Link>
    </div>
  );
};

export default Blog;
