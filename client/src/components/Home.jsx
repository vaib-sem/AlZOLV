import React from 'react'
import { Link } from "react-router-dom"

const Login = () =>{
  return(
      <div className=" w-1/2 bg-[#DBF4A7] hover:bg-[#C5DB96] flex justify-center rounded-lg">
          <Link to='/signup' className="text-center justify-items-center">
              <p className="p-4 text-center font-semibold text-lg text-[#4A4D6D]">REGISTER</p>
          </Link>
      </div>
     
  )
}
const Signup = () => {
  return (
      <div className=" w-1/2 bg-[#4A4D6D] hover:bg-[#424562] flex justify-center rounded-lg">
          <Link to='/signin' className="text-center justify-items-center" >
              <p  className="p-4 text-center font-normal text-lg text-[#bfdbf7]">LOGIN </p>
          </Link>
      </div>
  )
}
const Home = () => {
  return (
    <div className="pt-24 max-w-6xl flex mx-auto">
        <div className="w-2/3">
            <div className="font-bold text-7xl text-[#DBF4A7]">
                AID FOR
            </div>
            <div className=" font-bold text-7xl text-[#bfdbf7]">
                ALZIMERS PATIENTS
            </div>
            <p className="pt-6 pb-12 text-inter text-lg font-medium text-[#f7fded]">
                A aid for early alziemers patients, <br></br>Aids them in recognising the people around and gives location real time !
            </p>
            <Login></Login>
            <div className="p-1"></div>
            <Signup></Signup>
        </div>
      </div>
  )
}

export default Home