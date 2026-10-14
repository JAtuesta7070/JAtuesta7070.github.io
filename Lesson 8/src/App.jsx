function App() { 

 return ( 

   <div> 

     <h1>Welcome to the Counter App</h1> 

     <Counter /> 

   </div> 

 ); 

} 

 

function Counter() { 

 // You'll need to add state and props here 

 

 const handleIncrease = () => { 

   // This function should increase the count 

 }; 

 

 return ( 

   <div> 

     <h2>{/* Show the title prop here */}</h2> 

     <p>Count: {/* Show the count here */}</p> 

     <button onClick={handleIncrease}>Increase</button> 

   </div> 

 ); 

function App() { 

 const [searchTerm, setSearchTerm] = useState(''); 

 

 const handleSearch = (event) => { 

   // Update the searchTerm state here 

 }; 

 

 return ( 

   <div> 

     <h1>Search App</h1> 

     <Search onSearch={handleSearch} /> 

     <p>Searching for: {searchTerm}</p> 

   </div> 

 ); 

} 

} 

 