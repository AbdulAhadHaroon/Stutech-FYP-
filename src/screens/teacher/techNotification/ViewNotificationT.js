import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './ViewNotificationT.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import { Navbar} from 'react-bootstrap';

class TechViewNotification extends Component {
  
  constructor() {
    super();

    this.state = {
        myNotifications:[]
    }
  }

  addData(){
      const{myNotifications}=this.state;
      myNotifications.push({ id:'awexgbt' ,logo:require('../../../images/stuuser.png') , orgName:'SSUET' , subject:'Seminar on AI' , date:'12-4-2018' , time:'1:00 pm' })
      myNotifications.push({ id:'1we4hji' ,logo:require('../../../images/stuuser.png')  , orgName:'App Bakers'  , subject:'Job Available for full stack Developer' , date:'12-4-2018' , time:'10:00am'})
      myNotifications.push({ id:'dfmk30f' ,logo:require('../../../images/stuuser.png')  , orgName:'Decima.AI'  , subject:'Internships Available for full Software Engineer' , date:'12-7-2018' , time:'11:30am'  })

    }


  render(){
      const {myNotifications} = this.state;
      this.addData();
      return(
          <div className="mainNotiDiv">

            <Navbar  expand="md"  style={{ marginLeft:'0px' ,  height:'auto' , width:'100%' , background:'rgb(20, 194, 224)'}}>     
                <Navbar.Brand>
                    <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' }} src={require('../../../images/back.png')} />
                    <img  style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
                </Navbar.Brand>
            </Navbar>  



              <div style={{textAlign:'center'}}>
                {
                     myNotifications.map((val , ind)=>{
                         return(
                            <div className="notiDivVNT">
                               <p style={{textAlign:'center' , fontSize:'10px'}}> <img style={{width:'30px' , height:'30px'}} src={val.logo}/> <b> Message from Admin</b> </p>
                               <hr/>
                                <p style={{fontSize:'12px'}} > <b style={{fontSize:'12px'}}> Organization : </b>  {val.orgName} <br/> <b style={{fontSize:'12px'}}> Subject : </b>  {val.subject} <br/>  <b style={{fontSize:'12px'}}> Date : </b>  {val.date} <br/> <b style={{fontSize:'12px'}}> Time : </b>  {val.time} <br/> </p>
                               
                            </div>
                        )
                     })
             
                }
                </div>
            </div>
      )
  }

}

export default TechViewNotification;