import "../IndividualChatsSection/individualChat.css";
import React from "react";
import dot from "../logo/Dots.svg";
// import darkmode from "../logo/darkmode.svg";
import notification from "../logo/Notification.svg";
import profilepic from "../logo/Designer.svg";
import greendot from "../logo/greendot.svg";
// import chatwithuserprofile from "../profileimage/PI1.svg";
// import line from "../logo/Line 8444.svg";
// import Sharescreen from "../ChatActionButton/share share.svg";
// import Videocall from "../ChatActionButton/videocall.svg";
// import Audiocall from "../ChatActionButton/audiocall.svg";
import groupicon from "../individualchaticons/groupicon.svg";
import cameraFilter from "../TextBoxIcon/CameraFilter.svg";
import editPen from "../TextBoxIcon/EditPen.svg";
import emoji from "../TextBoxIcon/Emoji.svg";
import linkSvg from "../TextBoxIcon/LinkSVG.svg";
import mapLayers from "../TextBoxIcon/MapLayers.svg";
import sendArrow from "../TextBoxIcon/SendArrow.svg";
import nots from "../TextBoxIcon/Nots.svg";
// import groupiconBG from "../individualchaticons/BGforGroupName.svg";
// import chathistoryBG from "../individualchaticons/background.svg";

const IndividualChats = () => {
  return (
    <div className="topsection">
      <div className="toplayout">
        <div className="groupname">
          <div className="groupprofile">
            <img src={groupicon} />
          </div>
          <p className="groupnameTXT">Jio Meet 3.0</p>
        </div>
        <img className="threedot" src={dot} alt="Not avalable" />
        {/* <img className="darkmode" src={darkmode} alt="Not avalable" /> */}
        <img className="notification" src={notification} alt="Not avalable" />
        <img className="profilepic" src={profilepic} alt="Not avalable" />
        <img className="greendotcss" src={greendot} alt="Not avalable" />
      </div>
      <>
        <div>
          <div className="icsLine"></div>
          {/* <div className="chathistory">
            <img className="displayphoto" src={chatwithuserprofile} />
            <p className="profilename">Gaurav Duggal</p>
            <div className="infokeys">
              <p className="profile">Profile</p>
              <p className="documents">Documents</p>
              <p className="activity">Activity</p>
              <div className="verticalLine">
                <img className="verticalLinesvg" src={line} />
                <div className="actionbutton">
                  <div className="sharescreen">
                    <img src={Sharescreen} />
                  </div>
                  <div className="videocall">
                    <img src={Videocall} />
                  </div>
                  <div className="audiocall">
                    <img src={Audiocall} />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div>
            <div className="dateline1">
              <p className="date">1 February 2024</p>
            </div>
            <div className="ChatHistory">
              <div className="CH1">
                <p className="userchat">AD</p>
                <p className="ch">
                  Abhijeet Das
                  <p className="message1">
                    Need to brainstorm ideas around micro interactions and
                    engagement.
                  </p>
                </p>
              </div>
              <div className="messageReaction">
                <p>👍 1</p>
              </div>
              <div className="CH1">
                <p className="userchat2">SM</p>
                <p className="ch">
                  Sushmita Mandal
                  <p className="message1">I will create a thread for both.</p>
                </p>
              </div>
              <div className="CH1">
                <p className="userchat3">JM</p>
                <p className="ch">
                  Jinal Mehta
                  <p className="message1">Yes, okay!</p>
                </p>
              </div>
            </div>

            <div className="TextBox">
              <div className="inputfield">
                <input
                  className="IF"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Type a message here..."
                ></input>
              </div>
              <div className="textline"></div>
              <div className="ActionButton">
                <div className="TextFieldActionButton">
                  <img src={cameraFilter} />
                  <img src={editPen} />
                  <img src={linkSvg} />
                  <img src={nots} />
                  <img src={emoji} />
                  <img src={mapLayers} />
                </div>
                <div className="SendArrow">
                  <img src={sendArrow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default IndividualChats;
