import { Wpm } from "./componentes/Wpm";
import HarryPotterProvider from "./context/HarryPotterProvider";

function App() {
  return (
    
    <HarryPotterProvider>
    <Wpm/>
    </HarryPotterProvider>
  );
}

export default App;
