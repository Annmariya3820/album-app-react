import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,changedata] =useState({"articles":[]})
    const FetchData=()=>{
      axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
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
    {data.articles.map(
      (value, index) => {
     return <tr>

      <td>{value.title}</td>
      <td>{value.publishedAt}</td>
      <td>{value.description}</td>
      
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
