import { Button } from 'semantic-ui-react'
import { Loader } from 'semantic-ui-react'

//the 
import {useRouter} from 'next/router';
import {useState} from 'react';
export default function Home() {
  
  const r = useRouter();
  const [loginState, setLoginState] = useState("before")
  var button_txt = "login"
  var c = "blue";

  if(loginState === "before"){
    c = "blue";
    button_txt === "login"
  }

  if(loginState === "during"){
    c = "green";
    button_txt === "logging in"
  }

  if(loginState === "after"){
    c = "grey";
    button_txt === "success"
  }

  const HandleButton = () =>{
    if(loginState === "before"){
      setLoginState("during");
    }

    if(loginState === "during"){
      setLoginState("after");
    }
    if(loginState === "after"){
      r.push("/dashboard");
    }
  }
/* */
  const login = async () => {
    setLoginState("during");

    await new Promise(resolve=>setTimeout(resolve, 2000));

    setLoginState("after");

    await new Promise(resolve=>setTimeout(resolve, 2000));

    r.push("/dashboard");
  }


  return (
    <div>
      { /*<Button color={c} onClick={()=>HandleButton()}> 
      {button_txt} 
      {loginState === "during" && <Loader active />}
  </Button> */}
      <LoginForm loginState={loginState} />
    </div>
  )
}
