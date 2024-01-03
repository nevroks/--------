import './basicStyles/reset.css'
import './basicStyles/App.css'
import MyHeader from "./UI/Components/header/MyHeader.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.jsx";
import Footer from "./UI/Components/footer/Footer.jsx";
import DiselOilPage from "./pages/diselOilPage/DiselOilPage.jsx";
import MiniAzsPage from "./pages/miniAzsPage/MiniAzsPage.jsx";
import FurnaceOilPage from "./pages/furnaceOilPage/furnaceOilPage.jsx";
import ShipOilPage from "./pages/shipOilPage/ShipOilPage.jsx";
import ContactPage from "./pages/contactPage/ContactPage.jsx";
import BlogPage from "./pages/blogPage/BlogPage.jsx";

function App() {

  return (
      <>
          <MyHeader/>
          <BrowserRouter>
                  <Routes>
                      <Route path={'/'} element={<MainPage/>}/>
                      <Route path={'/diselOil'} element={<DiselOilPage/>}/>
                      <Route path={'/miniAzs'} element={<MiniAzsPage/>}/>
                      <Route path={'/furnaceOil'} element={<FurnaceOilPage/>}/>
                      <Route path={'/shipOil'} element={<ShipOilPage/>}/>
                      <Route path={'/contact'} element={<ContactPage/>}/>
                      <Route path={'/blog'} element={<BlogPage/>}/>
                  </Routes>
          </BrowserRouter>
          <Footer/>
      </>

  )
}

export default App
