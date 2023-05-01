import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from "../components/Footer/Footer";
import MenuEditor from '../components/MenuEditor/MenuEditor';

function MenuEditorPage() {
    return ( <>
        <nav>
          <Navbar/>  
        </nav>
        <div className="container-fluid d-flex 3fr 6fr p-6">
          <Sidebar className="bg-light"/>
          <div className="container menu-editor d-flex justify-content-between p-4">
            <MenuEditor/>
          </div>
        </div>
        <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
          <Footer/>
        </footer>
        </>
      )
    }

export default MenuEditorPage