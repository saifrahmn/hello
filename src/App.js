
import './App.css';
import img from './IMG_20211124_072046_256.jpg';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="icon">
          SR
          </div>
        <p>
          Hi, I am Saif Rahman
        </p>
        
        
          
          <img src={img} classname="img" />
        

        <div class="mid">
        Engineering - Student - Enthusatic
        </div>

        <div class="menu">
        <span class="blog">
            Blog
       </span>
       </div>
       

        
      </header>
    </div>
  );
}

export default App;
