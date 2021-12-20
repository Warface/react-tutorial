import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import userJson from './users.json'; // Get from a local file


function ListUsers() {

    const max = userJson.info.results;
    const navigate = useNavigate();
    let [newLimit, setNewLimit] = useState(max);
    let sectionTitle = "List users";

    //If you want to get from an URL
    //let [users, setUsers] = useState([]);

    /* useEffect (() => {
        fetch(`https://randomuser.me/api/?results=${newLimit}`)
            .then((response) => response.json())
            .then((res) => {
                setUsers( res.results );
            });
    }, [newLimit]); */


    const maxUser = () => {
        let { limit } = useParams();
        
        if (limit) {
            newLimit = limit;
            return parseInt(limit);
        }else{
            return max;
        }
    }

    const card = (user, index) => {
        return (
            <div className="flex-initial w-[23%] m-[1%] bg-gray-300 p-3" key={index}>
                <div className="text-center text-[1.2rem] bg-gray-200 p-[1rem]">
                    {user.name.first} {user.name.last}
                </div>
                <div className="my-3 p-0">
                    <img className="w-100" src={user.picture.large} alt={user.name.first + ' ' + user.name.last} />
                </div>
               
                <div className="age">Age: {user.dob.age}</div>
                <a className="mt-5 bg-blue-500 p-2 relative d-block text-white" href={"mailto:" + user.email}>Email me</a>
               
            </div>
        )
    }

    let listUser;

    if(location.pathname.match( "/listusers/search/" )){
        let { search } = useParams();

        sectionTitle = `Search results for "${search}"`;

        listUser = userJson.results.filter(user => {
            return user.name.first.toLowerCase().includes(search.toLowerCase()) || user.name.last.toLowerCase().includes(search.toLowerCase());
            
        })
        .map((user, index) => {
            return card(user, index);
        })
        
    }else{
        listUser = userJson.results.slice(0, maxUser()).map((user, index) => {
            return card(user, index);
        })
    }

    

    const changeMax = (e) => {
        newLimit = e.target.value;
        setNewLimit(newLimit);
        //Delay to avoid the page to reload
        setTimeout(() => {
            navigate(`/listusers/${newLimit}`);
        }, 500);
    }

    return (
        <div className="w-[100%] max-w-full m-auto">
            
            <h1>{sectionTitle}</h1>
            
            Change the number of users to show: <input className="form-control" maxLength={max} max={max} defaultValue={newLimit} type="number" onChange={changeMax} />
            <div className="flex flex-wrap mt-5">
                {listUser}
            </div>
                
        </div>
                    
    )
}

export default ListUsers
