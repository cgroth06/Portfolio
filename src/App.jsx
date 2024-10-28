import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

// switch the contents of the section compoenent depending on the navigation clicked
//useState to switch and to keep track of the current section content
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
