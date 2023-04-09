import React from 'react'
import {users} from '../data/user';
// import images from '../images';





const UserProfile = () => {
    // const peopleProfile = users.filter((user) => user.name)
    
    const userDetails = users.map((user, index) => {
        return (
        <div className='profile-card'>
        <li key={user.id}>
           
        <img src={user.picture} alt="pic" /> 
        {user.id} <br/> 
       {user.title}.{user.firstName} {user.lastName} 
        </li>
        
          </div>
        )
    })
    

    return (
        <div className='profiles'>
         
            <ul>
                {userDetails}
            </ul>
          
        </div>
    )
}
export default UserProfile;

