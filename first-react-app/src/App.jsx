import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';

function App() {
  return (
      // The empty tags are required ReactFragments
      <>
        <Header/>
        <Food/>
        <Food/>
        <Food/>
        <Footer/>
      </>
  );
}

export default App
