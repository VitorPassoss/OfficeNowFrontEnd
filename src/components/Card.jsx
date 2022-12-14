
import React, { useState } from 'react';
import "../components/Card.modules.css"
import axios from "axios";



const Card = ({idfuncionarios,nome,cargo,status,imagem}) => {

  const [useToggle, setUseToggle] = useState(status)
  const [useFuncionario, setFuncionario] = useState(idfuncionarios)
  const [useNomeUser, setNomeUser] = useState(nome)
  const [useCargoUser, setcargoUser] = useState(cargo)
  const [useImageuser, setimageuser] = useState(imagem)

function  enviarStatus() {
     
     const data = {
      status: status,
      idfuncionarios: idfuncionarios
    };

    axios.post("https://econowapi.onrender.com/funcionarios", data)
    .then((response) => {
      console.log(response)       
    })
    .catch(err => console.log(err))
  }


function Send(){
    enviarStatus()
    window.location.reload()
  }

  return (
   
        <div className={`cards ${status == "ON" ? 'green' : 'off'}`}>

          {status == "OFF" ? <div className='icon'>
                <img className='icon-img' src="https://cdn-icons-png.flaticon.com/512/1826/1826064.png" alt="" />
            </div>  : ''}
            
            <div >
                  <img  
                  className='perfil' 
                  src={imagem} 
                   />
            </div>
            <div className='descricao'>
                  <div className='nome'>
                      {nome}
                  </div>
                  <div className='cargo'>
                      {cargo}
                  </div>
                  <div className='status'>
                     {status}
                  </div>
            </div>
            <button className={`btn btn-success ${status == "ON" && 'btn btn-green'}`}  onClick={Send} >  
                  <span>alterar</span> 
            </button>
        </div>
   

  )
}

export default Card
