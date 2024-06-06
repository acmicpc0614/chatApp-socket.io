import female from "../../data/femail.svg";
import speed from "../../data/speed.svg";


const ServiceTable = () => {
  return <>
    <div className="m-3" style={{alignItems:"center"}}>
     <table>
      <tbody>
      <tr style={{padding:"0px"}}>
          <td width={"25%"} style={{padding:"10px", textAlign:"center", borderBottomColor:"transparent"}}><img src={female}/>
          </td>
          <td width={"25%"} style={{padding:"10px", textAlign:"center", borderBottomColor:"transparent"}}>8
          </td>
          <td width={"25%"} style={{padding:"10px", textAlign:"center", borderBottomColor:"transparent"}}><img src={speed}/>
          </td>
          <td width={"25%"} style={{padding:"10px", textAlign:"center", borderBottomColor:"transparent", fontSize: "24px"}}>50-100
          </td>
      </tr>
      <tr>
          <td style={{ textAlign:"center"}}>
          <label style={{marginBottom :"0px", textAlign:"center"}}>FEMALE</label></td>
          <td style={{ textAlign:"center"}}>
          <label style={{marginBottom :"0px", textAlign:"center"}}>YEARS OLD</label></td>
          <td style={{ textAlign:"center"}}>
          <label style={{marginBottom :"0px"}}>SPAYED</label></td>
          <td style={{ textAlign:"center"}}>   
          <label style={{marginBottom :"0px"}}>POUNDS</label></td>
      </tr>
      </tbody>
    </table> 
      {/* <ul className="list-group list-group-horizontal">
        <li className="list-group-item"><img src={female}/><label style={{marginBottom :"0px", textAlign:"center"}}>FEMALE</label></li>
        <li className="list-group-item">Second item</li>
        <li className="list-group-item">Third item</li>
        <li className="list-group-item">Fourth item</li>
      </ul> */}
    </div>
  </>
}

export default ServiceTable;