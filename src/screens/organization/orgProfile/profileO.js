import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './profileO.css';
import {Button} from '../../../components/button/button.js'
import { Navbar , Nav , NavDropdown , Form , FormControl } from 'react-bootstrap';



class Orgprofile extends Component {
  
 render(){
  return(
    <div> 

        <Navbar  expand="md"  style={{ marginLeft:'0px' ,  height:'auto' , width:'100%' , background:'rgb(20, 194, 224)'}}>
        <Navbar.Brand>
            <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' }} src={require('../../../images/back.png')} />
            <img  style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
        </Navbar.Brand>
        </Navbar>  


            <div className="col-md row" id='div2' style={{backgroundColor:'whitesmoke' , paddingTop:'20px' , margin:'30px auto'}} >
           
            <div className=" col-md-2  div1OP">
            <br/>
            <h6 style={{color:'rgb(20, 194, 224)'}}>"PROFILE"</h6>
                <div className="col-md-4" style={{textAlign:'center' , margin:'10px auto'}}>
                  <img  className="OPimg" src={require('../../../images/stuuser.png')} />
                  <br/>
                 </div>
                
                 <hr/>
                 <input style={{fontSize:'12px' , height:'30px'}}  type="file"  text="Upload new Picture" />
                 <button className="btnSgnOP btn btn-success" ><b> Update </b></button>  
                 <hr/>

            </div>

            

            <br/>
            <br/>
  
          
          <div className="col-md-6" style={{minWidth:'500px'}}>
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

            <br />

            </div>

            <br/>


              <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px'}}>W</div>
                      </div>
                      <input style={{height:'30px' , fontSize:'12px'}} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Website Link"/>
                      <Button text='Update'  type='submit' />
                    </div>
                </div>
            </div>

            <br />


            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px'}}>D</div>
                      </div>
                      <textarea style={{ fontSize:'12px'}}  type="text" className="form-control" id="inlineFormInputGroup" placeholder="Details"/>
                      <Button text='Update'  type='submit' />
                    </div>
                </div>
            </div>

            <br />


            <div className="form-row align-items-center mx-1" >
                <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px' , height:'30px'}}>A</div>
                      </div>
                      <input style={{height:'30px' , fontSize:'12px'}} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Update Address here !"/>
                      <Button text='Update'  type='submit' />
                    </div>
                </div>
            </div>

            <br />




              <br/>

           </div>
        </div>
 
   </div>
  )}
}

export default Orgprofile;
