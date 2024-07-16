// import { updatePosts } from './axios';
// import axios from "axios"

// export const getAllPosts = async() => {
//     const res = await axios.get('http://localhost:9999/authors')
//     console.log(res)
//     if(res.status == 200) {
//         return res.data;
//     }else {
//         throw new Error("Failed to error")

//     }
// }

// export const createNewPosts = async(newPost: {} ) => {
//     const res = await axios.post("http://localhost:9999/authors", newPost, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     if(res.status == 201 ) {
//         return res.data;
//     }else {
//         throw new Error ("Failed to create new post")
//     }
// }

// // láy theo id
// export const deletePost = async(id:number) => {
//     const res = await axios.delete('http://localhost:9999/authors')
//     console.log(res)
//     if(res.status == 200) {
//         return res.data;
//     }else {
//         throw new Error("Failed to error")

//     }
// }

// //update

// export const updatePosts = async(updatePosts:(), id:number) => {
//     const res = await axios.patch('http://localhost:9999/authors', updatePosts,{
//         headers:{
//             'Content-Type':'application/json'
//         }
//     })
//     console.log(res)
//     if(res.status == 200) {
//         return res.data;
//     }else {
//         throw new Error("Failed to error")

//     }
// }


// // tạo API đăng nhập 

// export const login = async(email:string, pass:number)=>{
//     const res = await axios.get('')
// }