import React ,{Component} from 'react';


class Home extends Component{
    constructor(props){
        super(props);
        console.log(" in the home constructor");


        this.onLogout=this.onLogout.bind(this);
    }

    onLogout(){
        console.log("in the onclick");
        localStorage.removeItem('username');

        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <h1>Welcome Mr. &nbsp; {localStorage.getItem('username')} to the Home Page page</h1>
                <hr/>
                <label>Its The Home Page</label><br/><br/><br/><br/>

                <button onClick={this.onLogout}>Logout</button>
 
               


            </div>
        )
    }
}


export default Home;