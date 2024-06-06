import Ginger from "../components/ginger";
import Profile from "../components/profile";
import Quote from "../components/quote";
import ServiceList from "../components/serviceList";
import ServiceQuote from "../components/serviceQuote";
import avatar1 from "../data/quoteMark.svg";
import avatar2 from "../data/position.svg";

import pen from "../data/pen.svg";
import chat from "../data/message.svg";
import Sitter from "../components/sitter";
import EmptySitter from "../components/emptySitter";
import ListItem from "../components/listItem";
import Footer from "../components/footer/Footer";
import Location from "../components/location";



const Home = () => {
  return <div className="container" style={{marginTop: "3rem"}}>
    <div className="flex-row space-between">
      <div style={{flex:1, padding: "2rem"}}>
          <Ginger />
          <div className="stateTitle"><b>SERVICE LIST ITEM</b></div>
          <ServiceList />
          <Footer />

        </div>
        
        <div style={{flex:1, padding: "2rem"}}>
        <div className="headTitle"><b>PET PROFILE CONDENSED</b></div>
        
          <Profile />

          <div className="stateTitle"><b>SERVICE QUOTE</b></div>
          <ServiceQuote />


          <div className="stateTitle"><b>SERVICE ADDRESS</b></div>
          <Quote 
            avatar={avatar1} 
            text="Please be sure to give her the antibiotics, they’re on the kitchen counter… Read more" 
            btnAvatar={chat}
            btnText="Chat"
            />

          <div className="stateTitle"><b>SITTER EMPTY STATE</b></div>
          <Quote 
            avatar={avatar2} 
            text="123 Fluffypants Lane
            Pawtown, FL 32789
            123-468-8901" 
            btnAvatar={pen}
            btnText="Edit"
            />

          <div className="stateTitle"><b>CHECK IN, LOCATION, ACTIVITY</b></div>            
          <Location />

          <div className="stateTitle"><b>SITTER PROFILE</b></div>
          <Sitter />

          <div className="stateTitle"><b>SITTER EMPTY STATE</b></div>
          <EmptySitter />
        </div>
    </div>

  </div>
};

export default Home;