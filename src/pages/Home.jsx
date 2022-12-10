import Card from '../components/Card'
import React, { useState , useEffect} from 'react';
import '../pages/Home.modules.css'
import axios from "axios";

const baseURL = "https://econowapi.onrender.com/funcionarios";

const Home = () => {
  
  const [dataUser, setDataUser] = useState([{}])
  

  React.useEffect(() => {
     axios.get(baseURL).then((response) => {
      setDataUser(response.data);
    });
  },[]);


  return (
    <div  className='mobile-div'>
      <div className='header'>
          <h1 className='tittle'>EcoDots Now</h1>
      </div>
      
      <div>
        <div className='container' >
          
          {dataUser.map(user=> (
          <div className='row'>
            <div className='col-lg-3 '>
              <div className='item'>
                <Card 
                    key={1}
                    idfuncionarios={user.idfuncionarios} 
                    nome={user.nome} 
                    cargo={user.cargo} 
                    status={user.status} 
                    imagem={user.image}>
                </Card>
            </div>
        </div>
      </div>
          ))}
        
  
  </div>
      </div>
     
    
    </div>
  )
}

export default Home
