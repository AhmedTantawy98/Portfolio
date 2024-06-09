/* eslint-disable jsx-a11y/anchor-is-valid */
import Cards from './components/cards/Cards';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header';
import MainHeader from './components/main/MainHeader';
import Project from './components/projects/Project.jsx';

function App() {
  return (
    <div className="App">
      <div className="scroll-button"><a href="#" className="text-white">^</a></div>
      <Header/>
      <MainHeader/>
      <Cards/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
