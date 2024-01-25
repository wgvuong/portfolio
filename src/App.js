import Navbar from "./components/navbar/navbar"; // this is fine, for some reason shows as error but no issue
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
