import TaskList from "../components/TaskList";
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
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <TestComp />
        {/* <RoundBtn /> */}
        {/* <RoundBtnSpan /> */}
        {/* <ToggleBtn /> */}
        {/* <Review /> */}
        {/* <ColorPicker /> */}
        {/* <PwdGenerator /> */}
        {/* <TaskList /> */}
      </div>
    </>
  );
};

export default TestPage;
