import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './addJobO.css';
import '../../../css/scrollbar.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import {Button} from '../../../components/button/button.js'

import { Navbar} from 'react-bootstrap';


class orgAddJob extends Component {
  
  constructor() {
    super();
    this.state = {
        myAchievements:[] ,
        dataIndex : null
    }
  }

  addData(){
      const{myAchievements}=this.state;
      myAchievements.push({ id:'awexgbt' ,logo:require('../../../images/c1.jpg') , orgName:'Saylani'  ,cerDetails:'Completing 1 year Web and Mobile Application Development Course' , gettingSkills:'React.JS , ReactNative , Node.js e.t.c' , CompletionDate:'12-5-19' , orgLink:'www.saylani.com' , about:'Allhamdulillah ! Completing an other Certification'}) 
      myAchievements.push({ id:'1we4hji' ,logo:require('../../../images/c2.jpg')  , orgName:'AppTech' ,cerDetails:'Completing 3 year Diploma of Mobile Application Development Course' , gettingSkills:'Android Development , firebase e.t.c' , CompletionDate:'12-5-19' , orgLink:'www.Aptech.com' , about:'Allhamdulillah ! Completing an other Certification'}) 
      myAchievements.push({ id:'dfmk30f' ,logo:require('../../../images/c3.jpg')  , orgName:'SSUET' ,cerDetails:'Winning Speed test programming' , gettingSkills:'Speed Testing , programming , Debugging e.t.c' , CompletionDate:'12-5-19' , orgLink:'www.ssuet.com' , about:'Allhamdulillah ! Completing an other Certification'})
    }


  showFullData(e){
    const {dataIndex}  = this.state; 
   document.getElementById('adata').innerHTML = null
    this.setState({dataIndex:e})
  }  


  render(){
      const {myAchievements , dataIndex} = this.state;
      this.addData();
      return(
          <div className="mainDivOAJ">

          <Navbar  expand="md"  style={{ marginLeft:'0px' ,  height:'auto' , width:'100%' , background:'rgb(20, 194, 224)'}}>
            <Navbar.Brand>
                <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' }} src={require('../../../images/back.png')} />
                <img  style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
            </Navbar.Brand>
           </Navbar>  

              <div  className="col-md-14 row">

              <div id="sdata" className="col-lg scrollbar square scrollbar-lady-lips thin" style={{ height:'750px' , overflowY:'scroll' , textAlign:'center' , margin:'20px'}}> 
              <h6 className="pagination-centered" style={{color:'rgb(20, 194, 224)'}}> Previous Jobs Post </h6>
                <hr/>
              {
                  
                  myAchievements.map((val , ind)=>{
                        return(
                           <div  className="viewDivOAJ">
                              <p style={{textAlign:'center'}}> <img style={{width:'120px' , height:'80px'}} src={val.logo}/> </p>
                              <hr/>
                              <p className="scrollbar square scrollbar-lady-lips thin"  style={{width:'400px' , fontSize:'12px' , overflowY:'scroll'}} > 
                              <b> Subject : </b>  {val.orgName} <br/>
                              <b> Date : </b> {val.orgLink} <br/>  
                              <b> Details : </b> {val.cerDetails} <br/> 
                              <b> Type: </b> abc <br/>
                              <b> Category: </b> abc <br/>
                              <b> Work Experienced </b> abc <br/>
                              </p>
                              <div align="right"> <Button text='Delete'  type='submit' /> </div>
                           </div>
                       )
                    })
              }
              </div>
              
              <div id="adata" className="col-lg" style={{textAlign:'center' , margin:'10px' }}>
                
                <h6 style={{textAlign:'center' , color:'rgb(20, 194, 224)'}} className="text-center" >  Add New Job   </h6>
                 
                <hr/>

                <div>
               <label  style={{display:'block' , textAlign:'left' , fontSize:'14px'}}><b style={{color:'rgb(20, 194, 224)'}}>Subject </b></label>
               <input className="col-md-12 form-control"></input>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left' , fontSize:'14px'}}><b style={{color:'rgb(20, 194, 224)'}}>Details</b></label>
               <textarea className="col-md-12 form-control"></textarea>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left' , fontSize:'14px'}}><b style={{color:'rgb(20, 194, 224)'}}>Last Date</b></label>
               <input type='Date' className="col-md-12 form-control"></input>
               <br/>
               </div>

                   <div className="form-group mx-1">
                            <label  style={{fontSize:'14px' , textAlign:'left' , display:'block'}} ><b style={{color:'rgb(20, 194, 224)'}}>Type</b></label>
                            <select style={{fontSize:'14px'}} className="form-control" onChange={this.selectedAccountType} >
                              <option value="student">Job</option>
                              <option value="teacher">Internship</option>
                              <option value="teacher">Seminar</option>
                              <option value="teacher">Scholarship</option>
                              <option value="teacher">Other</option>
                            </select>
                       </div>


                       <div className="form-group mx-1">
                            <label  style={{fontSize:'14px' , textAlign:'left' , display:'block'}} ><b style={{color:'rgb(20, 194, 224)'}}>Work Experienced</b></label>
                            <select style={{fontSize:'14px'}} className="form-control" onChange={this.selectedAccountType} >
                              <option value="student">Beginner</option>
                              <option value="teacher">Intermediate</option>
                            </select>
                        </div>

                        <div className="form-group mx-1">
                            <label  style={{fontSize:'14px' , textAlign:'left' , display:'block'}} ><b style={{color:'rgb(20, 194, 224)'}}>Category</b></label>
                            <select style={{fontSize:'14px'}} className="form-control" onChange={this.selectedAccountType} >
                              <option value="student">Web , Mobile and Software developer</option>
                               <option value="teacher">Ecommerce Development</option>
                               <option value="teacher">Game Development</option>
                               <option value="teacher">Android App Development</option>
                               <option value="teacher">QA and Testing</option>
                               <option value="teacher">Database</option>
                               <option value="teacher">Web Development</option>
                               <option value="teacher">Web Designing</option>
                               <option value="teacher">IOS Development</option>
                               <option value="teacher">All IT and Networking</option>
                               <option value="teacher">Other Development</option>
                            </select>
                        </div>


               <div>
               <label  style={{display:'block' , textAlign:'left' , fontSize:'14px'}}><b style={{color:'rgb(20, 194, 224)'}}>Attachment</b></label>
               <input type="file" className="col-md-12 form-control"/>
               <br/>
               </div>

               <br/>

               <div align="center"><Button text='Submit'  type='submit'/> </div>

            </div>

        </div>  

    </div>
  )}
}

export default orgAddJob;