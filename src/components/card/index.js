import { useEffect, useState } from "react";
import SingleStory from "./singleStory";

let Property = {
  default: "#EEEEEE",
  hover: "#c4cfdf66",
  selected: "#c4cfdf",
};
const State = ["default", "selected"];

const Card = (props) => {
  const [comments, setComments] = useState([]);

  const [bkColor, setBkColor] = useState(props.variant);
  const [btnState, setBtnState] = useState(0); //bn

  useEffect(() => {});

  const addNewComment = (commentObj) => {
    setComments(comments.concat([commentObj]));
  };

  return (
    <div
      className="Card-container"
      style={{
        backgroundColor: `${Property[bkColor]}`,
      }}
      onMouseOver={() => {
        setBkColor("hover");
      }}
      onMouseLeave={() => {
        setBkColor(State[btnState]);
      }}
      onMouseUp={() => {
        if (btnState) {
          setBtnState(0);
        } else setBtnState(1);
      }}
    >
      <SingleStory
        _id={props._id}
        creator_name={props.creator_name}
        content={props.content}
        time={props.time}
        setStories={props.setStories}
      />
      {/* <CommentsBlock
        storyId={props._id}
        comments={comments}
        addNewComment={addNewComment}
      /> */}
    </div>
  );
};
export default Card;
