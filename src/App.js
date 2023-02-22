import './assets/css/App.css';
import Router from './Router'

/* 
function presentacion(grupos, año) {
  const presentacion = <div>
    <h2>Desarrollo de aplicaciones WEB, {grupos} <br /></h2>
    <h3>Formador: Ivan Castro Ruiz</h3>
    <h4> {año} </h4>
  </div>
  return presentacion;
}; */
// un componenete puede se runa función y una clase
const App = () => {
  //const grupos = '53843'

  return (
    //Lo que esta escrito aqui no es HTML es JSX (XML)
    <div className="App">
            <Router/>
      </div>
  );
}

export default App;
