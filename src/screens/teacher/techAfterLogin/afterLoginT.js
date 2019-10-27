import React, { Component } from 'react';
import '../../../css/bootstrap.min.css';
import './afterLoginT.css';
import '../../../css/scrollbar.css';
import {Link} from 'react-router-dom'; 
import {Button} from '../../../components/button/button.js'
// import { CustomErrorComponent } from 'custom-error';



class TeacherAfterLogin extends Component {

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

      
      data(){
        const {arr1 , arr2 , JobsNF} = this.state;

        JobsNF.push({ id:'awexgbt' ,logo:require('../../../images/ssuet.png') , Jimg:require('../../../images/j1.jpg') , orgName:'SSUET' , address:'nipa , Gulshan , Karachi' , subject:'Seminar on AI' , description:'The Distant Future - Ai and robots are far behind computers but it’ll only be a matter of time before they become as regular as cell phones are in our everyday life. - Ray Kurzweil has used Moore’s law (which describes the relentless exponential improvement in digital technology with uncanny accuracy) to calculate that desktop computers will have the same processing power as human brains by the year 2029, and that by 2045 artificial intelligence will reach a point where it is able to improve itself at a rate that far exceeds anything conceivable in the past. - Several futurists and science fiction writers have predicted that human beings and machines will merge in the future into Cyborgs that are more capable and powerful than either. This idea, called trans-humanism.' , date:'12-7-19' , websiteLink : 'ssuet.edu.pk' , type:'Seminar' })
        JobsNF.push({ id:'1we4hji' ,logo:require('../../../images/oracle.png') , Jimg:require('../../../images/j2.jpg') , orgName:'App Bakers' , address:'near Expo Centre , Gulshan , Karachi' , subject:'Job Available for full stack Developer' , description:'We are looking for a highly skilled computer programmer who is comfortable with both front and back end programming. Full Stack Developers are responsible for developing and designing front end web architecture, ensuring the responsiveness of applications and working alongside graphic designers for web design features, among other duties. Full Stack Developers will be required to see out a project from conception to final product, requiring good organizational skills and attention to detail.' , date:'30-6-19' , websiteLink : 'www.AppBakers.com' , type:'Job' })
        JobsNF.push({ id:'dfmk30f' ,logo:require('../../../images/decima.png') , orgName:'Decima.AI' , Jimg:require('../../../images/j3.png') , address:'DHA phase 5 , Karachi' , subject:'Internships Available for full Software Engineer' , description:'We are looking for a  skilled computer programmer who is comfortable with java programming. Please Send your resume at Decima@gmail.com ' , date:'27-6-19' , websiteLink : 'www.DecimaAI.com' , type:'internship' })
    
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

        <div className="sidenavTAF">
            <p  className="TAFp" > <img  className="TAFuimg" />  </p>
            <p style={{textAlign:'center'}}>
                <h6> <b> Asad </b> </h6>
                <p style={{fontSize:'12px'}}> Software Engineering Department </p>
            </p>
            <hr/>
           <p style={{textAlign:'center' , fontSize:'12px'}}>  View  your profile Detail here !</p>
           <p style={{textAlign:'center'}}><Link to="/techViewProfile" > <Button text='View Profile' type='submit' /> </Link></p>
             
        </div>

    <div className="div2TAF" >      
            <div>
                <h6 style={{textAlign:'center' , color:'rgb(47, 174, 212)'}}><b>Reminder</b></h6> 
            </div>
            
            <div  className="div4TAF ">
                 <div className="scrollbar square scrollbar-lady-lips thin" style={{overflowY:'scroll' , height:'75vh'}}> 
                    <div id="div4id">
                    {
                        arr2.map((val , ind)=>{
                        return(
                           <div className="RemindDivTAF">
                              <p style={{textAlign:'center' , fontSize:'12px'}}> <img style={{width:'40px' , height:'40px'}} src={val.logo}/> <b> {val.name}</b> </p>
                              <hr/>
                              <p  style={{color:'gray' , fontSize:'11px'}}>  {val.subject} <br/> Date : <b style={{color:'black'}}>{val.Date} </b> </p>
                              <button className="div4btnTAF"> View Details</button>          
                           </div>
                            )
                         })
                    }
                    </div>
                 </div>
            </div>      
        </div>

          

        <div className="topnavTAF  div1AF sticky-top scrollbar square scrollbar-lady-lips thin">

               
                <img className="sidelogoTAF" src={require('../../../images/logo.png')}/> 
                <input className="form-control searchinputTAF" type="text" placeholder="Search ... " name="search"/>

                <Link to='/chatMes' >
                  <figure>
                    <img src={require('../../../images/mess.jpg')}  style={{width:'23px' , height:'23px'}}/>
                    <figcaption ><b style={{color:'white' , fontSize:'10px'}}>Chats</b></figcaption>
                   </figure>
                  </Link>

                  <Link to='/techViewNotification' >
                  <figure>
                    <img src={require('../../../images/noti.png')}  style={{width:'23px' , height:'23px'}}/>
                    <figcaption ><b style={{color:'white' , fontSize:'10px'}}>Notification</b></figcaption>
                   </figure>
                  </Link>

                  <Link to='/techAddFavourite' >
                  <figure>
                    <img src={require('../../../images/fav.png')}  style={{width:'23px' , height:'23px'}}/>
                    <figcaption ><b style={{color:'white' , fontSize:'10px'}}>Favourite</b></figcaption>
                   </figure>
                  </Link>

                  <Link to="/techViewNewsFeed" >
                    <figure>
                            <img src={require('../../../images/nf.png')} style={{width:'23px' , height:'23px'}}/>
                            <figcaption><b style={{color:'white' , fontSize:'10px'}} > Categories </b> </figcaption>
                    </figure>
                    </Link>

                    <Link to="/techAddJob" >
                    <figure>
                        <img src={require('../../../images/addjob.png')} style={{width:'23px' , height:'23px'}} />
                        <figcaption><b style={{color:'white' , fontSize:'10px'}} > Add Job</b> </figcaption>
                    </figure>
                    </Link>

                    <Link to="/techComplain" >
                    <figure >
                    <img src={require('../../../images/comp.png')} style={{width:'23px' , height:'23px'}} />
                    <figcaption><b style={{color:'white' , fontSize:'10px'}} > Complain </b> </figcaption>
                    </figure>
                    </Link> 

                   <Link to="/techViewOrganization">
                    <figure >
                        <img src={require('../../../images/org.png')} style={{width:'23px' , height:'23px'}} />
                        <figcaption><b style={{color:'white' , fontSize:'10px'}} > Organization </b> </figcaption>
                    </figure> 
                    </Link>
                    
                    <Link to="/techViewAchievements">
                     <figure>
                            <img style={{width:'23px' , height:'23px'}} src={require('../../../images/award.png')} />
                            <figcaption><b style={{color:'white' , fontSize:'10px'}} > Achievements </b>  </figcaption>
                     </figure>
                     </Link>

                     <Link to="/techprofile"> 
                    <figure>
                    <img  style={{width:'23px' , height:'23px'}} src={require('../../../images/user.jpg')}/> 
                        <figcaption><b style={{color:'white' , fontSize:'10px'}}>Set Profile </b> </figcaption>
                    </figure>
                    </Link>

                    <Link to='/' >
                    <figure>
                        <img src={require('../../../images/logoff.png')} style={{width:'23px' , height:'23px'}}/>
                        <br/>
                        <figcaption><b style={{color:'white' , fontSize:'10px'}}> Signout </b> </figcaption>
                    </figure>
                    </Link>
        </div>

       

               <div  className="mainTAF">
               {
           
                      JobsNF.map((val , index ) => {
                       return(
                        <div className="row col-lg TAFdyanmicDiv"  >
                            <div className="col-md-5" style={{margin:'5px auto'}}>
                              <div style={{textAlign:'left' }}>
                                  {/* <img  className="SAFmimage" src={val.logo}/>
                                  <p className="SAForgnme">{val.orgName}</p> */}
                                  <figure>
                                     <img  style={{width:'50px' , height:'50px'}} src={val.logo}/> 
                                     <figcaption style={{fontSize:'12px'}}><b>{val.orgName}</b></figcaption>
                                </figure>
                              </div>
                               <h6 className="text-center" style={{color:'rgb(20, 194, 224)' , marginTop:'10px'}} > &nbsp; {val.subject } </h6>              
                               <hr/>
                               <div style={{border:'solid 1px rgb(20, 194, 224)',borderRadius:'3px' , minWidth:'230px'}}>
                                   <img style={{ minWidth:'225px', width:'100%' , height:'170px'}} src={val.Jimg}/>
                               </div>
                            </div>
 

                              <div className="col-md-4 TAFddiv3">
                              <p style={{fontSize:'13px'}}> 
                                  <b> Last Date : </b> {val.date} <br/> 
                                  <b> Category : </b> {val.websiteLink} <br/>
                                  <b> Event Type : </b> {val.type} <br/>
                                  <b> Work Experienced : </b> {val.address}   
                                  <hr/>
                                </p>
                                

                               <p>
                               <p style={{fontSize:'12px'}}><b>Description</b></p>
                               <p className="TAFdesDiv">
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
                            <figure style={{display:'inline-block'}}>
                                <img  style={{width:'25px' , height:'25px'}} src={require('../../../images/user.jpg')}/> 
                                <figcaption style={{fontSize:'10px'}}><b> Profile</b></figcaption>
                            </figure>

                            &nbsp; &nbsp;
                            <figure style={{display:'inline-block'}}>
                            <img src={require('../../../images/fav.png')}  style={{width:'25px' , height:'25px'}}/>
                            <figcaption style={{fontSize:'10px'}}><b>Favourite</b></figcaption>
                            </figure>

                            &nbsp; &nbsp;
                            <figure style={{display:'inline-block'}}>
                            <img src={require('../../../images/download.png')}  style={{width:'25px' , height:'25px'}}/>
                            <figcaption style={{fontSize:'10px'}}><b>Download</b></figcaption>
                            </figure>

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

export default TeacherAfterLogin;
