const Notification = ({ type, title }) => {
  const INFO = 1;
  const SUCCESS = 2;
  const WARNNING = 3;
  const ERROR = 4;

  const colors = ["white", "blue", "green", "orange", "red"];

  return (
    <>
      <div
        style={{
          zIndex: "9999",
          width: "200px",
          height: "60px",
          color: "#fff",
          position: "absolute",
          backgroundColor: `${colors[SUCCESS]}`,
          display: "3s",
          opacity: "0.8",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <div className="	fa fa-warning" />
        {title}
      </div>
    </>
  );
};

export default Notification;
