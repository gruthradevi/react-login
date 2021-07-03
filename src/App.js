import './App.css';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import LoadImages from './components/LoadImages';

function App() {
  
  const adminDetails = {
    username:"admin@gmail.com",
    password:"admin1234"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState([]);

  const Login =details => {
    if(details.email === adminDetails.username && details.password === adminDetails.password)
    {
    setUser({
      name:details.name,
      email:details.email
    })
    }
    else
    setError("Invalid Login!!")
  }

  

    const Logout = details => {
      setUser({name:"",email:""});
      setError("");
      setInputValue("");
      setApiData([]);
  }
    const handleSearchClick = (event:any) => {

      fetch(`https://api.unsplash.com/search/photos?client_id=AM5HZ-ia6zNzATz8yMJnvbkYC5N0bR-xDnc-0KYkSzg&query=${inputValue}`)
      .then(res => res.json())
      .then(data => setApiData(data))
      event.preventDefault();
      }

    const handleChange = (event :any) => {
      event.preventDefault();
     setInputValue(event.target.value);
  }

  return (
    <div className="App">
    {(user.email !=="")? (
      <div className="welcome">
      <h2>Welcome, <span>{user.name}!</span><button className="logout" onClick={Logout}>Logout</button></h2>
      <h4> Please enter a search term to load images </h4>
      <div className="search" ><input type="text" placeholder="Please enter a value" onChange={(event:any) => handleChange(event)}/>
      <br/>
      <button onClick={(event:any) =>handleSearchClick(event)}>Search</button></div>
       <LoadImages apiData={apiData}/> 
  
      </div>
    ):(
      <LoginForm Login={Login} error={error}/>
    )}
    </div>
  );
}

export default App;
