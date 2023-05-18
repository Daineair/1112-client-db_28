import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SneakersProductStaticPage_28 from './pages/SneakersProductStaticPage_28'
import Shop2Page_28 from './pages/supabase/Shop2Page_28';

//arrow function
const App_28 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/static_28" element={<SneakersProductStaticPage_28 />} />
        <Route path='/supa_shop2_28' element={<Shop2Page_28 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App_28;
