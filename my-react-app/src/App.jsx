import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {
  // jsx has the capability of returning only a single enclosing tags 
  // we will use 'fragment' to solve this problem
  return (
    <>
      <Header></Header>
      <Food></Food>
      <Footer/>
    </>

  );

}

export default App
