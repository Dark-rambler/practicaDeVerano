import React from "react";
import "../../styles/hotels/Hotels.css"
import Modal from "../modal";
function Hotels(){

   /* const URL="http://localhost:5000/trabajoverano-41581/us-central1/app/api/hotel"
    fetch(URL)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
*/

    return(
        <div className="">
            {/*<div className="text-center bg-secondary text-light p-4">
                <h2>Hotels Available</h2>
                    

            </div>
            */
            }
            <nav className="navbar text-center bg-dark bg-opacity- text-light p-4 ">
            <div className="container-fluid">
             <h2>Hotels Available</h2>
             <button className="btn btn-success border border-success border-3" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Hotel &nbsp; 
                <i class="fa-solid fa-plus"> </i> 
             </button>
          </div>
        </nav>

       <Modal register={true} />

        </div>
        
    )
}

export default Hotels;