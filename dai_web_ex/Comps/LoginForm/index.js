import { Loader, Button } from 'semantic-ui-react'
export default function LoginForm({
    loginState="before",
    onLoginClick()=>{}
}){

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

    return <div>
        <h3>Login Form</h3>
        <Input 
            disabled={loginState !== "before"}
            placeholder="email"
        />
        <Input 
            disabled={loginState !== "before"}
            placeholder="password"
        />
        <hr />
        <Button color={c} onClick={()=>onLoginClick()}> 
            {button_txt} 
            {loginState === "during" && <Loader active />}
      </Button>
    </div>
}