import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { Theme } from './contexts/Theme';
import { UserContext } from './contexts/UserContext';

function App() {
  // Here we are defining where the "user" state actually exists
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // Here we are defining what is the value provided by our context
  // We are "Providing" this value so that descendent elements can "Consume" it from the context
  const contextValue = { user, setUser };
  const themeValue = { theme, setTheme };
  return (
    <Theme.Provider value={themeValue}>
      <UserContext.Provider value={contextValue}>
        <div className={`App ${theme}`}>

          <h1>Codelicious TODO</h1>

          {user && <Heading />}
          {user && <TodoList />}
          {!user && <Login />}

        </div>
      </UserContext.Provider>
    </Theme.Provider>
  );
}

export default App;
