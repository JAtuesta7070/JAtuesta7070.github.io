import { useState } from 'react'; 

import axios from 'axios'; 

 

function App() { 

 const [fact, setFact] = useState(''); 

 const [error, setError] = useState(null); 

 

 const handleSubmit = async (event) => { 

   event.preventDefault(); 

   try { 

     const response = await axios.get('https://cat-fact.herokuapp.com/facts/random'); 

     setFact(response.data.text); 

     setError(null); 

   } catch (err) { 

     setError('Failed to fetch cat fact'); 

   } 

 }; 

 

 return ( 

   <div> 

     <h1>Cat Fact Finder</h1> 

     <form onSubmit={handleSubmit}> 

       <button type="submit">Get Cat Fact</button> 

     </form> 

     {fact && <p>{fact}</p>} 

     {error && <p style={{ color: 'red' }}>{error}</p>} 

   </div> 

 ); 

} 

export default App;

const App = () => {
  ...

  const handleFetchStories = React.useCallback(async () => {
    dispatch({ type: 'FETCH_STORIES_INIT' });

    axios
      .get('https://cat-fact.herokuapp.com/facts/random')
      .then((result) => {
        dispatchStories({
          type: 'FETCH_STORIES_SUCCESS',
          payload: result.data
        });
      })
      .catch((error) => {
        dispatchStories({
          type: 'FETCH_STORIES_FAILURE',
          payload: error.message
        });
      });

  }, []);
  
  const App = () => {
    ...

    const handleFetchStories = React.useCallback(async () => {
      dispatch({ type: 'FETCH_STORIES_INIT' });

      const result = await axios.get('https://cat-fact.herokuapp.com/facts/random');
      dispatchStories({
        type: 'FETCH_STORIES_SUCCESS',
        payload: result.data
      });
    }, []);

    ...

  };

  const App = () => {
    ...

    const handleFetchStories = React.useCallback(async () => {
      dispatch({ type: 'FETCH_STORIES_INIT' });

      try {
        const result = await axios.get('https://cat-fact.herokuapp.com/facts/random');
        dispatchStories({
          type: 'FETCH_STORIES_SUCCESS',
          payload: result.data
        });
      } catch (error) {
        dispatchStories({
          type: 'FETCH_STORIES_FAILURE',
          payload: error.message});
      }
    }, [url]);

    ...

  };

  const App = () => {
    ...

    return (
      <div>
        <h1>Cat Fact Finder</h1>

        <form onSubmit={handleFetchStories}>
          <InputWithLabel
            id="search"
            value={searchTerm}
            isFocused
            onInputChange={handleSearchInput}
          >
            <strong>Search:</strong>
          </InputWithLabel>

          <button type="submit" disabled={!searchTerm}>
            Fetch Cat Fact
          </button>
        </form>

        <hr />

        ...

        </div>
    );
  };

  const App = () => {
    ... 

    const handleSearchInput = (event) => {
      setUrl('${API_ENDPOINT}${searchTerm}');

      event.preventDefault();
    }

    ...

  };

  const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
    <form onSubmit={onSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <button type="submit" disabled={!searchTerm}>
        Fetch Cat Fact
      </button> 
    </form>
  );

  const App = () => {
    ...

    return (
      <div>
        <h1>Cat Fact Finder</h1>
        <SearchForm
          searchTerm={searchTerm}
          onSearchInput={handleSearchInput}
          onSearchSubmit={handleFetchStories}
        />

        <hr />

        {stories.isError && <p>Something went wrong ...</p>}

        {stories.isLoading ? (
          <p>Loading ...</p>
        ) : (
          <List list={stories.data} onRemoveItem={handleRemoveItem} />
        )}
      </div>
    );
  };

  const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
    <form onSubmit={onSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <button type="submit" disabled={!searchTerm}>
        Fetch Cat Fact
      </button> 
    </form>
  );

  <searchForm
    searchTerm={searchTerm}
    onSearchInput={handleSearchInput}
    onSearchSubmit={handleFetchStories}
    searchAction={searchAction}
  />

  const searchAction = () => {
    setUrl('${API_ENDPOINT}${searchTerm}');

    //event.preventDefault();
  };
