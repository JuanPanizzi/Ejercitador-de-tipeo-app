import { useContext } from "react";
import HarryPotterProvider, { HarryPotterContext } from "./context/HarryPotterProvider";
import { Main } from "./componentes/Main";

function App() {

  const {objetoHechizos, personajes, libros } = useContext(HarryPotterContext)

  return (
    
    <HarryPotterProvider>
      <Main/>
    </HarryPotterProvider>
  );
}

export default App;
