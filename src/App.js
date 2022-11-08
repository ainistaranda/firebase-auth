import { useState } from 'react'
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Protected from './scenes/Protected'

function App() {
  const [user, setUser] = useState()
  return (
    <>
    {!user
    ? <><Login setUser={setUser} /><Signup setUser={setUser}/> </>
    : <Protected />
    }
    </>
  );
}

export default App;
