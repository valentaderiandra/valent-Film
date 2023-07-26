import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending'
import "./style/LandingPage.css"
import Superhero from './components/Superhero';

function App() {
  return (
    <div>
      {/*Intro Section*/}
      <div className="MyBG"> 
        <NavigationBar />
        <Intro />
      </div>
      {/*End of Intro*/}

      {/*Trending Section*/}
      <div className='Trending'>
        <Trending />
      </div>
      {/*End Trending Section*/}

      {/*Superhero Section*/}
      <div className='superhero'>
        <Superhero />
      </div>
      {/*End Superhero*/}
    </div>
  );
}

export default App;
