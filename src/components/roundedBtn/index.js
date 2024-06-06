

const RoundedBtn = ({title, btnColor}) => {
  return <>
    <button className="btn m-2 btn-outline-success" 
      style={{
        background: `${btnColor}`, 
        color: "#9597A6",
        borderRadius: 15,
        border: "none"
      }}>
      {title}
    </button>
  </>
}

export default RoundedBtn;