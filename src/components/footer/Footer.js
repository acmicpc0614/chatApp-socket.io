import flower from "../../data/flower.svg"

import flower2 from "../../data/flower2.svg"


const Footer = () => {
  return <>
    <div style={{flex:"1.4", textAlign:"left", marginTop:"5rem"}}>
      <label style={{fontSize:"1.2rem"}}><b>Saterday&nbsp;</b>February 20th</label>
      <div style={{display:"flex", alignContent:"center"}}><img src={flower}/><span>&nbsp;House sit</span></div>
      <div style={{display:"flex", alignContent:"center", paddingTop:"0.5rem"}}><img src={flower2}/><span>&nbsp;All day</span></div>
    </div>
  </>
}

export default Footer;