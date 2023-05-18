import { useState } from "react";
import "./App.css";
import Alerts from "./componenets/Alerts";
// import About from "./components/About";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  //const[alert,setalert]=useState(null);
  /* const showAlert=(message,type)=>{
  setalert({
   message:message,
    type:type
  })
}*/

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181018";
      //showAlert("enable dark mode","sucess")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      //showAlert("enable light mode","sucess")
    }
  };
  return (
    <>
      <Navbar
        title="TextInfo"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alert={"gdfgdfghdfdf"} />
      <div className="container my-4 mx-10">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
