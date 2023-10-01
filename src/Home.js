import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Home = () => {

    const [name, setName] = useState("");

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [data, setData] = useState({});
  const [avatar, setAvatar] = useState('');


  const handleClick = () => {

    console.log("hii");

    axios.get('https://reqres.in/api/users/2').then((response) => {
      // setData(response.data.data);
      setFirstName(response.data.data.first_name);
      setLastName(response.data.data.last_name);
      setAvatar(response.data.data.avatar);

      console.log(response.data.data);
    })


  }

    return (
        <div>
            <div>
                <input placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }}></input>
                <div>{name}</div>

                <button onClick={handleClick}> click me</button>
                <div>{firstname}</div>
                <div>{lastname}</div>
                <img src={avatar}></img>
            </div>

            <Link to='/page1'>Page1</Link>
        </div>

    );

}

export default Home;