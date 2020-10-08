import React,{PureComponent} from 'react';
import axios from 'axios'

class Register extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            email:'',
            phone:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this)    

}
handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    const data={
        email:this.state.email
    }
    axios.post('/api/emailregister',data,{
        headers:{
            'data':data
        }
    })
    .then(res=>{
        console.log('login',res)
    })
    .catch(err=>{
        console.log(err)
    })
  }
    render(){
        var {email,phone,password} = this.state;
        console.log('data11',this.state)

        return(
            <div class="row #64b5f6" style={{maxWidth:"500px",border:"1px solid #B8AEAA",marginTop:"50px",boxShadow:'2px 2px 2px 2px #A19793'}}>
            {/* <form class="col s12"> */}
              <div class="row">
                <div class="input-field col s7">
                  <input placeholder="Email" id="first_name" name="email" value={email} onChange={this.handleChange} type="text" class="validate" />
                  <label for="first_name" style={{fontSize:"20px",fontWeight:"bold"}}>Email</label>
                </div>
                <div class="input-field col s5">
                  <input placeholder="Phone" id="last_name" name="phone" value={phone} onChange={this.handleChange} type="text" class="validate" />
                  <label for="last_name" style={{fontSize:"20px",fontWeight:"bold"}}>Phone</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input placeholder="Password" name="password" value={password} onChange={this.handleChange} id="disabled" type="text" class="validate" /> 
                  <label for="disabled" style={{fontSize:"20px",fontWeight:"bold"}}>Password</label>
                </div>
              </div>
              <div class="row">
              <div class="input-field col s12">
              <button class="btn waves-effect waves-light" type="submit" onClick={this.handleClick}>Submit</button>
              </div>
              </div>
            {/* </form> */}
          </div>
        )
    }
}

export default Register;