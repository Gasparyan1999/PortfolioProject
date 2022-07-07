import React from 'react'
import { useSelector} from 'react-redux';
export default function Footer() {

  const text=useSelector((state:any)=>state.lang)
  return (
    <div className='footer' id='footer'>
        <div className='infoOne'>
            <div  className='footTextOne'><p>gasparyan.george1999@gmail.com</p><p>+374-43-39-49-99</p></div>
            <div>
            <p><a  target="_blank" href='https://github.com/Gasparyan1999/PortfolioProject.git'>This project in Git</a></p>
            <p><a  target="_blank" href='https://www.linkedin.com/in/gasparyan-'>Linkedin</a></p>
            </div>
        </div>
        <div className='infoTwo'><p>{text.overText}</p></div>
    </div>
  )
}
