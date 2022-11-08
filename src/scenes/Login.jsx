import { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBtYAPftjR_ewTWWj5jRkYApjdkXrrRbfY",
    authDomain: "fb-auth-at.firebaseapp.com",
    projectId: "fb-auth-at",
    storageBucket: "fb-auth-at.appspot.com",
    messagingSenderId: "403338510047",
    appId: "1:403338510047:web:9afd5699af836f0a34736a"
  };

export default function Login({ setUser }) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) // connects to firebase
        const auth = getAuth(app) // connects us to firebase auth
        const response = await signInWithEmailAndPassword(auth, email, password)
            .catch(alert)
        setUser(response.user)
    }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin} >
        <label htmlFor="email">
          Email:
          <input type="email" name="email" placeholder="yourname@domain.com"
          value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label htmlFor="password">
          Password:{' '}
          <input type="password" name="password" 
          value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
