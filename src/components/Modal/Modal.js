const Modal = ({ setModalopen, setavatarID }) => {
  const data = [
    { img: require("../../data/avatars/man-1.png"), id: 1 },
    { img: require("../../data/avatars/man-2.png"), id: 2 },
    { img: require("../../data/avatars/man-3.png"), id: 3 },
    { img: require("../../data/avatars/man-4.png"), id: 4 },
    { img: require("../../data/avatars/man-5.png"), id: 5 },
    { img: require("../../data/avatars/man-6.png"), id: 6 },
    { img: require("../../data/avatars/man-7.png"), id: 7 },
    { img: require("../../data/avatars/man-8.png"), id: 8 },
    { img: require("../../data/avatars/man-9.png"), id: 9 },
    { img: require("../../data/avatars/man-10.png"), id: 10 },
    { img: require("../../data/avatars/man-11.png"), id: 11 },
    { img: require("../../data/avatars/man-12.png"), id: 12 },
    { img: require("../../data/avatars/man-13.png"), id: 13 },
    { img: require("../../data/avatars/man-14.png"), id: 14 },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          height: "100vh",
          backgroundColor: "#68686899",
          opacity: "1",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          position: "absolute",
        }}
        onClick={() => {
          setModalopen(false);
        }}
      >
        <div
          style={{
            width: "620px",
            padding: "3rem",
            backgroundColor: "#eeeeee",
            boxShadow: "rgba(0, 0, 240, 0.25) 0px 0px 100px 30px",
            borderRadius: "1rem",
            justifyContent: "center",
            minWidth: "620px",
          }}
        >
          <div>Select your Avatar</div>
          <div
            className="d-flex flex-wrap"
            style={{
              justifyContent: "space-between",
            }}
          >
            {data.map((item) => (
              <div key={item.id}>
                <img
                  src={item.img}
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "2px solid #aaaaaa",
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                  onClick={() => {
                    setavatarID(item.id);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
