// Import: Dependencies
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// Import: Styling
import "./index.scss";

// Import: Pages
import About from "./components/pages/About/About.component";
import Contact from "./components/pages/Contact/Contact.component";
import Home from "./components/pages/Home/Home.component";

// Import: UI
import Footer from "./components/UI/Footer/Footer.component";
import Header from "./components/UI/Header/Header.component";
import NavigationMenu from "./components/UI/NavigationMenu/NavigationMenu.component";

// Component: App
function App() {
  // State = isOpen
  const [isOpen, setIsOpen] = useState(false);

  // Render App code
  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavigationMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Switch>
        <Route exact path="/">
          <Home isOpen={isOpen} setIsOpen={setIsOpen} />
        </Route>
        <Route path="/about">
          <About isOpen={isOpen} />
        </Route>
        <Route path="/contact">
          <Contact isOpen={isOpen} />
        </Route>
      </Switch>
      <Footer isOpen={isOpen} />
    </div>
  );
}

// Export: App
export default App;
