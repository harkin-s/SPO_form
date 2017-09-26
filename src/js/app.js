import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{

    constructor() {
        super();
        // Component state contains form objects and validation functions
        this.state = {
            email:{
                valid:true,
                value:"",
                validate: (email)=>{
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(email);
                }
            },
            firstName:{
                valid: true,
                value: "",
                validate: (name)=>{
                    var obj = this.state.firstName
                    obj.value = name;
                    this.setState({firstName: obj});
                    this.state.firstName.value = name;
                    return /^[a-zA-Z]+$/.test(name)
                }
            },
            lastName:{
                valid: true,
                value: "",
                validate: (lastName)=>{
                    if(this.state.firstName.value.length > 0 ){
                       return lastName == this.state.firstName.value ? true : false
                    }
                    else{
                        return false;
                    }
                        
                }
            },
            password:{
                valid: true,
                value:"",
                validate: (pass)=>{
                    return  pass.length > 8 ? true: false;
                }
            },
            userName:{
                valid: true,
                value:"",
                validate: (uname)=>{
                    return /^[a-z._]+$/.test(uname) ;
                }
            }
        };
        this.validate = this.validate.bind(this);
        this.submit = this.submit.bind(this);
    }
    //Validate function called onBlur is passed the field name 
    validate(event){
        //Use bracket notation to find form object in state and run its validate function
        var obj = this.state[event.target.name];
        obj.valid = this.state[event.target.name].validate(event.target.value);
        this.setState({
            [event.target.name]: obj
        });
    };
    // On submit button run all form validators again
    submit(e){
        e.preventDefault();
        var fields = ['firstName', 'lastName', 'userName','password', 'email'];
        for(var i = 0 ; i < fields.length; i++){
            this.state[fields[i]].valid = this.state[fields[i]].validate(this.state[fields[i]].value);
        }
    }

    render(){
        return (
        <div className="row">
            <div className="col"></div>
            <div className="col-6">
                <form>
                    <div className={"form-group " + (this.state.firstName.valid ? '': "invalid")} >
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName"  onBlur={this.validate} />
                        {this.state.firstName.valid ? '' : <Child/> }
                    </div>
                    <div className={"form-group " + (this.state.lastName.valid ? '': "invalid")}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" onBlur={this.validate}/>
                        {this.state.lastName.valid ?  '' : <Child/> }
                        
                    </div>
                    <div className={"form-group " + (this.state.userName.valid ? '': "invalid")}>
                        <label htmlFor="userName">Username</label>
                        <input type="text" className="form-control" id="userName" name="userName" onBlur={this.validate}/>
                        {this.state.userName.valid ? '' : <Child/> }
                    </div>
                    <div className={"form-group " + (this.state.password.valid ? '': "invalid")}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onBlur={this.validate}/>
                        {this.state.password.valid ? <p>At least 8 characters</p>: <Child/> }
                    </div>
                    <div className={"form-group " + (this.state.email.valid ? '': "invalid")}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onBlur={this.validate}/>
                        {this.state.email.valid ? <p>An activation link will be sent to this email</p> : <Child/> }
                    </div>
                    <button className="btn btn-primary" onClick={this.submit}>Submit</button>
                </form>
            </div>
            <div className="col"></div>
        </div>
        );
    }
}
// Child used to show error message 
class Child extends React.Component {
    
    render() {
      return (<p className= "alertStyle" >This is a required field</p>);
    }
  }
//Get dom element
const app = document.getElementById('app');
//Render element
ReactDOM.render(<Layout/>, app);