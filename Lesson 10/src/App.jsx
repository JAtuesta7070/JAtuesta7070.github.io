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

 element.addEventListener('click', () => {
});

const App = () => {
  const handleClick = () => {
  };

  retuen(
    <button type="button" onClick={handleClick}>
      Click
    </button>
  );
};

const InputWithLabel = ({...}) => {
  <>
  <label htmlFor={id}>{children}</label>
  &nbsp;
  <input
    id={id}
    type={type}
    value={value}
    autoFocus
    onChange={onInputChange}
  />
  </>
};

const app = () => {
  ...

  return (
    <div>
      <h1>Welcome to the Counter App</h1>

      <InputWithLabel
      id="search"
      value={searchTerm}
      onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      
      </InputWithLabel>

      ...
      </div>
  );
};

 const InputWithLabel = ({ id, value, type = "text", onInputChange, isFocused, children 

 }) => {
  // A
  const inputRef = React.useRef();

  //C
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      //D
      inputRef.current.focus();
    }
 }, [isFocused]);
  <>
  <label htmlFor={id}>{children}</label>
  &nbsp;
  {/* B */}
  <input
    ref={inputRef}
    id={id}
    type={type}
    value={value}
    onChange={onInputChange}
    />
  </>
);

 };

 const intialStories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
  objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

...

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(intialStories);

  ...

};

const App = () => {
  ... 

  const [searchTerm, setSearchTerm] = React.useState(initialStories);

  const handleRemoveStory = (story) => {
    const newStories = stories.filter((s) => s.objectID !== story.objectID);
    setStories(newStories);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <hr />

      <List list={searchStories} onRemoveItem={handleRemoveStory} />
      </div>
  );
};

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => ( 
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);  

const Item = ({ item, onRemoveItem }) => (
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };

  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>  
      <span>[item.num_comments] comments</span>
      <span>[item.points] points</span>
      <span>
        <button type="button" onClick={handleRemoveItem}> 
          Dismiss
        </button>
      </span>       
    </li>
  );
};

const Item = ({ item, onRemoveItem }) => (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>  
      <span>[item.num_comments] comments</span>
      <span>[item.points] points</span>
      <span>
        <button type="button" onClick={onRemoveItem.blind(null, item)}> 
          Dismiss
    </li>
  );
};

const Item = ({ item, onRemoveItem }) => (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>  
      <span>[item.num_comments] comments</span>
      <span>[item.points] points</span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}> 
          Dismiss
        </button>
      </span>   
    </li>
  );
};

const intialStories = [...];

const getAsyncStories = () =>
  Promise.resolve({
    data: {
      stories: intialStories,
    },
  });

  const App = () => {
    ...

    const [stories, setStories] = React.useState([]);

    React.useEffect(() => {
      getAsyncStories().then((result) => {
        setStories(result.data.stories);
      });
    }, []);
    ...
    
  };

  const getAsyncStories = () =>
  new Promise((resolve) =>
    resolve({
      data: {
        stories: intialStories,
      },
    })
  );

   const getAsyncStories = () =>
  new Promise((resolve) =>
  setTimeout(
    () => resolve({
      data: {
        stories: intialStories,} }),
        2000
  )
  
  );

  const App = () => {
    ...

    const [stories, setStories] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
      setIsLoading(true);

      getAsyncStories().then((result) => {
        setStories(result.data.stories);
        setIsLoading(false);
      });
    }, []);

    ...
  };

  const App = () => {
    ...

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        ...
      </div>
    );
  };

  const App = () => {
    ...

    return (
      <div>
        ...

        <hr />

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <List list={stories} onRemoveItem={handleRemoveStory} />
        )}
      </div>
    );
  };

const App = () => {
    ...

    const [stories, setStories] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
      setIsLoading(true);

      getAsyncStories().then((result) => {
        setStories(result.data.stories);
        setIsLoading(false);
      });
    }, []);
    .catch(() => setIsError(true));

    ...
  };

  const App = () => {
    ...

    return (
      <div>
        ...

        <hr />

        {isError && <p>Something went wrong ...</p>}

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          ...

        )}
      </div>
    );
  };

  const getAsyncStories = () =>
  new Promise((resolve, reject) => ...);

  const storiesReducer = (state, action) => {
    if (action.type === 'STORIES_FETCH_INIT') {
      return action.payload;
    } else {
      throw new Error();
    }
  };

  const App = () => {
    ...

    const [stories, dispatchStories] = React.useReducer(
      storiesReducer,
      []
    );

    const app = () => {
      ...

      React.useEffect(() => {
        setIsLoading(true);

        getAsyncStories() 
        .then((result) => {
          dispatchStories({
            type: 'STORIES_FETCH_SUCCESS',
            payload: result.data.stories,
          });
          setIsLoading(false);
        }
        .catch(() => setIsError(true));
      ], []);

      const handleRemoveStory = (item) => {
        const newStories = stories.filter(
          (story) => item.objectID !== story.objectID
        );
        dispatchStories({
          type: 'SET_STORIES',
          payload: newStories,
        });
      };

      const app = () => {
        ...

        const handleRemoveStory = (item) => {
          dispatchStories({
            type: 'REMOVE_STORY',
            payload: item,
          });
        };

        ...

      };

      const storiesReducer = (state, action) => {
        if (action.type === 'SET_STORIES') {
          return action.payload;
        } else if (action.type === 'REMOVE_STORY') {
          return state.filter(
            (story) => action.payload.objectID !== story.objectID
          );
        } else {
          throw new Error();
        }
      };

      const storiesReducer = (state, action) => {
        switch (action.type) {
          case 'SET_STORIES':
            return action.payload;
          case 'REMOVE_STORY':
            return state.filter(  
              (story) => action.payload.objectID !== story.objectID
            );
          default:
            throw new Error();
        }
      };

