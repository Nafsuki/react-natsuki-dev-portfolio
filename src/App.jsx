
import './App.scss';
import Navbar from './components/Navbar';
import BgImg from './Bg-img.png';
import TopImg from './top-image.png';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-img-container">
        <img src={BgImg} alt="bg-img-forms"/>
      </div>
      <h1>Konnichiwa!</h1>
      <p>I'm Natsuki Yamaguchi - from Japan. <br />A Junior Front End Developer. <br />Design - for me - is "creating beauty" and coding is "making sence out of it". I strive for perfection in my work to bring joy and harmonie.</p>
      <div className="top-photo-container">
        <img src={TopImg} alt="natsuki-top-photo"/>
      </div>
    </div>
  );
}

export default App;
