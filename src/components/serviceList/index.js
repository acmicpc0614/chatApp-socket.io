import ListItem from "../listItem";
import img_1 from "../../data/imgItem1.svg";
import img_2 from "../../data/imgItem2.svg"
import img_3 from "../../data/imgItem3.svg"

const ServiceList = () => {
  return <>
    <div className="container" 
      style={{
        backgroundColor:"#ffffff", 
        borderColor: "#DADBE6",
        padding:"1rem 3rem 3rem"}}>
      <br />
      <label>DEFAULT</label>
        <ListItem
        bg_color="#F7ECEB"
        bd_color="#E6DBDA"
        title={"Friday"} 
        subTitile={"February 19th"} 
        img={img_1} />
      <br />
      <label>HOVER</label>
      <ListItem
          bg_color="#F0F1F7" 
          bd_color="#DADBE6"
          title={"Thursday"} 
          subTitile={"February 18th"} 
          img={img_2} />
      <br />
      <label>SELECTED</label>
      <ListItem
          bg_color="#ffffff"
          bd_color="#DADBE6"
          title={"Wednesday"} 
          subTitile={"February 17th"} 
          img={img_3} />
    </div>
  </>
}

export default ServiceList;