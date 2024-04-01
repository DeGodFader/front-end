import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './Screens/Home/HomePage'
import SingleMovie from './Screens/Single/SingleMovie';
import SingleShow from './Screens/Single/SingleShow';


const App= ()=>{
    useEffect(()=>{
      
    },[])
    return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='/tv_show/:id' element={<SingleShow />} />
        </Routes>
      </Router>
    )
}

export default App