import { useState } from "react";
import avatar from "../../data/chatImg.svg";
import axios from "axios";

const SingleStory = (props) => {
  const btnDelonClick = (id) => {
    const body = { id: id };
    axios
      .post("http://localhost:2223/story/deleteOne", body)
      .then((res) => {
        console.log("deleted");
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    axios
      .get("http://localhost:2223/story/all")
      .then((res) => {
        // console.log(res.data);
        props.setStories(res.data);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  };

  return (
    <div className="container d-flex flex-col m-2">
      <div className="containr">
        <img
          src={avatar}
          style={{
            border: "1px solid #9095A4",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="container">
        <div
          className="u-bold"
          style={{
            color: "#9095A4",
            fontSize: "10px",
          }}
        >
          {props.creator_name}, {props.time}
        </div>
        <div
          className="Card-story "
          style={{
            backgroundColor: "#8472FC",
            color: "#ffffff",
            borderRadius: "0px 30px 8px 50px",
            width: "fit-content",
            paddingBottom: "10px",
            paddingTop: "10px",
            paddingRight: "30px",
            paddingLeft: "30px",
          }}
        >
          <div className="Card-storyContent">{props.content}😀</div>
        </div>
      </div>
      <span
        className="fa fa-trash Card-btnDel"
        onClick={() => {
          btnDelonClick(props._id);
          // console.log("clicked, ", props._id);
        }}
      ></span>
    </div>
  );
};

export default SingleStory;
