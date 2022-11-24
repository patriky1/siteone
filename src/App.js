
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from "./componentes/navbar/navbar";
import Grid from "./componentes/grid/grid";
import Grid2 from "./componentes/grid2/grid2";

function App() {
  return (
  <section className='bg'>
    <section > 
      <Navbar/>
      <Grid/>
      <Grid2/>
    </section>
    </section>
  );
}

export default App;
