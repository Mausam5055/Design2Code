import Header from './components/Header'
import Hero from './components/Hero'
// import Insight from './components/Insight'
import Benefit from './components/Benefit'
import Footer from './components/Footer'
import Scroller from './components/Scroller'
import Included from './components/Included'
import Pack from './components/Pack'


function App() {

  return (
    <div className='overflow-hidden'>
    <Header />
    <Hero />
    {/* <Insight /> */}
    <Benefit />
    <Scroller />
    <Included />
    <Pack />
    <Footer />
    </div>
  )
}

export default App