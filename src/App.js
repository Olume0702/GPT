
import './App.css';
import {Footer,Blog,Possibility,Features,Header,WhatGPT3,} from './containers';
import {Brand,CTA,Navbar} from './components';
function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
     </div>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <CTA/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
