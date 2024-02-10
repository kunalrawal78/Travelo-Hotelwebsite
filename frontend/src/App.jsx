
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'
import MyFooter from './components/Footer'
function App() {


  return (
    <Provider store={store}>
      <Navbar/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <MyFooter/>
    </Provider>
  )
}


export default App
