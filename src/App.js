import logo from "./logo.svg";
import "./App.css";
import SideBarComponent from "./SideBar/SideBar";
import IndividualChats from "./IndividualChatsSection/individualChats";

function App() {
  return (
    <div className="maindiv">
      <SideBarComponent />
      <IndividualChats />
    </div>
  );
}

export default App;
