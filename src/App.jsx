import {Provider} from 'react-redux'
import Navigation from './components/Navigation'
import store from './redux/store';
import './App.css'
import Home from './containers/Home';
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>
      <Navigation />
      <Home />
    </Provider>
    </BrowserRouter>
  )
}

export default App

