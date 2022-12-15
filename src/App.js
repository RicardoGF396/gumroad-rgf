import './App.css';
import AmountIncome from './components/AmountIncome';
import Discover from './components/discover/Discover';
import Footer from './components/Footer';
import GreatIdeas from './components/GreatIdeas';
import Header from './components/Header';
import Hero from './components/Hero';
import MakeOwn from './components/MakeOwn';
import SellAnyone from './components/SellAnyone';
import SellAnywhere from './components/SellAnywhere';
import SellingThings from './components/SellingThings';
import Share from './components/Share';
import SmallBits from './components/SmallBits';
import Sponsor from './components/Sponsor';
import StartFree from './components/StartFree';
import T1 from './components/Testimonials/T1';
import T2 from './components/Testimonials/T2';
import T3 from './components/Testimonials/T3';
import University from './components/University';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Discover/>
      <GreatIdeas/>
      <SmallBits/>
      <MakeOwn/>
      <SellingThings/>
      <T1/>
      <SellAnyone/>
      <T2/>
      <SellAnywhere/>
      <T3/>
      <AmountIncome/>
      <StartFree/>
      <University/>
      <Sponsor/>
      <Share/>
      <Footer/>
    </div>
  );
}

export default App;
