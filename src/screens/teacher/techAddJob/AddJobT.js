import React, { Component } from 'react';
import '../../../css/bootstrap.min.css';
import './AddJobT.css';
import Swal from 'sweetalert2'
import {Button} from '../../../components/button/button.js'
import { Navbar} from 'react-bootstrap';

class TeacherAddJob extends Component {


render(){
    return(
        <div className="mh-100" style={{backgroundColor:'whitesmoke'}}>
            
        <Navbar  expand="md"  style={{ marginLeft:'0px' ,  height:'auto' , width:'100%' , background:'rgb(20, 194, 224)'}}>
        <Navbar.Brand>
            <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' }} src={require('../../../images/back.png')} />
            <img  style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
        </Navbar.Brand>
        </Navbar>  


          <div class="row">
             
               <div className="col-md-5 halfdivTAJ" >

                 <h6 style={{textAlign:'center' , color:'rgb(20, 194, 224)'}} className="text-center" >  YOUR INFORMATION  </h6>
                 
                 <hr/>

                 <div>
                     <label  style={{display:'block' , textAlign:'left' , fontSize:'13px'}}><b style={{color:'rgb(20, 194, 224)'}}>Name</b></label>
                     <p style={{ height:'30px' , fontSize:'13px' }}  className="col-sm-12 form-control"> </p>
                 </div>


                 <div>
                     <label  style={{display:'block' , textAlign:'left' , fontSize:'13px'}}><b style={{color:'rgb(20, 194, 224)'}}>Email</b></label>
                     <p style={{ height:'30px' , fontSize:'13px' }}  className="col-sm-12 form-control"> </p>
                 </div>


                 <div>
                     <label  style={{display:'block' , textAlign:'left' , fontSize:'13px'}}><b style={{color:'rgb(20, 194, 224)'}}>Department</b></label>
                     <p style={{ height:'30px' , fontSize:'13px' }}  className="col-sm-12 form-control"> </p>
                 </div>

                 <div>
                     <label  style={{display:'block' , textAlign:'left' , fontSize:'13px'}}><b style={{color:'rgb(20, 194, 224)'}}>Designation</b></label>
                     <p style={{ height:'30px' , fontSize:'13px' }}  className="col-sm-12 form-control"> </p>
                 </div>
             
                 </div>  


               <div className="col-md-6  halfdivTAJ" >

               <h6 style={{textAlign:'center' , color:'rgb(20, 194, 224)'}} className="text-center" >   POST INFORMATION  </h6>
                 
                <hr/>

                <div>
               <label  style={{display:'block' , textAlign:'left' , fontSize:'13px'}}><b style={{color:'rgb(20, 194, 224)'}}>Title</b></label>
               <input className="col-sm-12 form-control"  style={{height:'30px' , fontSize:'13px'}} ></input>
               <br/>
               </div>

                <div>
               <label  style={{display:'block' , textAlign:'left' , fontSize:'13px'}}><b style={{color:'rgb(20, 194, 224)'}}>Subject </b></label>
               <input className="col-sm-12 form-control" style={{height:'30px' , fontSize:'13px'}}></input>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left' , fontSize:'13px'}}><b style={{color:'rgb(20, 194, 224)'}}>Details</b></label>
               <textarea className="col-sm-12 form-control" style={{fontSize:'13px'}}></textarea>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left' , fontSize:'13px'}}><b style={{color:'rgb(20, 194, 224)'}}>Date </b></label>
               <input type="Date" className="form-control" style={{fontSize:'13px'}}/>
               <br/>
               </div>

               <div className="form-group mx-1">
                    <label style={{ fontSize:'13px'}}>Post Type</label>
                    <select style={{ fontSize:'13px'}} className="form-control" onChange={this.selectedAccountType} >
                        <option style={{ fontSize:'13px'}} value="job">JOB</option>
                        <option style={{ fontSize:'13px'}} value="scholarships">ScholarShips</option>
                        <option style={{ fontSize:'13px'}} value="seminar">Seminar</option>
                        <option style={{fontSize:'13px'}} value="other">Other</option>
                    </select>
                </div>

                <div>
                <label  style={{display:'block' , textAlign:'left' , fontSize:'13px'}}><b style={{color:'rgb(20, 194, 224)'}}>Image</b></label>
                <input style={{height:'30px' , fontSize:'13px'}} type="file" accept="image/*"/>
                <br/>
                </div>

                <br/>
                <div align="center"><Button text='Submit'  type='submit' onClick={() =>Swal.fire('Congratulation!','You Complain has been submitted!')}/></div>
        

             </div>
        </div>
    </div>
    )
}

}

export default TeacherAddJob;
    