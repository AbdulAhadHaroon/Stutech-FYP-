import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './studentShareAchivement.css';
import '../../../css/scrollbar.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import {SignupDetail} from '../../../store/action/action';
import firebase from '../../../config/firebase.js'
import {Button} from '../../../components/button/button.js'
import '../../Loader/loader.css'

import { Navbar} from 'react-bootstrap';


class studentShareAchivement extends Component {
  
  constructor() {
    super();
    this.state = {
        myAchievements:[] ,
        dataIndex : null ,
        special : 'all' ,
        type : 'all' ,
        progress : false
    }
  }

   selectSpecial = (event) => { 
    const { special } = this.state;
     this.setState({special : event.target.value})
    }
  
    selectType = (event) => { 
      const { type } = this.state;
      this.setState({type : event.target.value})
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

  shareAchieve(){

    const { special ,type } = this.state;

    var a1 = document.getElementById('subject').value;
    var b1 = document.getElementById('Org_name').value;
    var c1 = document.getElementById('Org_Website').value;
    var d1 = document.getElementById('Cert_details').value;
    var e1 = document.getElementById('Ach_skills').value;
    var f1 = document.getElementById('comp_date').value;
    var file = document.getElementById('img_of_cert').files[0];

   
    if(a1.length<1){
      Swal.fire('Oops' , 'Please Fill Out Subject Field Correctly' , 'error')
    }
    else if(b1.length<1){
      Swal.fire('Oops' , 'Please Write Out Organization Name Correctly' , 'error')
    }
    else if(c1.length<1){
      Swal.fire('Oops' , 'Please Write Organization Website Link Correctly' , 'error')
    }
    else if(d1.length<1){
      Swal.fire('Oops' , 'Please Fill Out certification Field Correctly' , 'error')
    }
    else if(e1.length<1){
      Swal.fire('Oops' , 'Please Fill Your Achieved Skills Correctly' , 'error')
    }
    else if(f1.length<1){
      Swal.fire('Oops' , 'Please Write Completion date  Correctly' , 'error')
    }
    else if (file==undefined){
      Swal.fire('Oops' , 'Please Select Your Image' , 'error')
    }
   else if(type.includes('all')){
      Swal.fire('Oops' , 'Please Select Degree Type ' , 'error')
    }
    else if (special.includes('all')){
      Swal.fire('Oops' , 'Please Select Youe Certificate Speciality' , 'error')
    }
    else{
        this.setState({progress:true})
         var storageref = firebase.storage().ref("storage");
            var uploadtask= storageref.child(''+(new Date()).getTime()+file.name).put(file).then((snapshot)=>{
            return snapshot.ref.getDownloadURL();
            }).then(downloadURL => {
            var data = this.props.details;
             var database = firebase.database().ref();
            
              var skey =firebase.database().ref(`${data.rollNo}/Achievements`).push();
            
              var certificateObj = {
                id : skey.key,
                subject : a1 ,
                orgName : b1,
                orgLink : c1 ,
                certificeDetail : d1 ,
                skills : e1 ,
                completeDate : f1 ,
                certificateType : type , 
                speciality : special ,
                image :  downloadURL
              }
              skey.set(certificateObj); 
              this.setState({progress:false})
              Swal.fire('Congratulation', 'Your Achievement Added Successfully')
        }) 
    }
}


  render(){
      const {myAchievements , dataIndex , progress} = this.state;
      this.addData();
      return(
          <div className="mainDivAH">

          <Navbar  expand="md"  style={{ marginLeft:'0px' ,  height:'auto' , width:'100%' , background:'rgb(20, 194, 224)'}}>
            <Navbar.Brand>
                <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' }} src={require('../../../images/back.png')} />
                <img  style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
            </Navbar.Brand>
           </Navbar>  

              <div  className="col-md-14 row">

              <div id="sdata" className="col-lg scrollbar square scrollbar-lady-lips thin" style={{ height:'750px' , overflowY:'scroll' , textAlign:'center' , margin:'20px'}}> 
              <h6 className="pagination-centered" style={{color:'rgb(20, 194, 224)'}}> Shared Achievements </h6>
                <hr/>
              {
                  
                  myAchievements.map((val , ind)=>{
                        return(
                           <div  className="viewDivAH">
                              <p style={{textAlign:'center'}}> <img style={{width:'200px' , height:'150px'}} src={val.logo}/> </p>
                              <hr/>
                              <p  style={{width:'500px'}} > 
                              <b> "{val.about}"  </b> <br/><br/>
                              <b> Organization Name : </b>  {val.orgName} <br/>
                              <b> Organization Web : </b> {val.orgLink} <br/>  
                              <b> Certification Details : </b> {val.cerDetails} <br/> 
                              <b> Achievied Skills: </b> {val.gettingSkills} <br/>
                              <b> Completion Date: </b> {val.CompletionDate} <br/>
                              </p>
                              <div align="right"> <Button text='Delete'  type='submit' /> </div>
                           </div>
                       )
                    })
              }
              </div>
              
              <div id="adata" className="col-lg" style={{textAlign:'center' , margin:'10px' , fontSize:'12px'}}>
                
                <h6 style={{textAlign:'center' , color:'rgb(20, 194, 224)'}} className="text-center" >  Add New Achievement   </h6>
                 
                <hr/>

                <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Subject </b></label>
               <input style={{height:'30px'}} className="col-md-12 form-control" id="subject"></input>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Organization Name</b></label>
               <input style={{height:'30px'}} className="col-md-12 form-control" id="Org_name"></input>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Organization Website Link</b></label>
               <input style={{height:'30px'}} className="col-md-12 form-control" id="Org_Website"></input>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Certification Details</b></label>
               <textarea  className="col-md-12 form-control" id="Cert_details"></textarea>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Achieved Skills</b></label>
               <input style={{height:'30px'}} className="col-md-12 form-control" id="Ach_skills" ></input>
               <br/>
               </div>

               <div>
               <label  style={{display:'block' , textAlign:'left'}}><b style={{color:'rgb(20, 194, 224)'}}>Completion Date </b></label>
               <input style={{height:'30px' , fontSize:'12px'}} type="Date" className="col-md-12 form-control" id="comp_date"/>
               <br/>
               </div>

              

               <div className="form-group mx-1">
                <label  style={{fontSize:'12px' , textAlign:'left' , display:'block'}} ><b style={{color:'rgb(20, 194, 224)'}}>Type</b></label>
                <select style={{fontSize:'12px'}} className="form-control" onChange={(e)=>this.selectType(e)} >
                <option style={{fontSize:'12px'}}  value="all">ALL</option>
                <option value="Certificate">Certificate</option>
                <option value="Diploma">Diploma</option>
                <option value="Degree">Degree</option>
                </select>
            </div> 
                  
            <div className="form-group mx-1">
                <label  style={{fontSize:'12px' , textAlign:'left' , display:'block'}} ><b style={{color:'rgb(20, 194, 224)'}}>Speciality</b></label>
                <select style={{fontSize:'12px'}} className="form-control" onChange={(e)=>this.selectSpecial(e)} >
                <option style={{fontSize:'12px'}}  value="all">ALL</option>
                <option value="Web , Mobile and Software developer">Web , Mobile and Software developer</option>
                <option value="Ecommerce Development">Ecommerce Development</option>
                <option value="Game Development">Game Development</option>
                <option value="Android App Development">Android App Development</option>
                <option value="QA and Testing">QA and Testing</option>
                <option value="Database">Database</option>
                <option value="Web Development">Web Development</option>
                <option value="Web Designing">Web Designing</option>
                <option value="IOS Development">IOS Development</option>
                <option value="All IT and Networking">All IT and Networking</option>
                <option value="Other">Other</option>
                </select>
              </div>

               <br/>

               <div>
               <label  style={{display:'block' , textAlign:'left' , fontSize:'12px'}}><b style={{color:'rgb(20, 194, 224)'}}>Image of Certificate  </b></label>
               <input type="file" style={{fontSize:'12px'}} className="col-md-12 form-control" id="img_of_cert"/>
               <br/>
               </div>

               {progress && <div class='loaddiv'>
                    <div class="loader"></div>
                    <p><b>Loading please wait</b></p>
                  </div> }


                  {!progress &&  <div align="center"><Button text='Submit'  type='submit'  onClick={()=>{this.shareAchieve()}}/> </div>}

            </div>

        </div>  

    </div>
  )}
}
function mapStateToProp(state) {
  return ({
    details: state.root. studentInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(studentShareAchivement);