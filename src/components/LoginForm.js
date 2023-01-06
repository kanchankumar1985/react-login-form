import {useState} from 'react'
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import LoginFormSucess from './LoginFormSucess';

export default function LoginForm() {

  const [overlayStyle , setOverlayStyle] = useState('hide');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function triggerReset() {
    setTimeout(()=>setOverlayStyle('hide') , 2000);
  }
  function handleLoginForm () {
    console.log(`${userName} , ${password}`);
    if(userName === 'kanchan' && password === "password"){
      navigate('/success' , { state : {userName , password}});
    } else {
      setOverlayStyle(()=> {
        triggerReset();
        return 'login-failure';
      });
      
    }
  }

  return (
    <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder='username' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className='login-btn'> 
          <button onClick={handleLoginForm}>Login</button>
        </div>
        <div className={overlayStyle}>
          Login Failure
        </div>
    </div>
    

  )
}
