import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import"../styles/modal.css"
function Modal({register, title, text}){
/*  useEffect(()=>{
    setRegistrar(true);
    setInternText(text);
    setInternTitle(title);
  },[register])*/
  const URL="http://localhost:5000/trabajoverano-41581/us-central1/app/api/hotel"
  const [registrar, setRegistrar]=useState(register);
  const [internText, setInternText]=useState(text);
  const [internTitle, setInternTitle]=useState(title);
  const [name, setName]=useState("");
  const [price, setPrice]=useState("");
  const [quality, setQuality]=useState("");
  const [id,setId]=useState(0);


    const obtenerId=(e)=>{
      setName(e.target.value)
      try {
        fetch(URL)
        .then((response)=>response.json())
        .then((data)=>{if(data.lenght==0){
          setId("1");
        }
        data.map(dato=> dato.id>id?setId(dato.id):setId(parseInt(dato.id)+1))
      })

      } catch (error) {
        console.log(error)
      }
    }
   // obtenerId()
   console.log(id)

    const enviar= async()=>{
      
     try {
        const response= await fetch(URL,{
          method:'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            Id: id,
            Name: name,
            Price: price,
            Quality: quality
          })
           }
        )
        return response;
     } catch (error) {
      
     }  
    }


    return(<div className="  modal  " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="   modal-dialog modal-dialog-centered ">
          { registrar?  <div className="  bg-secondary py-4 pe-2 ps-5 rounded ">
          <div className="modal-content bg-transparent border-0">
           <form className=" d-grid col pe-5  ">
                <label className="row-sm-12  my-3 text-light fs-5 " htmlFor="Name">Name: <input type="text" name="Name" className="ps-2 py-1 border-0 rounded mt-1 ms-sm-2 ms-lg-1 w-lg-75" onChange={e=>{obtenerId(e)}} /></label>
                <label className=" row-sm-12 my-3 text-light fs-5  " htmlFor="Price">Price:  <input name="Price" type="number"className="ps-2 py-1  border-0 rounded ms-sm-3 ms-lg-3 ms-md-3 " onChange={e=>{setPrice(e.target.value)}}  /></label>
                <label  className=" row-sm-12 my-3 text-light fs-5 " htmlFor="Quality">Quality: <input name="Quality" type="text" className="ps-2 py-1  border-0 rounded mt-1" onChange={e=>{setQuality(e.target.value)}}  /></label>
            </form>
        <div className="row">
        <input type="submit" onClick={()=>{enviar()}} className=" d-grid col ms-1 w-sm-100 mt-4 fs-5  btn btn-success " data-bs-dismiss="modal" value={"Add"} />
        <input type="submit" onClick={()=>{setRegistrar(false); setInternText("cancelado"); setInternTitle("Cancelado")   }} className="d-grid col ms-5 mt-4 w-sm-100 me-5 fs-5  btn btn-success"  value={"Cancel"} />

        </div>
           </div>
          </div>

          :
          <div className="modal-content bg-secondary w-75 ">
             <button type="button" class="btn-close ms-auto pt-3 pe-3  " onClick={()=>{setRegistrar(true)}} data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="ms-auto me-auto modal-header border-0">
        <h1 class=" text-center fs-5" id="exampleModalLabel">{internTitle}</h1>
       
      </div>
      
      <div class="modal-body text-center">
        {internText}
      </div>
          </div>
          }
        </div>
        
    </div>)

}

export default Modal;