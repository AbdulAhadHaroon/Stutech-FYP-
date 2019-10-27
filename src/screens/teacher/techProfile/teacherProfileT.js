import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './teacherprofileT.css';
import {Button} from '../../../components/button/button.js'
import { Navbar} from 'react-bootstrap';


class Teacherprofile extends Component {
  
 render(){
  return(
    <div> 

      <Navbar  expand="md"  style={{ marginLeft:'0px' ,  height:'auto' , width:'100%' , background:'rgb(20, 194, 224)'}}>
        <Navbar.Brand>
            <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' }} src={require('../../../images/back.png')} />
            <img  style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
        </Navbar.Brand>
        </Navbar>  


            <div className="col-md-12 row" id='div2' style={{backgroundColor:'whitesmoke' , paddingTop:'20px' , margin:'30px auto'}} >
           
            <div className=" col-md-1  div1TSP">
            <br/>
            <h6 style={{color:'rgb(20, 194, 224)'}}>PROFILE</h6>
                <div className="col-md-4" style={{textAlign:'center' , margin:'10px auto'}}>
                  <img  className="TPimg" src={require('../../../images/stuuser.png')} />
                  <br/>
                 </div>
                 <hr/>
                 <input  type="file"  text="Upload new Picture" />
                 <button className="btnSgnTSP btn btn-success" > Update </button>  
                 <hr/>
            </div>

            

            <br/>
            <br/>
  
          
          <div className="col-md-6" style={{minWidth:'500px'}}>
               
                <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px' , marginTop:'6px'}}>@</div>
                      </div>
                      <input style={{marginTop:'6px' , height:'30px' , fontSize:'12px'}} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Email"/>
                      <Button text='Update'  type='submit' />
                    </div>
                </div>
            </div>

            <br />

            <div className="form-row align-items-center mx-1" >
                              <div className="col-12">
                                  <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                      <div className="input-group-text" style={{width:'40px' , height:'30px' , marginTop:'6px'}}><img src={require('../../../images/phone.png')} width="15px" height="15px" /></div>
                                    </div>
                                    <input style={{marginTop:'6px' , height:'30px' , fontSize:'12px'}} type="number" className="form-control" id="inlineFormInputGroup" placeholder="Contact Number"/>
                                    <Button text='Update'  type='submit' />
                                  </div>
                              </div>
                          </div>
          
                   <br />

            <div style={{border:'solid 2px rgb(20, 194, 224)' , margin:'10px' , padding:'20px 1px' , borderRadius:'10px'}}>       

            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px'}}><img src={require('../../../images/pass.png')} width="15px" height="15px" /></div>
                      </div>
                      <input style={{ height:'30px' , fontSize:'12px'}} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Enter Current Password"/>
                    </div>
                </div>
            </div>

            <br />

            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px'}}><img src={require('../../../images/pass.png')} width="15px" height="15px" /></div>
                      </div>
                      <input style={{ height:'30px' , fontSize:'12px'}} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Enter New Password"/>
                    </div>
                </div>
            </div>

            <br />

            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px' , marginTop:'6px'}}><img src={require('../../../images/pass.png')} width="15px" height="15px" /></div>
                      </div>
                      <input style={{marginTop:'6px' , height:'30px' , fontSize:'12px'}} type="password" className="form-control" id="inlineFormInputGroup" placeholder="Re-Enter New Password"/>
                      <Button text='Update'  type='submit' />
                    </div>
                </div>
            </div>

            <br />

            </div>

            <br/>

            <div className="form-row mx-1">
                <div className="col">
                  <input style={{marginTop:'6px' , height:'30px' , fontSize:'12px'}} type="number" className="form-control" placeholder="Day"/>
                </div>
                <div className="col">
                  <input style={{marginTop:'6px' , height:'30px' , fontSize:'12px'}} type="number" className="form-control" placeholder="Month"/>
                </div>
                <div className="col">
                  <input style={{marginTop:'6px' , height:'30px' , fontSize:'12px'}} type="number" className="form-control" placeholder="Year"/>
                </div>
                <Button text='Update'  type='submit' />
              </div>

              <br/>

              <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px' , marginTop:'6px'}}>D</div>
                      </div>
                      <input style={{marginTop:'6px' , height:'30px' , fontSize:'12px'}} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Department"/>
                      <Button text='Update'  type='submit' />
                    </div>
                </div>
            </div>

            <br />


            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px' , marginTop:'6px'}}>D</div>
                      </div>
                      <input style={{marginTop:'6px' , height:'30px' , fontSize:'12px'}} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Designation"/>
                      <Button text='Update'  type='submit' />
                    </div>
                </div>
            </div>

            <br />


            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px' , marginTop:'6px'}}>Q</div>
                      </div>
                      <input style={{marginTop:'6px' , height:'30px' , fontSize:'12px'}} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Add Qualification Details one by one "/>
                      <Button text='Add +'  type='submit' />
                    </div>
                </div>
            </div>

            <br />

           </div>
        </div>
 
   </div>
  )}
}

export default Teacherprofile;
