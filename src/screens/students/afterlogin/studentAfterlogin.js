import React, { Component } from 'react';
import '../../../css/bootstrap.min.css';
import './studentAfterLogin.css';
import '../../../css/scrollbar.css';
import {Link} from 'react-router-dom'; 
import {Button} from '../../../components/button/button.js'
import firebase from '../../../config/firebase.js'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
// import { CustomErrorComponent } from 'custom-error';



class studentAfterLogin extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          arr1:[] ,
          arr2:[] ,
          JobsNF:[]
        }
        this.data = this.data.bind(this);
        this.Recentjob = this.Recentjob.bind(this)
      }

      componentDidMount(){
          this.addData();
      }

    addData(){
        const {JobsNF} = this.state;
          
        firebase.database().ref(`/Jobs`).on("value", (snapshot)=> {
         
          snapshot.forEach((childSnapshot)=> {
           var d = childSnapshot.val();
          var obj = {
           id : d.id ,
           logo : d.clogo ,
           Jimg : d.image ,
           orgName : d.cemail ,
           description : d.detail ,
           date : d.date ,
           experience : d.workType,
           type : d.jobType ,
           cid : d.cid ,
           category : d.category ,
           subject : d.subject
          }
          JobsNF.push(obj);
          this.setState({JobsNF})
          })
        })
    }  


      
    addFav(i){
        const {JobsNF} = this.state;
        var data = this.props.details;
        var skey = firebase.database().ref("Favourite/"+data.rollNo).push();
        var obj = {
                id:skey.key,
                logo : JobsNF[i].logo ,
                Jimg : JobsNF[i].Jimg ,
                orgName : JobsNF[i].orgName ,
                description : JobsNF[i].description ,
                date : JobsNF[i].date ,
                experience : JobsNF[i].experience,
                type : JobsNF[i].type ,
                cid : JobsNF[i].cid ,
                category : JobsNF[i].category ,
                subject : JobsNF[i].subject
        }
     
      skey.set(obj);
      Swal.fire('Done' , 'Add Favourite Successfully')
    }

    viewProf(i){
        const {JobsNF} = this.state;
        localStorage.setItem('orgID' , JobsNF[i].cid);
        this.props.history.push('./stuViewOrg')
       }

      data(){
        const {arr1 , arr2 , JobsNF} = this.state;

        // JobsNF.push({ id:'awexgbt' ,logo:require('../../../images/ssuet.png') , Jimg:require('../../../images/j1.jpg') , orgName:'SSUET' , address:'nipa , Gulshan , Karachi' , subject:'Seminar on AI' , description:'The Distant Future - Ai and robots are far behind computers but it’ll only be a matter of time before they become as regular as cell phones are in our everyday life. - Ray Kurzweil has used Moore’s law (which describes the relentless exponential improvement in digital technology with uncanny accuracy) to calculate that desktop computers will have the same processing power as human brains by the year 2029, and that by 2045 artificial intelligence will reach a point where it is able to improve itself at a rate that far exceeds anything conceivable in the past. - Several futurists and science fiction writers have predicted that human beings and machines will merge in the future into Cyborgs that are more capable and powerful than either. This idea, called trans-humanism.' , date:'12-7-19' , websiteLink : 'ssuet.edu.pk' , type:'Seminar' })
        // JobsNF.push({ id:'1we4hji' ,logo:require('../../../images/oracle.png') , Jimg:require('../../../images/j2.jpg') , orgName:'App Bakers' , address:'near Expo Centre , Gulshan , Karachi' , subject:'Job Available for full stack Developer' , description:'We are looking for a highly skilled computer programmer who is comfortable with both front and back end programming. Full Stack Developers are responsible for developing and designing front end web architecture, ensuring the responsiveness of applications and working alongside graphic designers for web design features, among other duties. Full Stack Developers will be required to see out a project from conception to final product, requiring good organizational skills and attention to detail.' , date:'30-6-19' , websiteLink : 'www.AppBakers.com' , type:'Job' })
        // JobsNF.push({ id:'dfmk30f' ,logo:require('../../../images/decima.png') , orgName:'Decima.AI' , Jimg:require('../../../images/j3.png') , address:'DHA phase 5 , Karachi' , subject:'Internships Available for full Software Engineer' , description:'We are looking for a  skilled computer programmer who is comfortable with java programming. Please Send your resume at Decima@gmail.com ' , date:'27-6-19' , websiteLink : 'www.DecimaAI.com' , type:'internship' })
    
        arr1.push({name:'Oracle' , for : 'Computer Science' , type:'job' , Date:'10/1/19' , img:require('../../../images/oracle.png') })
        arr1.push({name:'SSUET' , for : 'Software' , type:'intern', Date:'12/7/12' , img:require('../../../images/ssuet.png') })
        arr1.push({name:'Decima' , for : 'Computer Engg' , type:'Seminar' , Date:'12/8/2020' , img:require('../../../images/decima.png') })
        arr1.push({name:'Oracle' , for : 'Computer Science' , type:'job' , Date:'10/1/19' , img:require('../../../images/oracle.png') })
        arr1.push({name:'SSUET' , for : 'Software' , type:'intern', Date:'12/7/12' , img:require('../../../images/ssuet.png')})
        arr1.push({name:'Decima' , for : 'Computer Engg' , type:'Seminar' , Date:'12/8/2020' , img:require('../../../images/decima.png')})

        arr2.push({logo:require('../../../images/ssuet.png') , name : 'SSUET' , subject:'AI Seminar held on tuesday. ' , Date:'12-4-2019' })
        arr2.push({logo:require('../../../images/oracle.png') , name : 'Axiom' , subject:'New Course Launched' , Date:'23-3-2019' })
        arr2.push({logo:require('../../../images/oracle.png') , name : 'AppBakers' , subject:'Internship Available for SE' , Date:'23-7-2019' })
        arr2.push({logo:require('../../../images/oracle.png') , name : 'Decima.AI' , subject:'Job Available for Web Development' , Date:'12-6-2019' })
        arr2.push({logo:require('../../../images/oracle.png') , name : 'MakSoft' , subject:'Seminar on android' , Date:'11-5-2019' })
    
    }

    Recentjob(){
        document.getElementById('div3id').innerHTML = null;
        document.getElementById('div4id').innerHTML = null;
        this.setState({})
    }
      
      

  render() {
    const {arr1 , arr2 , JobsNF} = this.state;
    this.data();
    return (
        
      <div style={{minWidth:'370px' , margin:'1px auto'}}>

        <div className="sidenavAF">
            <p  className="SAFp" > <img  className="SAFuimg" src={this.props.details.imgURL}  />  </p>
            <p style={{textAlign:'center'}}>
                <h6> <b> {this.props.details.name} </b> </h6>
                <p style={{fontSize:'12px'}}> Sirsyed University </p>
            </p>
            <hr/>
           <p style={{textAlign:'center' , fontSize:'12px'}}>  Build up your profile to getting more oppurtunity !</p>
           <p style={{textAlign:'center'}}><Link to="/stuViewProfile" > <Button text='View Profile' type='submit' /> </Link></p>
             
        </div>

    <div className="div2AF" >      
            <div>
                <h6 style={{textAlign:'center' , color:'rgb(47, 174, 212)'}}><b>Reminder</b></h6> 
            </div>
            
            <div  className="div4AF ">
                 <div className="scrollbar square scrollbar-lady-lips thin" style={{overflowY:'scroll' , height:'75vh'}}> 
                    <div id="div4id">
                    {
                        arr2.map((val , ind)=>{
                        return(
                           <div className="RemindDivAF">
                              <p style={{textAlign:'center' , fontSize:'12px'}}> <img style={{width:'40px' , height:'40px'}} src={val.logo}/> <b> {val.name}</b> </p>
                              <hr/>
                              <p  style={{color:'gray' , fontSize:'11px'}}>  {val.subject} <br/> Date : <b style={{color:'black'}}>{val.Date} </b> </p>
                              <button className="div4btnAF"> View Details</button>          
                           </div>
                            )
                         })
                    }
                    </div>
                 </div>
            </div>      
        </div>

          

        <div className="topnavAF  sticky-top scrollbar square scrollbar-lady-lips thin">

                <img className="sidelogoAF" src={require('../../../images/logo.png')}/> 
                <input className="form-control searchinputAF" type="text" placeholder="Search ... " name="search"/>

                <Link to='/chatMes' >
                 <figure>
                    <img src={require('../../../images/mess.jpg')}  style={{width:'23px' , height:'23px'}}/>
                    <figcaption><b style={{color:'white' , fontSize:'10px'}}>Chats</b></figcaption>
                   </figure>
                  </Link>

                  <Link to='/stuNotification' >
                  <figure>
                    <img src={require('../../../images/noti.png')}  style={{width:'auto' , height:'25px'}}/>
                    <figcaption><b style={{color:'white' , fontSize:'11px'}}>Notification</b></figcaption>
                   </figure>
                  </Link>

                  <Link to='/stuFavourite' >
                  <figure>
                    <img src={require('../../../images/fav.png')}  style={{width:'auto' , height:'25px'}}/>
                    <figcaption><b style={{color:'white' , fontSize:'11px'}}>Favourite</b></figcaption>
                   </figure>
                  </Link>

                  <Link to="/stuNewsFeed" >
                    <figure>
                            <img style={{width:'auto' , height:'25px'}} src={require('../../../images/nf.png')}/>
                            <figcaption><b style={{color: 'white' , fontSize:'11px'}} > Categories </b> </figcaption>
                    </figure>
                    </Link>

                    {/* <Link to="/stuReminder" >
                    <figure>
                        <img style={{width:'auto' , height:'25px'}} src={require('../../../images/rem.jpg')} />
                        <figcaption><b style={{color: 'white' , fontSize:'11px'}} > Reminder </b> </figcaption>
                    </figure>
                    </Link> */}

                    <Link to="/stuSendComplain" >
                    <figure >
                    <img style={{width:'auto' , height:'25px'}} src={require('../../../images/comp.png')} />
                    <figcaption><b style={{color: 'white' , fontSize:'11px'}} > Complain </b> </figcaption>
                    </figure>
                    </Link> 

                   <Link to="/stuViewOrg">
                    <figure >
                        <img style={{width:'auto' , height:'25px'}} src={require('../../../images/org.png')} />
                        <figcaption><b style={{color: 'white' , fontSize:'11px'}} > Organization </b> </figcaption>
                    </figure> 
                    </Link>
                    
                    <Link to="/stuAchievements">
                     <figure>
                            <img style={{width:'auto' , height:'25px'}} src={require('../../../images/award.png')} />
                            <figcaption><b style={{color: 'white' , fontSize:'11px'}} > Achievements </b> </figcaption>
                     </figure>
                     </Link>

                     <Link to="/stuProfile"> 
                    <figure>
                     <img style={{width:'auto' , height:'25px'}} src={require('../../../images/user.jpg')}/> 
                        <figcaption> <b style={{color:'white' , fontSize:'11px'}}> Set Profile </b> </figcaption>
                    </figure>
                    </Link>

                    <Link to='/' >
                    <figure>
                        <img src={require('../../../images/logoff.png')}  style={{width:'auto' , height:'25px'}}/>
                        <br/>
                        <figcaption> <b style={{color:'white' , fontSize:'11px'}}> Signout </b> </figcaption>
                    </figure>
                    </Link>
        </div>

       

               <div  className="mainAF">
               {
           
                      JobsNF.map((val , index ) => {
                       return(
                        <div className="row col-lg SAFdyanmicDiv"  >
                            <div className="col-md-5" style={{margin:'5px auto'}}>
                              <div style={{textAlign:'left' }}>
                                  {/* <img  className="SAFmimage" src={val.logo}/>
                                  <p className="SAForgnme">{val.orgName}</p> */}
                                  <figure>
                                     <img  style={{width:'50px' , height:'50px'}} src={val.logo}/> 
                                     <figcaption style={{fontSize:'14px'}}><b>{val.orgName}</b></figcaption>
                                </figure>
                              </div>
                               <h6 className="text-center" style={{color:'rgb(20, 194, 224)' , marginTop:'10px'}} > &nbsp; {val.subject } </h6>              
                               <hr/>
                               <div style={{border:'solid 1px rgb(20, 194, 224)',borderRadius:'3px' , minWidth:'230px'}}>
                                   <img style={{ minWidth:'225px', width:'100%' , height:'170px'}} src={val.Jimg}/>
                               </div>
                            </div>
 

                              <div className="col-md-4 SAFddiv3">
                              <p style={{fontSize:'13px'}}> 
                              <b> Last Date : </b> {val.date} <br/> 
                              <b> Category : </b> {val.category} <br/>
                              <b> Event Type : </b> {val.type} <br/>
                              <b> Work Experienced : </b> {val.experience}   
                              <hr/>
                             </p>
                            

                               <p>
                               <p style={{fontSize:'12px'}}><b>Description</b></p>
                               <p className="SAFdesDiv">
                               <p  style={{height:'100px' , overflowY:'scroll' , fontSize:'12px'}} className="scrollbar square scrollbar-lady-lips thin" >{val.description} </p>
                               </p>   
                               {/* <b> Attachament Details </b> <br/>
                                    No any Attachment Available 
                               <hr/> */}
                               </p>
                             <div style={{textAlign:'center'}}>  
                             <hr/>

                             <figure style={{display:'inline-block'}}>
                                <img style={{width:'25px' , height:'25px'}} src={require('../../../images/rem.jpg')} />
                                <figcaption style={{fontSize:'10px'}}><b> Reminder </b> </figcaption>
                            </figure>

                            &nbsp; &nbsp;
                            <figure style={{display:'inline-block'}} onClick={(e)=>this.viewProf(index)}>
                                <img  style={{width:'25px' , height:'25px'}} src={require('../../../images/user.jpg')}/> 
                                <figcaption style={{fontSize:'10px'}}><b> Profile</b></figcaption>
                            </figure>

                            &nbsp; &nbsp;
                            <figure style={{display:'inline-block'}} onClick={(e)=>this.addFav(index)}>
                            <img src={require('../../../images/fav.png')}  style={{width:'25px' , height:'25px'}}/>
                            <figcaption style={{fontSize:'10px'}}><b>Favourite</b></figcaption>
                            </figure>

                            {/* &nbsp; &nbsp;
                            <figure style={{display:'inline-block'}}>
                            <img src={require('../../../images/download.png')}  style={{width:'25px' , height:'25px'}}/>
                            <figcaption style={{fontSize:'10px'}}><b>Download</b></figcaption>
                            </figure> */}

                             </div>

                              </div>
                              

                           </div>
                       )
                   })
               }
           </div>
            {/* </div>      */}
        </div>
      
    );
  }
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
  
  export default connect(mapStateToProp, mapDispatchToProp)(studentAfterLogin);
  