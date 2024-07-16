interface IUser{
    id:number,
    name:string,
    gender:string,
    date: string,
    address:string
}

export const profileReducer = (state : IUser = {
    id:1,
    name:"Thai Nhu Ngoc",
    gender:"Nu",
    date:"08/10/2005",
    address:"abc",
}, action :{
    type:string, payload: IUser
} ) =>{
    switch(action.type){
        
        default:
            return state
    }
}