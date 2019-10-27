import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './AdmProfile.css';
import {Button} from '../../../components/button/button.js'
import { Navbar , Nav , NavDropdown , Form , FormControl } from 'react-bootstrap';



class AdmProfile extends Component {
  
constructor(){
  
  super();

  this.state={
    nfdiv1:true ,
    nfdiv2:false ,
    nfdiv3:false ,
    nfdiv4:false
  }

}

 render(){
   const {nfdiv1 , nfdiv2 , nfdiv3 , nfdiv4 } = this.state; 
  return(
    <div> 

        <Navbar  expand="md"  style={{ marginLeft:'0px' ,  height:'auto' , width:'100%' , background:'rgb(20, 194, 224)'}}>
        <Navbar.Brand>
            <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' }} src={require('../../../images/back.png')} />
            <img  style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
        </Navbar.Brand>
        </Navbar>  

              <div style={{backgroundColor: 'rgb(233, 233, 233)' , margin:'0px 0px 10px 0px' }}>
                   <div  className="row navbarAP"  >
                   <p className="navitemAP" onClick={()=>{this.setState({nfdiv1:true , nfdiv2:false , nfdiv3:false , nfdiv4:false })}} >ADMIN</p>
                   <p className="navitemAP" onClick={()=>{this.setState({nfdiv1:false , nfdiv2:true , nfdiv3:false , nfdiv4:false })}}>STUDENTS</p> 
                   <p className="navitemAP" onClick={()=>{this.setState({nfdiv1:false , nfdiv2:false , nfdiv3:true , nfdiv4:false })}}>TEACHERS</p>
                   <p className="navitemAP" onClick={()=>{this.setState({nfdiv1:false , nfdiv2:false , nfdiv3:false , nfdiv4:true })}}>ORGANIZATIONS</p>
                   </div>
                </div>


           { nfdiv1 && <div className="col-md row" id='div2' style={{backgroundColor:'whitesmoke' , paddingTop:'20px' , margin:'30px auto !important'}} >
           
            <div className="col-md-5" style={{ minWidth:'400px' , border:'solid 1px rgb(20, 194, 224)' , margin:'10px auto' , padding:'10px'}}>
            <br/>
            <h6 className="text-center" style={{color:'rgb(20, 194, 224)'}}><b> Add New Admin </b> </h6>
                
                 <hr/>
                 <input className="form-control" style={{fontSize:'12px' , height:'30px'}}  type="Email"  placeholder="Add Email Address" />
                 <br/>
                 <input className="form-control" style={{fontSize:'12px' , height:'30px'}}  type="Password"  placeholder="Write Password" />
                 <br/>
                 <input className="form-control" style={{fontSize:'12px' , height:'30px'}}  type="Password"  placeholder="Enter Password again" />
                 <br/>
                 <button className="btnSgnAdmP btn btn-success" ><b> Next </b></button>  
                 
                 <div  id="securityDetail" hidden>
                 <hr/>
                 <p className="form-control" style={{fontSize:'12px' , height:'30px'}}   >Wait For Security Question</p>
                 <br/>
                 <input className="form-control" style={{fontSize:'12px' , height:'30px'}}  type="Text"  placeholder="Write your answer" />
                 <br/>
                 <button className="btnSgnAdmP btn btn-success" ><b> Submit </b></button>  
                 </div>

                 <br/>
                 <br/>

             </div>

         
          
           <div  className="col-md-5" style={{ minWidth:'400px', border:'solid 1px rgb(20, 194, 224)' , margin:'10px auto' , padding:'10px'}}>

            
           <h6 className="text-center" style={{color:'rgb(20, 194, 224)'}}> <b> Change Credientals Here </b> </h6>
           <hr/>
                

                <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px'}}>@</div>
                      </div>
                      <input style={{height:'30px' , fontSize:'12px'}} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Email"/>
                      <Button text='Update'  type='submit' />
                    </div>
                </div>
            </div>

            <br />

            <div className="form-row align-items-center mx-1" >
                              <div className="col-12">
                                  <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                      <div className="input-group-text" style={{width:'40px' , height:'30px'}}><img src={require('../../../images/phone.png')} width="15px" height="15px" /></div>
                                    </div>
                                    <input style={{height:'30px' , fontSize:'12px'}} type="number" className="form-control" id="inlineFormInputGroup" placeholder="Contact Number"/>
                                    <Button text='Update'  type='submit' />
                                  </div>
                              </div>
                          </div>
          
                   <br />

            <div style={{border:'solid 1px rgb(20, 194, 224)' , margin:'10px' , padding:'20px 1px' , borderRadius:'10px'}}>       

            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px'}}><img src={require('../../../images/pass.png')} width="15px" height="15px" /></div>
                      </div>
                      <input style={{height:'30px' , fontSize:'12px'}} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Enter Current Password"/>
                    </div>
                </div>
            </div>

            <br />

            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px'}}><img src={require('../../../images/pass.png')} width="15px" height="15px" /></div>
                      </div>
                      <input style={{height:'30px' , fontSize:'12px'}} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Enter New Password"/>
                    </div>
                </div>
            </div>

            <br />

            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px'}}><img src={require('../../../images/pass.png')} width="15px" height="15px" /></div>
                      </div>
                      <input style={{height:'30px' , fontSize:'12px'}} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Re-Enter New Password"/>
                      <Button text='Update'  type='submit' />
                    </div>
                </div>
            </div>

            </div>

            <div>
            <br/>
             <h6 style={{color:'rgb(20, 194, 224)'}} className="text-center" >"Change Your Security Question"</h6>
                
                 <p style={{textAlign:'center'}}>  <button className="btnSgnAdmP btn btn-success" ><b> Change </b></button>  </p>
                 <div  id="changesecQ" hidden>
                 <hr/>
                 <p className="form-control" style={{fontSize:'12px' , height:'30px'}} > Wait for previous question </p>
                 <br/>

                <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px'}}><img src={require('../../../images/pass.png')} width="15px" height="15px" /></div>
                      </div>
                      <input style={{height:'30px' , fontSize:'12px'}} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Write Answer here"/>
                      <Button text='Submit'  type='submit' />
                    </div>
                </div>
              </div>

                 <br/>
                 <input className="form-control" style={{fontSize:'12px' , height:'30px'}}  placeholder="write your new Question here !"/>
                 <br/>

                 <div className="form-row align-items-center mx-1" >
                 <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px'}}><img src={require('../../../images/pass.png')} width="15px" height="15px" /></div>
                      </div>
                      <input style={{height:'30px' , fontSize:'12px'}} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Write new Answer here"/>
                      <Button text='Update'  type='submit' />
                    </div>
                  </div>
                </div>
             </div>    
          </div>
        </div>
      </div> 
    }


    { nfdiv2 && 
       <div className="col-8" style={{margin:'20px auto'}}>
           <h4 className="text-center" style={{color:'rgb(20, 194, 224)'}}> <b> View Student Details </b> </h4>
            <p className="text-center" > <b> Filter Student BY Batch and Department </b> </p>
             <hr/>

             <div className="form-group mx-1">
                    <label style={{fontSize:'12px'}} >Batch</label>
                    <select style={{fontSize:'12px'}} className="form-control" onChange={this.selectedAccountType} >
                        <option style={{fontSize:'12px'}} value="student">2020</option>
                        <option style={{fontSize:'12px'}} value="teacher">2019</option>
                        <option style={{fontSize:'12px'}} value="teacher">2018</option>
                        <option style={{fontSize:'12px'}} value="teacher">2016</option>
                        <option style={{fontSize:'12px'}} value="teacher">2017</option>
                    </select>
              </div>

              <div className="form-group mx-1">
                    <label style={{fontSize:'12px'}} >Department</label>
                    <select style={{fontSize:'12px'}} className="form-control" onChange={this.selectedAccountType} >
                        <option style={{fontSize:'12px'}} value="student">Software Engineering</option>
                        <option style={{fontSize:'12px'}} value="teacher">Computer Engineering</option>
                        <option style={{fontSize:'12px'}} value="teacher">Computer Science</option>
                        <option style={{fontSize:'12px'}} value="teacher">Information Technology</option>
                    </select>
              </div>

              <div className="form-group mx-1">
                    <label style={{fontSize:'12px'}} >Section</label>
                    <select style={{fontSize:'12px'}} className="form-control" onChange={this.selectedAccountType} >
                        <option style={{fontSize:'12px'}} value="student">ALL</option>
                        <option style={{fontSize:'12px'}} value="teacher">A</option>
                        <option style={{fontSize:'12px'}} value="teacher">B</option>
                        <option style={{fontSize:'12px'}} value="teacher">C</option>
                        <option style={{fontSize:'12px'}} value="student">D</option>
                        <option style={{fontSize:'12px'}} value="teacher">E</option>
                        <option style={{fontSize:'12px'}} value="teacher">F</option>
                    </select>
              </div>
              <Button text='Find'  type='submit' />

              <br/>
              <br/>

              <p className="text-center"> <b> Find Student using Roll no </b> </p>
              <hr/>

              <input style={{height:'30px' , fontSize:'12px'}} type="text" className="form-control"  placeholder="Write Roll no here (2016-SE-001)"/>
              <Button text='Find'  type='submit' />

       </div>
    }

    { nfdiv3 &&  
      <div className="col-8" style={{margin:'20px auto'}}>
           <h4 className="text-center" style={{color:'rgb(20, 194, 224)'}}> <b> View Teacher Details </b> </h4>
            <p className="text-center" > <b> Filter Teacher By Department </b> </p>
             <hr/>

              <div className="form-group mx-1">
                    <label style={{fontSize:'12px'}} >Department</label>
                    <select style={{fontSize:'12px'}} className="form-control" onChange={this.selectedAccountType} >
                        <option style={{fontSize:'12px'}} value="student">Software Engineering</option>
                        <option style={{fontSize:'12px'}} value="teacher">Computer Engineering</option>
                        <option style={{fontSize:'12px'}} value="teacher">Computer Science</option>
                        <option style={{fontSize:'12px'}} value="teacher">Information Technology</option>
                    </select>
              </div>

              <Button text='Find'  type='submit' />

              <br/>
              <br/>

              <p className="text-center"> <b> Find Teacher by Name </b> </p>
              <hr/>

              <input style={{height:'30px' , fontSize:'12px'}} type="text" className="form-control"  placeholder="Write name here"/>
              <Button text='Find'  type='submit' />

       </div>
    }

    { nfdiv4 && 
       <div className="col-8" style={{margin:'20px auto'}}>
           <h4 className="text-center" style={{color:'rgb(20, 194, 224)'}}> <b> View Organization Details </b> </h4>
            <p className="text-center" > <b> Filter Orgnaization By Type </b> </p>
             <hr/>

              <div className="form-group mx-1">
                    <label style={{fontSize:'12px'}} >Type</label>
                    <select style={{fontSize:'12px'}} className="form-control" onChange={this.selectedAccountType} >
                        <option style={{fontSize:'12px'}} value="student">Software House</option>
                        <option style={{fontSize:'12px'}} value="teacher">Corporate</option>
                        <option style={{fontSize:'12px'}} value="teacher">Insurance</option>
                        <option style={{fontSize:'12px'}} value="teacher">Networking</option>
                        <option style={{fontSize:'12px'}} value="teacher">Other</option>
                    </select>
              </div>

              <Button text='Find'  type='submit' />

              <br/>
              <br/>

              <p className="text-center"> <b> Find Organization by Name </b> </p>
              <hr/>

              <input style={{height:'30px' , fontSize:'12px'}} type="text" className="form-control"  placeholder="Write name here"/>
              <Button text='Find'  type='submit' />

       </div>
    }



   </div>
  )}
}

export default AdmProfile;
