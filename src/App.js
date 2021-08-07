import { useState,useEffect } from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import {Products, Navbar} from './components'
import {commerce} from './lib/commerce'
function App() {
  const [products, setProducts]= useState([])
  const fetchProducts = async()=>{
    const {data} = await commerce.products.list()
     console.log(data)
    setProducts(data.map(
      ({id, name, description , media:{source} , price:{formatted_with_symbol}} ) =>(
        {id, name, description, source,price:formatted_with_symbol}
      )));
  } 
  useEffect(()=>{
     fetchProducts()
  },[])

  console.log(products)
  
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {<Navbar/>}
          <Products products={products}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
