import SingleComment from "./sigleComment";

const CommentsBlock = (props) => {
  return (
    <div className="Card-commentSection">
      <div className="story-comments">
        {props.comments.map((comment) => {
          <SingleComment
            key={`SingleComment_${comment._id}`}
            _id={comment._id}
            creator_name={comment.creator_name}
            content={comment.content}
          />;
        })}
        {/* TODO */}
      </div>
    </div>
  );
};

export default CommentsBlock;
