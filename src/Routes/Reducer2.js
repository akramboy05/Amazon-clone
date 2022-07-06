export const initialState ={
    name:"John",
    sum:"",
    productAll:[]
}
const reducer =(state, action)=>{
    switch(action.type){
        case "ADD_SUM":
            return{
                ...state, 
                sum: action.sum
            }
            case "ADD_PRODUCTS":
                return{
                ...state, 
                productAll: action.product
                }
                default:
                    return state
    }
}