import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './AddFavouriteT.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import {Button} from '../../../components/button/button.js'


import { Navbar} from 'react-bootstrap';


class TeacherAddFavourite extends Component {
  
  constructor() {
    super();

    this.state = {
        myFav:[]
    }
  }

  addData(){
    const{myFav}=this.state;
    myFav.push({ id:'awexgbt' ,logo:require('../../../images/ssuet.png') ,Jimg:require('../../../images/j1.jpg')  , orgName:'SSUET' , address:'nipa , Gulshan , Karachi' , subject:'Seminar on AI' , description:'The Distant Future - Ai and robots are far behind computers but it’ll only be a matter of time before they become as regular as cell phones are in our everyday life. - Ray Kurzweil has used Moore’s law (which describes the relentless exponential improvement in digital technology with uncanny accuracy) to calculate that desktop computers will have the same processing power as human brains by the year 2029, and that by 2045 artificial intelligence will reach a point where it is able to improve itself at a rate that far exceeds anything conceivable in the past. - Several futurists and science fiction writers have predicted that human beings and machines will merge in the future into Cyborgs that are more capable and powerful than either. This idea, called trans-humanism.' , date:'12-7-19' , websiteLink : 'ssuet.edu.pk' , type:'Seminar' })
    myFav.push({ id:'1we4hji' ,logo:require('../../../images/oracle.png'),Jimg:require('../../../images/j2.jpg')   , orgName:'App Bakers' , address:'near Expo Centre , Gulshan , Karachi' , subject:'Job Available for full stack Developer' , description:'We are looking for a highly skilled computer programmer who is comfortable with both front and back end programming. Full Stack Developers are responsible for developing and designing front end web architecture, ensuring the responsiveness of applications and working alongside graphic designers for web design features, among other duties. Full Stack Developers will be required to see out a project from conception to final product, requiring good organizational skills and attention to detail.' , date:'30-6-19' , websiteLink : 'www.AppBakers.com' , type:'Job' })
    myFav.push({ id:'dfmk30f' ,logo:require('../../../images/decima.png'),Jimg:require('../../../images/j3.png')  , orgName:'Decima.AI' , address:'DHA phase 5 , Karachi' , subject:'Internships Available for full Software Engineer' , description:'We are looking for a  skilled computer programmer who is comfortable with java programming. Please Send your resume at Decima@gmail.com ' , date:'27-6-19' , websiteLink : 'www.DecimaAI.com' , type:'internship' })

  }


  render(){

    const {myFav} = this.state;
    this.addData()
      return(
          <div>

            <Navbar  expand="md"  style={{ marginLeft:'0px' ,  height:'auto' , width:'100%' , background:'rgb(20, 194, 224)'}}>     
                <Navbar.Brand>
                    <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' }} src={require('../../../images/back.png')} />
                    <img  style={{height:'70px' , width:'110px' }} src={require('../../../images/logo.png')}/> 
                </Navbar.Brand>
            </Navbar> 
 
               
                  <div  className="col-md-12 newsDiv1FVT" >
                      {  
                             myFav.map((val , index ) => {
                                 console.log('chala')
                              return(
                                  <div className="row  dyanmicDivFVT"  >
                                     
                                     <div className="ddiv2FVT">
                                         <img  className="mimageFVT" src={val.logo}/>
                                         <br/>
                                         <h6 className="orgnmeFVT">{val.orgName}</h6>
                                         <h6  style={{color:'rgb(20, 194, 224)' , width:'200px'}} > {val.subject } </h6>
                                      </div>

                                      <div style={{margin:'10px auto'}}>   
                                      <p style={{fontSize:'13px'}}> 
                                      <b> Last Date : </b> {val.date} <br/> 
                                      <b> Category : </b> {val.websiteLink} <br/>
                                      <b> Event Type : </b> {val.type} <br/>
                                      <b> Work Experienced : </b> {val.address}   
                                    </p>
                                    
                                        <div style={{textAlign:'center'}}>                                        
                                            <hr/>
                                           
                                            <figure style={{display:'inline-block'}}>
                                            <img src={require('../../../images/profile.png')}  style={{width:'23px' , height:'23px'}}/>
                                            <figcaption style={{fontSize:'10px'}} ><b>Profile</b></figcaption>
                                            </figure>
                                             &nbsp; &nbsp;

                                            <figure style={{display:'inline-block'}}>
                                            <img src={require('../../../images/delete.png')}  style={{width:'23px' , height:'23px'}}/>
                                            <figcaption style={{fontSize:'10px'}} ><b>Delete</b></figcaption>
                                            </figure>


                                            &nbsp; &nbsp;
                                            <figure style={{display:'inline-block'}}>
                                            <img src={require('../../../images/download.png')}  style={{width:'20px' , height:'20px'}}/>
                                            <figcaption style={{fontSize:'10px'}}><b>Download</b></figcaption>
                                            </figure>

                                            <hr/> 
                                        </div>
                                      </div>

                                     <div style={{ margin:'10px auto', border:'solid 1px black' , width:'200px' , height:'130px'}}  >
                                     <img src={val.Jimg} style={{width:'195px' , height:'125px'}}  />
                                     </div>   

                                     <div style={{margin:'10px auto' , textAlign:'center' , padding:'10px' ,  border:'solid 1px rgb(20, 194, 224)' , borderRadius:'5px'}}>
                                      <p><b>Description</b></p>
                                      <p className="desDivFVT scrollbar square scrollbar-lady-lips thin"> {val.description} </p>
                                      </div>
                                  </div>
                              )
                          })
                      }
                  </div>

            </div>
      )
  }

}

export default TeacherAddFavourite;