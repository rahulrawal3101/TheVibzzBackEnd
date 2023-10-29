'use client'
import Header from '@/component/Header'
import axios from 'axios'
import React, { useEffect } from 'react'

const MainPage = () => {
  //Promises
  //  useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //   .then((abc)=>{console.log('I am in Then',abc.data)})
  //   .catch((err)=>{console.log('I m in Catch',err)})
  //  },[]);

  //Async Await
  // useEffect(async () => {

  //   try {
  //     const dd = await axios.get('https://jsonplaceholder.typicode.com/todos')
  //     console.log('i am in try catch in try',dd.data)
  //   } catch (er) {
  //     console.log('I am try catch in catch err : ', er)
  //   }

  // }, [])

  return (
    <>
      <Header />
      {/* <div style={{ marginTop: '110px' }}>Shivam</div> */}
    </>
  )
}



export default MainPage