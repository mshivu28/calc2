import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './index.css';
const App = () => {
  const [cData,uData] = useState("");
  
   
  
  const btn_click=()=>{
    let name = document.getElementById('yVal').value;
    let pname = document.getElementById('pVal').value;
    console.log(name);
    if(name === ""){
     alert("Enter your name");
    }
    else if( pname === "")
    {
      alert("Enter your partner name");
    }else if( !isNaN(name) )
    {
      alert("numbers are not allowed");
    }
    else if( !isNaN(pname) )
    {
      alert("numbers are not allowed");
    }
    else
    {
    let data = Math.random()*100;
    let datas = Math.floor(data);
     uData(datas);
    }
  }
  
  

  return (
    <>
      <div className="bgimg" >
        <header>
          <div className="card w-50 m-auto text-center">
            <div className="card-header bg-danger text-white">
              Love Calculator
  </div>
            <div className="card-body">
              <form className="form-inline w-50 m-auto d-flex direction-row">
                <div className="form-group">
                  <input type="text" name="" className="form-control text-center " id="yVal" placeholder="Your Name" />
                </div>
                <div><span className="pl-4 pr-4">+</span></div>
                <div className="form-group">
                  <input type="text" name="" placeholder="Partner's Name" id="pVal" className="form-control text-center" />
                </div>
              </form>
              <br />
              <div className=" w-50 m-auto">
                <button className="btnimg" onClick={btn_click} style={{ width: '150px', fontWeight: 'bold' }}>Calculate</button>
              </div>
              <br />
              <div>

                <input placeholder="% will display here" value={cData}className="form-control text-center w-25 m-auto" />
              </div>
            </div>
            <div className="card-footer  bg-danger text-white">
              God Bless Your Relation </div>
          </div>
        </header>
      </div>
    </>
  );
}
export default App;