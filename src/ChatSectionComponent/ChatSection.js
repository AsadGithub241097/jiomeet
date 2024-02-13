import "../ChatSectionComponent/ChatSection.css";
import React from "react";
import Pin from "../logo/Pin.svg";
import p1 from "../profileimage/PI1.svg";
import p2 from "../profileimage/PI2.svg";
import p3 from "../profileimage/PI3.svg";
import p4 from "../profileimage/PI4.svg";
import p5 from "../profileimage/PI5.svg";
import p6 from "../profileimage/PI5.svg";
import p7 from "../profileimage/PI3.svg";
import ResentChatIcon from "../logo/ResentChatSVG.svg";
import filter from "../ChatSectionIcon/FilterSVG.svg";
import editsvg from "../ChatSectionIcon/editSVG.svg";
import resentChatArrow from "../ChatSectionIcon/DownArrow.svg";
import { useState } from "react";

const ChatSection = () => {
  const [flag2, setflag2] = useState(true);
  const onclickevent = (e) => {
    setflag2((prev) => !prev);
  };
  const UserProfileSrc = [p1, p2, p3, p4, p5, p6, p7];
  const UserName = [
    {
      id: 1,
      name: "Gaurav Duggal",
      time: "1:29 pm",
      message: "Hi,Good Morning",
      pinned: true,
    },
    {
      id: 2,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 3,
      name: "Asad Mulla",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 4,
      name: "mayank Sethi",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 5,
      name: "Kumari Poonam",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 6,
      name: "Ajit Wakale",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 7,
      name: "Anchal Gupta",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 8,
      name: "Ankit Srivastava",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 9,
      name: "Konda Reddy",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 10,
      name: "Shweta Patil",
      time: "1:29 pm",
      message: "Hi,Good Morning",
      pinned: true,
    },
    {
      id: 11,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 12,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
      pinned: true,
    },
    {
      id: 13,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 14,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 15,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 16,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 17,
      name: "Abhijeet Das",
      ime: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 18,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 19,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 20,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 21,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 22,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 23,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 24,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
    {
      id: 25,
      name: "Abhijeet Das",
      time: "1:29 pm",
      message: "Hi,Good Morning",
    },
  ];
  return (
    <div className="Chat_Section_Structure">
      <div className="abd">
        <div className="ChatTXT">
          <p className="Heading">Chats</p>
          <img className="filter" src={filter} alt="Not avalable" />
          <img className="edit" src={editsvg} alt="Not avalable" />
        </div>
        <div className="Line"></div>
        <div className="PinUser">
          <img className="PinSVG" src={Pin} alt="Not avalable" />
          <p className="PinTXT">Pinned Users</p>
        </div>
        <div className="PinUserProfile">
          {UserProfileSrc.map((url) => (
            <img src={url} />
          ))}
        </div>
        <div className="switchoption">
          <p className="DM">Direct Message</p>
          <p className="groups">Groups</p>
          <p className="archived">Archived</p>
        </div>
        <div className="pinedChats">
          <div className="pinIconTxt">
            <img
              title="Pinned"
              onClick={onclickevent}
              className="PinedChatDropdown"
              src={resentChatArrow}
            />
            <p className="pinned">Pinned</p>
          </div>
          {flag2 && (
            <div>
              {UserName.filter((i) => i.pinned).map((item) => {
                return (
                  <div className="hoverstatus">
                    <div className="messagetile">
                      <div className="InitialBG">
                        <div className="Initial">
                          {item.name
                            .split(" ")[0]
                            .toString()
                            .toUpperCase()
                            .substring(0, 1) +
                            "" +
                            item.name
                              .split(" ")[1]
                              .toString()
                              .toUpperCase()
                              .substring(0, 1)}
                        </div>
                      </div>
                      <div className="name">
                        {item.name}
                        <p className="message">{item.message}</p>
                      </div>
                      <div className="time">{item.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}{" "}
        </div>

        <div className="ResentChatSection">
          <img
            src={ResentChatIcon}
            alt="Not Avalable"
            height="16px"
            width="16px"
          ></img>
          <p className="RecentChats">Recent Chats</p>
        </div>

        <div className="listarray">
          {UserName.map((item) => {
            return (
              <div className="hoverstatus">
                <div className="messagetile">
                  <div className="InitialBG">
                    <div className="Initial">
                      {item.name
                        .split(" ")[0]
                        .toString()
                        .toUpperCase()
                        .substring(0, 1) +
                        "" +
                        item.name
                          .split(" ")[1]
                          .toString()
                          .toUpperCase()
                          .substring(0, 1)}
                    </div>
                  </div>
                  <div className="name">
                    {item.name}
                    <p className="message">{item.message}</p>
                  </div>
                  <div className="time">{item.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
