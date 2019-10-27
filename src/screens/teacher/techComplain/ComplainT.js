import React, { Component } from 'react';
import '../../../css/bootstrap.min.css';
import './ComplainT.css';
import Swal from 'sweetalert2'
import {Button} from '../../../components/button/button.js'
import { Navbar} from 'react-bootstrap';
// import {withRouter} from 'react-router-dom';
class TeacherSendComplain extends Component {


render(){
    return(
        <div className="mh-100" style={{backgroundColor:'whitesmoke'  , minHeight:'100vh'}}>
            
        <Navbar  expand="md"  style={{ marginLeft:'0px' ,  height:'auto' , width:'100%' , background:'rgb(20, 194, 224)'}}>
        <Navbar.Brand>
            <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' }} src={require('../../../images/back.png')} />
            <img  style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
        </Navbar.Brand>
        </Navbar>  


          <div class="row">
             
               <div className="col-md-5 halfdivCT" >

                 <h6 style={{textAlign:'center' , color:'rgb(20, 194, 224)'}} className="text-center" >   STUDENT INFORMATION  </h6>
                 
                 <hr/>

                 <div>
                     <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Name</b></label>
                     <p style={{ height:'30px' }}  className="col-sm-12 form-control"> </p>
                 </div>


                 <div>
                     <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Email</b></label>
                     <p style={{ height:'30px' }}  className="col-sm-12 form-control"> </p>
                 </div>


                 <div>
                     <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Phone</b></label>
                     <p style={{ height:'30px' }}  className="col-sm-12 form-control"> </p>
                 </div>

                 <div>
                     <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Employe ID</b></label>
                     <p style={{ height:'30px' }}  className="col-sm-12 form-control"> </p>
                 </div>
                 

                 <div>
                     <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Department</b></label>
                     <p style={{ height:'30px' }}  className="col-sm-12 form-control"> </p>
                 </div>

                 </div>  


               <div className="col-md-6  halfdivC" >

               <h6 style={{textAlign:'center' , color:'rgb(20, 194, 224)'}} className="text-center" >   COMPLAINT INFORMATION  </h6>
                 
                <hr/>

                <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Subject </b></label>
               <input className="col-sm-12 form-control"></input>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Complaint Details</b></label>
               <textarea className="col-sm-12 form-control"></textarea>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>What step should be considerd to avoid a repeat of a problem </b></label>
               <textarea className="col-sm-12 form-control"></textarea>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Date </b></label>
               <input style={{fontSize:'12px'}} type="Date" className="col-sm-12 form-control"/>
               <br/>
               </div>

               <div className="form-group mx-1">
                    <label style={{fontSize:'12px'}} >Complaint Type</label>
                    <select style={{fontSize:'12px'}} className="form-control" onChange={this.selectedAccountType} >
                        <option style={{fontSize:'12px'}} value="student">Non-Anonymous</option>
                        <option style={{fontSize:'12px'}} value="teacher">Anonymous</option>
                    </select>
                </div>

                <br/>
                <div align="center"><Button text='Submit'  type='submit' onClick={() =>Swal.fire('Congratulation!','You Complain has been submitted!')}/></div>
        

             </div>
        </div>
    </div>
    )
}

}

export default TeacherSendComplain;
    