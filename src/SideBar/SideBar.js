import "./SideBar.css";
import jiocam from "../logo/Icon.svg";
import chats from "../SideBarIcons/ChatsIcon.svg";
import { useState } from "react";
import ChatSection from "../ChatSectionComponent/ChatSection";
import VoiceCall from "../SideBarIcons/VoiceCallSVG.svg";
import SideBarCalender from "../SideBarIcons/SideBarCalender.svg";
import Widgets from "../SideBarIcons/widgets.svg";
import hash from "../SideBarIcons/Hash.svg";
import Switcher from "../SideBarIcons/SwitcherSVG.svg";
import moon from "../SideBarIcons/Moon.svg";
const SideBarComponent = () => {
  const [flag, setflag] = useState(true);

  const onclickevent = (e) => {
    setflag((prev) => !prev);

    console.log(e.target);

    e.target.style.filter =
      " brightness(0) saturate(100%) invert(100%) sepia(93%) saturate(2%) hue-rotate(150deg) brightness(107%) contrast(101%)";
  };
  return (
    <div className="sb">
      <div className="side-bar">
        <div>
          <div className="BG">
            <img className="iconcss" src={jiocam} alt="Not avalable" />
          </div>
          <div className="Chat">
            <img
              onClick={onclickevent}
              className="ChatIcon"
              src={chats}
              alt="not avalable"
            />
          </div>
          <div>
            <img className="SideBarCalender" src={SideBarCalender} />
          </div>
          <div>
            <img className="voiceCall" src={VoiceCall} alt="not avalable" />
          </div>
          <div>
            <img className="widgets" src={Widgets} alt="Not Avalable" />
          </div>
          <div>
            <img className="HashSVG" src={hash} alt="Not avlable" />
          </div>
          <div className="line"></div>
          <div>
            <img className="Switcher" src={Switcher} />
          </div>
        </div>
        <div className="DarkmodeToLightmode">
          <div className="toggle">
            <img className="moonCSS" src={moon} />
          </div>
          <div className="profileDIV">
            <p className="am">AM</p>
          </div>
        </div>
      </div>
      <ChatSection />
    </div>
  );
};

export default SideBarComponent;
