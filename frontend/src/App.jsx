import Navbar from "./component/Navbar";
import Home from "./component/Home";

import EndingPage from "./component/EndingPage.jsx";
import BookNow from "./component/BookNow.jsx";

export default function App() {
  return (
    <div className="flex justify-center ">
      <div className="w-[1200px] ">
        <Home />
        <EndingPage />
        
      </div>
    </div>
  );
}
