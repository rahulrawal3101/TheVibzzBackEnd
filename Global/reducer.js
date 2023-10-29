export const reducer =(state, action)=>{
switch (action.type) {
    case 'CREATE_CATEGORIES':
        return {...state,mainData:[...state.mainData,action.payload]};

     case 'DELETECATEGORIES' :
        return {...state,mainData:action.payload};  
     case 'SUBMIT_EDITDETAILS':
     return {...state,mainData:action.payload} 
     
    case'DELETEPRODUCTFROMCAT':
    return {...state,mainData:action.payload}
   
    case 'ADDNEWPRODUCT':
        return({...state,mainData:[...state.mainData,action.payload]})
        
    
        default:
            return { ...state };
}
}