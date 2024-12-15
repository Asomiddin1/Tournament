import { useState } from "react";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import CreateTouner from "./components/createTouner/createTouner";


function App() {
  const [create , setCreate] = useState(false)
  return (
    <div className="">
       <Navbar />
       <div className="w-full">
        {create ?   <Main /> : <CreateTouner  setCreate={setCreate}/>}
       </div>
       <Footer />
    </div>
  );
}

export default App;
