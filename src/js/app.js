import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{

    constructor() {
        super();
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
                    thsi.setState({[this.state.firstName.value]: name})
                    return /^[a-zA-Z]+$/.test(name)
                }
            },
            lastName:{
                valid: false,
                value: "",
                validate: (lastName)=>{
                    if( this.state.firstName.value && lastName === this.state.firstName.value )
                        return true;
                }
            },
            password:{
                valid: false,
                value:"",
                validate: (pass)=>{
                    return pass.length > 8 ? true: false;
                }
            }
        };
        this.validate = this.validate.bind(this);
    }

    validate(event){
        this.setState({
            [event.target.name.valid]: this.state[event.target.name].validate(event.target.value)
        });
        console.log('validate',this.state[event.target.name]);
    }
    showError(input){
        if(!input)
        return <p>This field is required</p>
    }
    render(){
        return (
        <div className="row">
            <div className="col"></div>
            <div className="col-6">
                <form>
                    <div className="invalid form-group ">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName"  onBlur={this.validate} />
                        {this.showError(this.state.firstName.valid)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" onBlur={this.validate}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userName">Username</label>
                        <input type="text" className="form-control" id="userName" name="userName" onBlur={this.validate}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onBlur={this.validate}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onBlur={this.validate}/>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col"></div>
        </div>
        );
    }
}
const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);