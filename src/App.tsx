import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FlightInfo } from './components/FlightInfo';

const App = () => {
  return (
    <div className="w-screen h-screen bg-neutral-900 text-white">
      <Header />
      <FlightInfo />
      <Footer message="PLEASE DO NOT LEAVE BAGGAGE UNATTENDED." />
    </div>
  );
};

export default App;
