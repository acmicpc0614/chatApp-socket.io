import ColorPicker from "../components/roundbtn/ColorPicker";
import Review from "../components/roundbtn/Review";
import RoundBtn from "../components/roundbtn/RoundBtn";
import RoundBtnSpan from "../components/roundbtn/RoundBtnSpan";
import ToggleBtn from "../components/roundbtn/Togglebtn";
import TestComp from "../components/testComp/TestComp";

const TestPage = () => {
  return (
    <>
      <div
        style={{
          color: "#000000",
          fontSize: "36px",
          margin: "1rem",
        }}
      >
        This is Test Page.
      </div>
      <div className="container p-3">
        <TestComp />
        {/* <RoundBtn /> */}
        {/* <RoundBtnSpan /> */}
        {/* <ToggleBtn />  */}
        {/* <Review />
        <ColorPicker /> */}
      </div>
    </>
  );
};

export default TestPage;
