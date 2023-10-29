 'use client'
import { AllCat } from '@/constentmapdata/AllCategoriesData';
 import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

 export const initialState = {
   mainData : AllCat,
 }

// console.log(AllCat)



export const context = createContext();

const Global_Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    
    <context.Provider value={{...state,dispatch}}>{children}</context.Provider>
  )
}

export default Global_Context