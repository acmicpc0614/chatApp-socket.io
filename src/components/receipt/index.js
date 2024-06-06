import avatar from "../../data/dog-1.svg"
import RoundedBtn from "../roundedBtn";

const Receipt = () => {
  return <>
    <div className="" style={{
      backgroundColor: "#fff",
      border: "1px solid rgba(0, 0, 0, .125)",
      borderRadius: "0.5rem"}}>
      <div className="container flex flex-row">
        <div style={{flex:3}}>
          <h4>Dog walk for Ginger</h4>
        </div>
        <img style={{width: 36, marginRight: "2rem", marginTop: "1rem"}} src={avatar}/>
      </div>
      <div className="flex mt-1" style={{backgroundColor: "#F0F1F7", border: "1px solid #DADBE6"}}>
        <div style={{margin: "3rem"}}>
          <div className="flex flex-row flex-wrap align-items-center">
            <div className="" style={{flex: 2, fontSize: 13}}>
              <span>SERVICE TYPE</span>
            </div>
            
            <div style={{flex:4, textAlign:"start", marginLeft: "0rem"}}>
              <RoundedBtn title={"Dog walk"} btnColor={"#ffffff"} />
            </div>
            
            <div className="" style={{flex:1, textAlign:"right", marginRight: "0px"}}>
              <span>$15 / walk</span>
            </div>
          </div>

          <hr/>

          <div className="flex flex-row flex-wrap align-items-center">
            <div className="" style={{flex: 2, fontSize: 13}}>
              <span>SERVICE TIME</span>
            </div>
            
            <div style={{flex:4, textAlign:"start", marginLeft: "0rem"}}>
              <RoundedBtn title={"Mornings"} btnColor={"#ffffff"} />
              <RoundedBtn title={"Evenings"} btnColor={"#ffffff"} />
            </div>
            
            <div className="" style={{flex:1, textAlign:"right", marginRight: "0px"}}>
              <span>x 2</span>
            </div>
          </div>
          <hr/>

          <div className="flex flex-row flex-wrap align-items-center">
            <div className="" style={{flex: 2, fontSize: 13}}>
              <span>RECCURRING</span>
            </div>
            
            <div style={{flex:4, textAlign:"start", marginLeft: "0rem"}}>
              <RoundedBtn title={"M"} btnColor={"#ffffff"} />
              <RoundedBtn title={"T"} btnColor={"#ffffff"} />
              <RoundedBtn title={"W"} btnColor={"#ffffff"} />
              <RoundedBtn title={"Th"} btnColor={"#ffffff"} />
              <RoundedBtn title={"F"} btnColor={"#ffffff"} />
            </div>
            
            <div className="" style={{flex:1, textAlign:"right", marginRight: "0px"}}>
              <span>x 5</span>
            </div>
          </div>
          <hr/>

          <div className="flex flex-row flex-wrap align-items-center">
            <div className="" style={{flex: 2, fontSize: 13}}>
              <span>PAYMENT TYPE</span>
            </div>
            
            <div style={{flex:5, textAlign:"start"}}>
              <button className="btn btn-primary dropdown-toggle" style={{backgroundColor: "#ffffff", color: "#545871", width: "100%", textAlign:"start"}}>
                Mastercard ending 2431
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container flex flex-row" style={{justifyItems: "center", alignItems:"center"}}>
        <div style={{flex: 1}}>
          <h4>Total $150/week</h4>
        </div>
        <div style={{flex:1, textAlign:"right", marginRight: "2rem"}}>
          <span>Billed weekly on Sunday</span>
        </div>      
      </div>
    </div>
  </>
}

export default Receipt;