import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './AddFavouriteT.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import {Button} from '../../../components/button/button.js'
import firebase from '../../../config/firebase.js'
import { connect } from 'react-redux';
import { Navbar} from 'react-bootstrap';


class TeacherAddFavourite extends Component {
  
  constructor() {
    super();

    this.state = {
        myFav:[]
    }
  }


  
  componentDidMount(){
    this.addData();
    this.validation();
}

validation(){
  var data = this.props.accounttype;
if(data.includes('Teacher')){
  this.props.history.index=0;
}else{
  Swal.fire('Some thing Went Wrong' , 'You need to login again to continue' , 'error');
  this.props.history.push("/");
}
}

        addData(){
          const {myFav} = this.state;
          var data = this.props.details;  
          firebase.database().ref(`Favourite/${data.empID}`).on("value", (snapshot)=> {
          if(snapshot.exists()){
            snapshot.forEach((childSnapshot)=> {
            var d = childSnapshot.val();
            var obj = {
            id : d.id ,
            logo : d.logo ,
            Jimg : d.Jimg ,
            orgName : d.orgName ,
            description : d.description ,
            date : d.date ,
            experience : d.experience,
            type : d.type ,
            cid : d.cid ,
            category : d.category ,
            subject : d.subject
            }
            myFav.push(obj);
            this.setState({myFav})
            })
          }
          })
        }  


deleteFav(i){
  const {myFav} = this.state;
  var data = this.props.details;  
  
  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        firebase.database().ref(`Favourite/${data.empID}/${myFav[i].id}`).set({});
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      }
    }) 
}

viewProf(i){
  const {myFav} = this.state;
  localStorage.setItem('orgID' , myFav[i].cid);
  this.props.history.push('./techViewOrganization')
 }
  // addData(){
  //   const{myFav}=this.state;
  //   myFav.push({ id:'awexgbt' ,logo:require('../../../images/ssuet.png') ,Jimg:require('../../../images/j1.jpg')  , orgName:'SSUET' , address:'nipa , Gulshan , Karachi' , subject:'Seminar on AI' , description:'The Distant Future - Ai and robots are far behind computers but it’ll only be a matter of time before they become as regular as cell phones are in our everyday life. - Ray Kurzweil has used Moore’s law (which describes the relentless exponential improvement in digital technology with uncanny accuracy) to calculate that desktop computers will have the same processing power as human brains by the year 2029, and that by 2045 artificial intelligence will reach a point where it is able to improve itself at a rate that far exceeds anything conceivable in the past. - Several futurists and science fiction writers have predicted that human beings and machines will merge in the future into Cyborgs that are more capable and powerful than either. This idea, called trans-humanism.' , date:'12-7-19' , websiteLink : 'ssuet.edu.pk' , type:'Seminar' })
  //   myFav.push({ id:'1we4hji' ,logo:require('../../../images/oracle.png'),Jimg:require('../../../images/j2.jpg')   , orgName:'App Bakers' , address:'near Expo Centre , Gulshan , Karachi' , subject:'Job Available for full stack Developer' , description:'We are looking for a highly skilled computer programmer who is comfortable with both front and back end programming. Full Stack Developers are responsible for developing and designing front end web architecture, ensuring the responsiveness of applications and working alongside graphic designers for web design features, among other duties. Full Stack Developers will be required to see out a project from conception to final product, requiring good organizational skills and attention to detail.' , date:'30-6-19' , websiteLink : 'www.AppBakers.com' , type:'Job' })
  //   myFav.push({ id:'dfmk30f' ,logo:require('../../../images/decima.png'),Jimg:require('../../../images/j3.png')  , orgName:'Decima.AI' , address:'DHA phase 5 , Karachi' , subject:'Internships Available for full Software Engineer' , description:'We are looking for a  skilled computer programmer who is comfortable with java programming. Please Send your resume at Decima@gmail.com ' , date:'27-6-19' , websiteLink : 'www.DecimaAI.com' , type:'internship' })

  // }


  render(){

    const {myFav} = this.state;
  // this.addData()
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
                                            <b> Work Experienced : </b> {val.category}   
                                        </p>
                                            
                                        <div style={{textAlign:'center'}}>                                        
                                            <hr/>
                                            <figure style={{display:'inline-block'}} onClick={(e)=>this.viewProf(index)}>
                                            <img src={require('../../../images/profile.png')}  style={{width:'23px' , height:'23px'}}/>
                                            <figcaption style={{fontSize:'10px'}} ><b>Profile</b></figcaption>
                                            </figure>
                                             &nbsp; &nbsp;

                                            <figure style={{display:'inline-block'}} onClick={(e)=>this.deleteFav(index)}>
                                            <img src={require('../../../images/delete.png')}  style={{width:'23px' , height:'23px'}}/>
                                            <figcaption style={{fontSize:'10px'}} ><b>Delete</b></figcaption>
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

function mapStateToProp(state) {
  return ({
    details: state.root.teacherInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(TeacherAddFavourite);