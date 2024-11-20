import './Layout.css'
import Caraousel from './components/Caraousel/Caraousel.jsx'
import CategoryFilters from './components/Category/CategoryFilters.jsx'
import Counter from './Counter.jsx'
import Head from './components/Header/Head.jsx'
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { useState } from 'react'

function Layout({children}) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="Layout">
      <Head />
      <CategoryFilters openSidebar={()=>{setIsSideBarOpen(true)}}/>
      {children}
      <Sidebar open={isSideBarOpen} onClose={()=> setIsSideBarOpen(false)}/>
    </div>
  )
}
export default Layout