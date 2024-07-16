
import 'bootstrap/dist/css/bootstrap.min.css';
import { store, StoreInterface } from './store';
import {Table} from'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { act_decrement_n, act_increment_n } from './store/action';
import { decreament, increament, increament_number, reset } from './store/action/countAction';
// import { TypeName } from './util';

function App() {
                // bai 1
const infoUser = useSelector( (state : StoreInterface) => state.userStore )
console.log(infoUser)

const profile = useSelector( (state : StoreInterface) => state.profileStore )
console.log(profile)
const count = useSelector( (state: StoreInterface)=> state.countStore )

                // bài tăng giảm
// const dispatch= useDispatch();

// const handleIncrea = ()=>{
//   dispatch(increament());
// }

// const handleIncreaNumber = ()=>{
//   dispatch(increament_number(10));
// }

// const handleReset = ()=>{
//   dispatch(reset());
// }

// const handleDecrement = ()=>{
//   dispatch(decreament());
// }
// console.log(count)



  return (
    
    <>
    {/* bài tăng giảm
    <p>{count}</p>
    <button onClick={handleIncrea}>+1</button>
    <button onClick={handleIncreaNumber}>+10</button>
    <button onClick={handleReset}>0</button>
    <button onClick={handleDecrement}>-1</button> */}

    <h3>Bai 1</h3>
    <p>Id: {profile.id}</p>
    <p>Name: {profile.name}</p>
    <p>Date: {profile.date}</p>
    <p>Address: {profile.address}</p>
    <h3>Bai 2</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
      {infoUser.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.date}</td>
                        <td>{user.address}</td>
                    </tr>
                ))}
      </tbody>
    </Table>

    </>
  )
}

export default App;