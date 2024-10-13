
import {  GlobalContext } from "./contexts/GlobalContexts";
import AppRoutes from "./routes/Route";


function App() {
 
  
  return (
    <>
      <GlobalContext>
        <AppRoutes />
      </GlobalContext>
    </>
  );
}

export default App;
