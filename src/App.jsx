import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="sections__body">
        <Hero />
        <Main />
        <Footer />
      </section>
    </div>
  )
}

export default App
