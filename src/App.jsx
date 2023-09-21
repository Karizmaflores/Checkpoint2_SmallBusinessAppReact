import {Provider} from 'react-redux'
import Navigation from './components/Navigation'
import store from './redux/store';
import './App.css'
import Home from './containers/Home';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'


function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Router />
      </BrowserRouter>
    </Provider>
    
  )
}

export default App

