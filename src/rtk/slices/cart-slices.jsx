import { createSlice } from "@reduxjs/toolkit";


export const cartSlice=createSlice({
  initialState:[],
  name:'cartSlice',
  reducers:{
    addproduct:(state,action)=>{
      const founded=state.find((product)=>product.id===action.payload.id)
      if(founded){
        founded.quntity+=1;
      }else{
        const proColn={...action.payload , quntity:1}
        state.push(proColn);
      }
        
    },
    deleteproduct:(state,action)=>{
    return state.filter((product)=>{
      return(
        product.id !==action.payload.id
      )
    })
    },
    clearcart:(state,action)=>{
      return [];
    }
  }
})

export const{addproduct,deleteproduct,clearcart}=cartSlice.actions;
export default cartSlice.reducer;