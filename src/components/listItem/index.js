import flower from "../../data/flower.svg"

import flower2 from "../../data/flower2.svg"

const ListItem = ({bg_color, bd_color,title, subTitile, img}) => {
  return <>
        <>
        <div className="container flex-row space-between" 
          style={{
            paddingTop:"1rem", 
            paddingBottom:"1rem",
            textAlign:"center", 
            alignItems:"center", 
            backgroundColor:`${bg_color}`,
            border: `1px solid ${bd_color}`
          }}>
            <div style={{flex:"1.4", textAlign:"left"}}>
                <label style={{fontSize:"1.2rem"}}><b>{title}&nbsp;</b>{subTitile}</label>
                <div style={{display:"flex", alignContent:"center"}}><img src={flower}/><span>&nbsp;Dog walk</span></div>
                <div style={{display:"flex", alignContent:"center", paddingTop:"0.5rem"}}><img src={flower2}/><span>&nbsp;Morning</span></div>
            </div>
            <div style={{flex:"1", textAlign:"right", marginRight: "0"}}>
              <img src={img}/>
            </div>
        </div>
        </>
  </>
}

export default ListItem;