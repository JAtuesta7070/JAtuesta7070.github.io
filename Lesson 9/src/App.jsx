import React, { useState } from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to the Counter App</h1>
      <Counter title="Simple Counter" />
    </div>
  );
}

function Counter({ title }) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const App = ({ title }) => {

    const [searchTerm, setSearchTerm] = React.useState(
      localStorage.getItem('searchTerm') || 'React'
    );
    
    React.useEffect(() => {
      localStorage.setItem('searchTerm', searchTerm);
    }, [searchTerm]);

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    }

  const Search = ({ Search, OnSearch }) => {
    <React.Fragment>
      <label htmlFOr="search">Search:</label>
      <input 
      id="search"
      type="text" 
      value={Search} 
      onChange={OnSearch} />
    </React.Fragment>
  }

    const Search = ({ Search, OnSearch }) => {
    <React.Fragment>
      <label key="1" htmlFor="search">
        Search:
        </label>
      <input 
      key="2"
      id="search"
      type="text" 
      value={Search} 
      onChange={OnSearch} />
    </React.Fragment>
  }

  return (
    <div>
      <h1>{My Hacker Stories}</h1>

      <InputWIthLabel id="search" value={searchTerm} onInputChange={handleSearch}>


    </div>
  );
}

const InputWithLabel = ({ id, value, onInputChange, label }) => (
  <>
  <labeel htmlFor={id}>
    {label}
  </label>
  <input
    id={id}
    type="text"
    value={value}
    onChange={onInputChange}
  />
  </>
);

const InputWithLabel = ({ id, value, onInputChange, children }) => (
  <>
  <label
    htmlFor={id}
  >
    {children}
  </label>
  <input
    id={id}
    type="text"
    value={value}
    onChange={onInputChange}
  />
  </>
);

const InputWithLabel = ({ id, value, onInputChange, children }) => (
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

return (
  <div>
    <h1>{My Hacker Stories}</h1>

    <InputWithLabel id="search" value={searchTerm} onInputChange={handleSearch}>
    <strong>Search:</strong>
    </InputWithLabel>
  </div>
);
}

import { useState } from 'react'; 

 

function App() { 

 const [username, setUsername] = useState(''); 

 

 const handleUsernameChange = (event) => { 

   setUsername(event.target.value); 

 }; 

 

 return ( 

   <div> 

     <h1>Welcome!</h1> 

     <InputWithLabel 

       id="username" 

       value={username} 

       onInputChange={handleUsernameChange} 

     > 

       Username: 

     </InputWithLabel> 

     <p>Hello, {username || 'Guest'}!</p> 

   </div> 

 ); 

} 

 

function InputWithLabel(props) { 

 return ( 

   <> 

     <label htmlFor={props.id}>{props.children}</label> 

     <input 

       id={props.id} 

       type="text" 

       value={props.value} 

       onChange={props.onInputChange} 

     /> 

   </> 

 ); 

} 
