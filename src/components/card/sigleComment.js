const SingleComment = (props) => {
  return (
    <div className="Card-commentBody">
      <div className="Card-commentBody">
        <span className="u-bold">{props.creator_name}</span>
        <span>{" | " + props.content}</span>
      </div>
    </div>
  );
};

export default SingleComment;
