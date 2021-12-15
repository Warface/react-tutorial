import React from 'react'
import './listUsers.css'
import { useParams, useNavigate } from 'react-router-dom';
import userJson from './users.json'


function ListUsers() {

    const max = 10;
    const navigate = useNavigate();
    let newLimit = max;

    const maxUser = () => {
        let { limit } = useParams();
        
        if (limit) {
            newLimit = limit;
            return parseInt(limit);
        }else{
            return max;
        }
    }

    const listUser = userJson.results.slice(0, maxUser()).map((user, index) => {
        return (
            <div className="user-card" key={index}>
                <div className="thumbnail"><img src={user.picture.large} alt=""/></div>
                <div className="name">{user.name.first} {user.name.last}</div>
                <div className="age">{user.dob.age} yo.</div>
                <div className="email"><a href={"mailto:" + user.email}>{user.email}</a></div>
            </div>
        )
    })

    const changeMax = (e) => {
        newLimit = e.target.value;
        //Delay to avoid the page to reload
        setTimeout(() => {
            navigate(`/listusers/${newLimit}`);
        }, 500);
    }

    return (
        <div>
            <h1>List of users</h1>
            Change the number of users to show: <input className="userMax" maxLength="999" max="999" defaultValue={newLimit} type="number" onChange={changeMax} />
            <div className="list-users">
                {listUser}
            </div>
        </div>
    )
}

export default ListUsers
