import React, {useState} from "react";
import logoWeb from './../img/adker.png'
import { Link } from 'react-router-dom';

const Navbar = (prop) => {
  const [counter, setCounter] = useState(0);
  const [Y_Visible, setY_Visible] = useState('overflow-y-hidden')

  const handleDropDown = () =>{
    let counterAdd = counter+1
    setCounter(counterAdd%2)
    setY_Visible(counter < 1 ? 'overflow-y-visible':'overflow-y-hidden')
    //
  }
  return (
    <>
      <nav className="w-full flex flex-wrap justify-between border bg-white p-2 shadow-md sticky top-0">
        <Link to="/">
          <div className="flex">
            <img
              className="mr-3 h-12 w-12"
              src={logoWeb}
              alt=""
            />
            <h1 className="my-auto text-2xl font-bold text-[#0c757d]">ADA KERJA</h1>
          </div>
        </Link>
        <div className="my-auto flex flex-wrap justify-between">
          <Link to="/home">
            <div className={ `${prop.link==='home'? 'mr-4 bg-green-50 p-2.5 font-medium' : ''} mr-4 p-2.5 hover:font-medium hover:bg-green-50`}>Home</div>
          </Link>
          <Link to="/lowongan-kerja">
            <div className={ `${prop.link==='loker'? 'mr-4 bg-green-50 p-2.5 font-medium' : ''} mr-4 p-2.5 hover:font-medium hover:bg-green-50`}>Lowongan</div>
          </Link>
          <Link to="/rekomendasi-kerja">
            <div className={ `${prop.link==='rekomendasi'? 'mr-4 bg-green-50 p-2.5 font-medium' : ''} mr-4 p-2.5 hover:font-medium hover:bg-green-50`}>Rekomendasi</div>
          </Link>
          <div onClick={handleDropDown} className={`mr-3 bg-white border text-center ${Y_Visible} h-9 hover:overflow-y-visible`}>
            <div className="text-green-600 font-semibold border-green-300 p-1 hover:bg-green-600 hover:text-white">
              Join Us
            </div>
            <Link to="/login">
              <div className="bg-white p-2"> Sign-up / Login</div>
            </Link>
            <Link to="/login">
              <div className="bg-white p-2">Pasang Lowongan</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar