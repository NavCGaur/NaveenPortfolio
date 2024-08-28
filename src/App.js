
import { BrowserRouter } from 'react-router-dom';


import './App.css';

import Header from './container/header/Header'
import Main from './container/main/Main'
import Skills from './container/skills/Skills.jsx'
import Projects from './container/projects/Projects.jsx';
import Contact from './container/contact/Contact.jsx';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
          <Header />
          <Main />
          <Skills />
          <Projects />
          <Contact />

      </div>
    </BrowserRouter>

  );
}

export default App;
