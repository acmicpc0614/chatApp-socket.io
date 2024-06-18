import ColorPicker from "../components/roundbtn/ColorPicker";
import Review from "../components/roundbtn/Review";
import RoundBtn from "../components/roundbtn/RoundBtn";
import RoundBtnSpan from "../components/roundbtn/RoundBtnSpan";
import ToggleBtn from "../components/roundbtn/Togglebtn";
import PwdGenerator from "../components/testComp/PwdGenerator";
import TestComp from "../components/testComp/TestComp";

const TestPage = () => {
  return (
    <>
      <div
        className="container p-3"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {/* <TestComp /> */}
        {/* <RoundBtn /> */}
        {/* <RoundBtnSpan /> */}
        {/* <ToggleBtn /> */}
        {/* <Review /> */}
        {/* <ColorPicker /> */}
        <PwdGenerator />
      </div>
    </>
  );
};

export default TestPage;
