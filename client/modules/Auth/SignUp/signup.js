import React ,{Component} from 'react';
import {Link} from 'react-router';

class Signup extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Welcome to the Signup page</h1>
                <hr/>
                <label>Please Enter your username </label><input type='text'></input><br/>
                <label>Please Enter your Password</label><input type='password'></input><br/>
                <label>Please Enter your Password</label><input type='password'></input><br/>

                <button >SignUp</button>
                <Link to={'/'}>login</Link>


            </div>
        )
    }
}


export default Signup;