import React ,{Component} from 'react';
import {Link} from 'react-router';

class Login extends Component{
    constructor(props){

        console.log(" in the contructor");
        super(props);


        this.state={
            username:'',
            password:'',
            image:'',
            text:'',
            title:'',
            token:false
        }

        this.onLogin= this.onLogin.bind(this);
        this.onUnChange= this.onUnChange.bind(this);
        this.onPwChange= this.onPwChange.bind(this);
    }


    componentWillMount(){
        console.log("in component will mount");
        fetch('https://api.nasa.gov/planetary/apod?api_key=BzFtYqZJy1QDEd2SP1RI5sTIWqz8JFZB6zT4UIM9')
        .then(response => response.json())
        .then(json => {
            console.log("json data",json);

            this.setState({text:json.explanation,
                            image:json.url,
                            title:json.title
                             })

        });
    }


    onLogin(e){
        console.log("in the onLogin ", this.state);
        localStorage.setItem('username',this.state.username);
        if(this.state.username && this.state.password == false ){
            alert("please enter username and password")
        }
        else{
        this.props.history.push('/Home');
        }
        
        
            // this.setState({
            //     token:true
            // })
    

        
    }

    onUnChange(e){
        console.log("in the onUnchange ")
        this.setState({
           username:e.target.value 
        });

    }

    onPwChange(e){
        console.log(" in the onPwChange")
        this.setState({
            password:e.target.value 
         });

    }



    render(){
        return(
            <div>
               
                <hr/>
              <h2>  {this.state.title} </h2> <br/>
                    <img src={this.state.image}></img>
              <h3>  {this.state.text} </h3>
                <br/>
                <hr/>
                <label>Please Enter your username </label><input required type='text' onChange={this.onUnChange}></input><br/>
                <label>Please Enter your Password</label><input type='password' onChange={this.onPwChange}></input><br/>
                <button  onClick={this.onLogin}>Login</button>
                &nbsp;&nbsp;&nbsp;
                <span>
                <Link to={'/signup'}>   SignUP</Link>
                </span>
                
            
            
                


            </div>
        )
    }
}


export default Login;