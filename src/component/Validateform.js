import {Redirect} from 'react-router-dom';
export default function Validateform(values)
{
    let errors=[];
       
    if(!values.email){
        errors.email="Email or Phone number required";
    }
    else if(!/^[A-Z0-9.%+-]+@[A-Z0-9-]+\.[A-Z]{2,}$/i.test(values.email))
    {
        errors.email="Please entered a valid email address!";
    }
    else{

        window.location="/signup";
      
   
}

   
       
    if(!values.password){
        errors.password="Password required";
    }else if(values.password.length<6)
    {
            errors.password="Your password must contain between 4 and 60 characters";
    }
    else {
        window.location.href="/signup/chooseplan";
      }
   
    return errors
}