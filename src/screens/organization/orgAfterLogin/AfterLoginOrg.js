import React, { Component } from 'react';
import '../../../css/bootstrap.min.css';
import './AfterLoginOrg.css';
import '../../../css/scrollbar.css';
import {Link} from 'react-router-dom'; 
import {Button} from '../../../components/button/button.js'
import { Navbar , Nav , NavDropdown , Form , FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import firebase from '../../../config/firebase.js'
import '../../Loader/loader.css'

// history.pushState(null, null, location.href);
// window.onpopstate = function () {
//   swal.filr('done' ,'press Signout button to exit or signout');
//     history.go(1);
// };


class orgAfterLogin extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
           chatList:[] ,
           message:[]
         }
      }

      componentDidMount(){
        this.showMessage();
      }

      showMessage(){
        const {message} = this.state;
        var data = this.props.details;
        firebase.database().ref(`/Messages/${data.id}`).on("value", (snapshot)=> {
          if(snapshot.exists()){
          snapshot.forEach((childSnapshot)=> {
           var obj = {
            message : childSnapshot.val().description ,
            from : childSnapshot.val().from 
          }
          message.push(obj);
          this.setState({message})
          })
        }
        })
      }

   


//  signout(){

//     firebase.auth().signOut()
//     .then(function() {
//       this.props.organizationInfo('none')
//       this.props.history.push('/')
//     })
//     .catch(function(error) {
//       Swal.fire('Oops' , error , 'error');
//     });    
// }
    
     

      sendMessage(){
        var data = this.props.details;

        var sub = document.getElementById('subject').value;
        var des = document.getElementById('des').value;
        
        if(sub.length<10){
          Swal.fire('Ooops' , 'Subject should contain 10 or more characters ' , 'error')
        }
        else if(des.length<20){
          Swal.fire('Ooops' , 'Description should contain 20 or more characters ' , 'error')
        }
        else{

        var obj = {
          id:data.id ,
          subject : sub ,
          description : des ,
          from : 'organization' , 
          name : data.name
        }


        firebase.database().ref("Messages/"+data.id).push().set(obj);
        Swal.fire('Done' , 'Message Sent Succesfully')
       }
      }
      
      

  render() {
    const { chatList , message } = this.state;
    
    return (
        
      <div >

        <div className="sticky-top">
        <Navbar  expand="lg"   style={{height:'auto' , width:'100%' ,  marginLeft:'0px' , background:'rgb(20, 194, 224)'}}>
            <Navbar.Brand>
                <img style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              </Nav> 

              <Form inline style={{marginRight:'7%' , marginLeft:'7%' , textAlign:'center'}}>
                <FormControl style={{ width:'400px' , height:'8%' , fontSize:'10px' }}  type="text" placeholder="Search" className="mr-sm-2" />
              </Form>


              <Nav.Link>
              <Link to='/' > 
                <figure>
                  <img src={require('../../../images/userimage.png')} style={{width:'30px' , height:'30px' , marginLeft:'10px'}}/>
                  <figcaption style={{color:'white' , fontSize:'13px'}}><b> Signout </b> </figcaption>
                </figure>
                </Link>
                
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </div> 


        <div className="sidenavOAF">
            <p  className="OAFp" > <img  className="OAFuimg" src={this.props.details.imgURL} />  </p>
            <p style={{textAlign:'center'}}>
                {/* <h6> <b> Ubaid Arif </b> </h6> */}
                <p  style={{fontSize:'12px'}}> <b> {this.props.details.name} </b> </p>
                <hr/>
                <p style={{fontSize:'12px' , marginBottom:'2px'}}> <b>Address : </b> {this.props.details.address} </p>
                <p style={{fontSize:'12px' , marginBottom:'2px'}}> <b>Email : </b> {this.props.details.email} </p>
                <p style={{fontSize:'12px' , marginBottom:'2px'}}> <b>Phone : </b> {this.props.details.number}</p>
            </p>
             
        </div>

   
        <div className="mainDivOAF">

            <div className="col-lg  btndivOAF">
                <Link to='/orgAddJob'>
                <div className="smbtn1OAF"> 
                  <p className="row">
                    <img className="smbtn_img_OAF" src={require('../../../images/project.png')} />
                    <p>
                      <h6 style={{textAlign:'left' , paddingTop:'15px'}}> <b style={{ color:'white' , margin:'5px' , fontSize:'12px'  }}> 0 post </b> </h6>
                      <h6 className="text-center" style={{marginTop:'20px' , marginLeft:'15px' , color:'white' }}> + Add Post </h6>  
                    </p>
                  </p> 
                </div>
                </Link>

                <Link to='/orgProfile'>
                <div className="smbtn2OAF"> 
                 <p className="row">
                    <img className="smbtn_img_OAF" src={require('../../../images/user.png')} />
                    <p>
                      <h6 style={{textAlign:'left' , paddingTop:'15px' , fontSize:'12px'}}> <b style={{color:'white', margin:'5px'  }}> 10% Complete </b> </h6>
                      <h6 className="text-center" style={{marginTop:'20px' , marginLeft:'15px' , color:'white'}}> Set Profile </h6>  
                    </p>
                  </p>   
                </div>
                </Link>
                
                
                <Link to='/orgViewAchievements'>
                <div className="smbtn3OAF"> 
                 <p className="row">
                    <img className="smbtn_img_OAF" src={require('../../../images/award.png')} />
                    <p>
                    <h6 style={{textAlign:'left' , paddingTop:'15px' , fontSize:'12px'}}> <b style={{color:'white', margin:'5px'  }}> 3+ Achievement  </b> </h6>
                    <h6 className="text-center" style={{marginTop:'20px' , marginLeft:'15px' , color:'white'}}> Achievements </h6>  
                  </p>
                  </p> 
                </div>
                </Link>
                
                <Link to='/chatMes'>
                <div className="smbtn4OAF">
                  <p className="row">
                    <img className="smbtn_img_OAF" src={require('../../../images/mess.jpg')} />
                    <p>
                    <h6 style={{textAlign:'left' , paddingTop:'15px' , fontSize:'12px'}}> <b style={{color:'white', margin:'5px'  }}> 134+ Chat </b> </h6>
                    <h6 className="text-center" style={{marginTop:'20px' , marginLeft:'15px' , color:'white'}}> Message </h6>  
                  </p>
                  </p> 
                </div>
                </Link>
        
              </div>
            

            <div className="formDivOAF row">

              <div  className="formDiv1OAF col-xl" > 
                  <h6  className="sticky-top h4smdivORG"> <b> Contact to Admin </b> </h6>
                  <hr/>
                   <div className="col-auto">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px'}}>S</div>
                      </div>
                      <input style={{fontSize:'12px' }} type="text" className="form-control" id="subject" placeholder="Write your Subject"/>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text" style={{width:'40px'}}>D</div>
                      </div>
                      <input type="text" style={{fontSize:'12px' , height:'90px'}} className="form-control" id="des" placeholder="Write Description in Details"/>
                    </div>
                  </div>

                  <Button text='submit' type='submit' onClick={()=>this.sendMessage()} />
              </div>

              <div  className="formDiv2OAF col-xl scrollbar square scrollbar-lady-lips thin" style={{overflowY:'scroll'}} > 
                 <h6  className="sticky-top h4smdivORG"> <b> Messages </b> </h6>
                 <hr/>
                 {
                   message.map((val , index ) => {
                    return(
                      <div className="row scrollbar square scrollbar-lady-lips thin" style={{border:'solid 2px rgb(27, 180, 207)' , padding:'5px' , margin:'15px' , height:'80px' , overflowY:'scroll'}}>
                        {/* <img  style={{width:'40px' , height:'40px'}} src={require('../../../images/user.png')}/> */}
                        <p  style={{marginLeft:'20px'  , fontSize:'15px' , textAlign:'left' }}>
                          <h6 style={{fontSize:'13px'}} >
                          <b>From:</b> {val.from} <br/>
                          <b>Message:</b> {val.message} <br/>
                          </h6>

                        </p>
                      </div>
                    )
                 })
                 }
              </div>


              <div  className="formDiv2OAF col-xl scrollbar square scrollbar-lady-lips thin" style={{overflowY:'scroll'}} > 
                 <h6 className="sticky-top h4smdivORG"> <b> Notification  </b> </h6>
                 <hr/>
                 {
                   message.map((val , index ) => {
                    return(
                      <div className="row scrollbar square scrollbar-lady-lips thin" style={{border:'solid 2px rgb(27, 180, 207)' , padding:'5px' , margin:'15px' , height:'80px' , overflowY:'scroll'}}>
                    
                        {/* <img  style={{width:'80px' , height:'80px'}} src={require('../../../images/user.png')}/> */}
                        <p style={{marginLeft:'20px' , marginTop:'15px' , height:'60px'}}>
                          <h6 style={{fontSize:'15px'}}><b>Notification: </b>{'Dear Organization ! On 15th November , there is exhibation of Final Year Project . If You are Interested in then contact to admin'}</h6>
                          {/* <p style={{float:'right'}}> <Button text='chat' type='submit' /> </p> */}
                        </p>
                      </div>
                    )
                 })
                 }
              </div>
            </div>

          </div>
       </div>     
    );
  }
}

function mapStateToProp(state) {
  return ({
    details: state.root.  organizationInfo ,
    accounttype : state.root.accountType
  })
}

function mapDispatchToProp(dispatch) {
  return ({ 
    // organizationInfo :(info3)=>{ dispatch(OrganizationDetail(info3))} ,
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(orgAfterLogin);