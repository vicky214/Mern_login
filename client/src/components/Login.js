import React,{useState} from 'react';
import axios from 'axios';

function Login(){
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const userdata=()=>{
        const user = {
          phone:phone,
          email:email,
          password:password
        };
        console.log(user)
          axios.post(`/api/emaillogin`, user ,{
          headers: { 
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
          })
          .then(res => {
            console.log('login')    
          })
        }
      

    return(
        <div class="row #64b5f6" style={{maxWidth:"500px",border:"1px solid #B8AEAA",marginTop:"50px",boxShadow:'2px 2px 2px 2px #A19793'}}>
            {/* <form class="col s12"> */}
              <div class="row">
                <div class="input-field col s7">
                  <input placeholder="Email" id="first_name" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" class="validate" />
                  <label for="first_name" style={{fontSize:"20px",fontWeight:"bold"}}>Email</label>
                </div>
                <div class="input-field col s5">
                  <input placeholder="Phone" id="last_name" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" class="validate" />
                  <label for="last_name" style={{fontSize:"20px",fontWeight:"bold"}}>Phone</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="disabled" type="text" class="validate" /> 
                  <label for="disabled" style={{fontSize:"20px",fontWeight:"bold"}}>Password</label>
                </div>
              </div>
              <div class="row">
              <div class="input-field col s12">
              <button class="btn waves-effect waves-light" type="submit" onClick={(e)=>{userdata()}} >Submit</button>
              </div>
              </div>
            {/* </form> */}
          </div>
    )

}
export default Login;