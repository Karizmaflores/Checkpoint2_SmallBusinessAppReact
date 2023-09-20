import {Provider} from 'react-redux'
import store from './redux/store';
import './App.css'
import Home from './containers/Home';
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>
      <Home />
    </Provider>
    </BrowserRouter>
  )
}

export default App

