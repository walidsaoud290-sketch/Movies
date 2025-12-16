import Header from './Header/Header'
import { Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import { useState } from 'react'
const AppMovies = ({setIsFormValid}) => {
  return (
    <>
      <Header setIsFormValid={setIsFormValid}/>
      <Outlet />
    </>
  )
}

export default AppMovies