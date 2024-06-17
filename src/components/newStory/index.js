import { useEffect } from "react";
import { post } from "../../utilites";
import NewPostInput from "./NewPostInput";
import axios from "axios";
const NewStory = (props) => {
  const addStory = (value) => {
    const body = {
      creator_name: localStorage.getItem("name"),
      creator_id: localStorage.getItem("userID"),
      content: value,
    };
    post("/story/add", body).then((story) => {
      // display this story on the screen
      props.addNewStory(story);
    });
  };

  return <NewPostInput defaultText="New Story" onSubmit={addStory} />;
};
export default NewStory;
