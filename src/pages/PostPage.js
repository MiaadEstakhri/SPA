import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PostPage = (props) => {
  const { data } = useParams();
  console.log(data);
  const i = 1;



  // const id = props.match.params.id || 1;
  return (
    <div>
      <h2>post Details - {data} ||{i}</h2>
      <div>{JSON.stringify({ data })}</div>
    </div>
  );
};

export default PostPage;
