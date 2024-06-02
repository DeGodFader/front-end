import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './Screens/Home/HomePage'
import SingleMovie from './Screens/Single/SingleMovie';
import SingleShow from './Screens/Single/SingleShow';
import Profile from './Screens/Profile/Profile';
import Searcher from './Screens/Search/Searcher';


const App= ()=>{
    useEffect(()=>{
      
    },[])
    return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:id/:result?' element={<SingleMovie />} />
          <Route path='/tv_show/:id/:result?' element={<SingleShow />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/search' element={<Searcher />} />
        </Routes>
      </Router>
    )
}

export default App