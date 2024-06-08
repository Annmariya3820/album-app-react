import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,changedata] =useState([])
    const FetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/albums").then(
        (responce)=>{
          console.log(responce.data)
          changedata(responce.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{FetchData()},[])
  return (
    <div>
        <Navbar/>
       <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">User Id</th>
      <th scope="col">Id</th>
      <th scope="col">title</th>
      
    </tr>
  </thead>
  <tbody>
    {data.map(
      (value, index) => {
     return <tr>

      <td>{value.userId}</td>
      <td>{value.id}</td>
      <td>{value.title}</td>
      
    </tr>
      }
    )
}
   
  </tbody>
</table>  
    </div>
    </div>
    </div>
    </div>
  )
}

export default View
