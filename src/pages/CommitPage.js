import { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";
import NewStory from "../components/newStory";
const CommitPage = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2223/story/all")
      .then((res) => {
        // console.log(res.data);
        setStories(res.data);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  const addNewStory = (storyObj) => {
    setStories([storyObj].concat(stories));
  };

  let storiesList = null;
  const hasStories = stories.length !== 0;
  if (hasStories) {
    storiesList = stories.map((storyObj) => (
      <Card
        key={`Card_${storyObj._id}`}
        _id={storyObj._id}
        creator_name={storyObj.creator_name}
        content={storyObj.content}
        time={storyObj.date}
        creator_id={storyObj.creator_id}
        setStories={setStories}
      />
    ));
  } else {
    storiesList = <div>No stories!</div>;
  }
  return (
    <div className="container">
      <div style={{ marginBottom: "3rem" }}> {storiesList}</div>

      <div
        style={{
          backgroundColor: "#eeeeeeee",
          margin: "0.5rem",
        }}
      >
        <NewStory addNewStory={addNewStory} />
      </div>
    </div>
  );
};

export default CommitPage;
