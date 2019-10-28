import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './ViewAchievementsT.css';
import '../../../css/scrollbar.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import { Navbar , Nav , NavDropdown , Form , FormControl } from 'react-bootstrap';
import Modal from 'react-responsive-modal';
import firebase from '../../../config/firebase.js'
import '../../Loader/loader.css'



import {Button} from '../../../components/button/button.js'

class ViewAchievementsT extends Component {
  
  constructor() {
    super();

    this.state = {
        myNotifications:[],
        open:false
    }
  }

componentDidMount(){
  this.addData();
}
  addData(){
      const{myNotifications}=this.state;
      console.log('aaaa')
      myNotifications.push({ id:'awexgbt' ,logo:require('../../../images/ssuet.png') , orgName:'SSUET' , depart:'SE' ,  subject:'Seminar on AI' , date:'12-4-2018' })
      myNotifications.push({ id:'1we4hji' ,logo:require('../../../images/oracle.png')  , orgName:'App Bakers' , depart:'CE'  , subject:'Job Available for full stack Developer' , date:'12-4-2018' })
      myNotifications.push({ id:'dfmk30f' ,logo:require('../../../images/decima.png')  , orgName:'Decima.AI' , depart:'SE'  ,  subject:'Internships Available for full Software Engineer' , date:'12-7-2018'  })
      this.setState({myNotifications})
    }

    onOpenModal = () => {
      this.setState({ open: true });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };
   


  render(){
      const {myNotifications , open} = this.state;
      return(
          <div>

          <Modal open={open} onClose={this.onCloseModal} center>
          <div  style={{borderRadius:'10px' , padding:'20px'}}>
          <h6 style={{color:'rgb(20, 194, 224)' , textAlign:'center'}} > <b> Filters </b> </h6>
          <hr/>
         
          <div className="form-group mx-1">
                <label  style={{fontSize:'12px' , textAlign:'left' , display:'block'}} ><b style={{color:'rgb(20, 194, 224)'}}>Type</b></label>
                <select style={{fontSize:'12px'}} className="form-control" onChange={this.selectedAccountType} >
                <option style={{fontSize:'12px'}}  value="student">ALL</option>
                <option value="student">Certificate</option>
                <option value="teacher">Diploma</option>
                <option value="teacher">Degree</option>
                </select>
            </div> 
                  
            <div className="form-group mx-1">
                <label  style={{fontSize:'12px' , textAlign:'left' , display:'block'}} ><b style={{color:'rgb(20, 194, 224)'}}>Speciality</b></label>
                <select style={{fontSize:'12px'}} className="form-control" onChange={this.selectedAccountType} >
                <option style={{fontSize:'12px'}}  value="student">ALL</option>
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

            <div className="row">
            <Button style={{margin:'2px auto'}} type="submit" text="Apply" />
            &nbsp;
            <Button  style={{margin:'2px auto'}} type="submit" text="Clear All" />
            </div>

          </div>
          </Modal>


             <Navbar  expand="lg"  style={{height:'auto' , width:'100%' ,  marginLeft:'0px' , background:'rgb(20, 194, 224)'}}>
            <Navbar.Brand>
                <img  onClick={()=>this.props.history.goBack()} style={{width:'30px' , height:'30px' }}  src={require('../../../images/back.png')} />
                <img style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
                
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              </Nav> 
              <Form inline style={{marginRight:'10%' , marginLeft:'10%' , textAlign:'center'}}>
                <FormControl style={{ width:'300px' , height:'30px' , fontSize:'12px' }}  type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
              <img onClick={this.onOpenModal} data-toggle="modal" data-target="#exampleModal"  style={{width:'20px' , height:'20px' , float:'right'}} src={require('../../../images/filter.png')}  />
            </Navbar.Collapse>
          </Navbar>  



              <div style={{textAlign:'center'}}>
                {
                     myNotifications.map((val , ind)=>{
                         return(
                            <div className="DivVAT">
                              <div style={{overflowY:'scroll' , height:'290px'}} className="scrollbar square scrollbar-lady-lips thin" >
                                <p style={{textAlign:'center'}}> <img style={{width:'60px' , height:'60px'}} src={val.logo}/> </p>
                                 <p style={{textAlign:'left' , fontSize:'12px'}}>
                                   <p style={{textAlign:'center' , fontSize:'13px'}}> <b style={{ fontSize:'13px' }}> {val.orgName}</b> <br/> </p> 
                                    <hr/>
                                    <b style={{ fontSize:'12px' }}> Department : </b> {val.depart}  <br/>
                                    <b style={{ fontSize:'12px' }}> Subject : </b>  {val.subject} <br/>
                                    <b style={{ fontSize:'12px' }}> Completion Date : </b>  {val.date} <br/>
                                    <b style={{ fontSize:'12px' }}> Organization Name : </b>  {val.date} <br/>
                                    <b style={{ fontSize:'12px' }}> Completion Date : </b>  {val.date} <br/>
                                    <b style={{ fontSize:'12px' }}> Website Link : </b>  {val.date} <br/>
                                    <b style={{ fontSize:'12px' }}> Achieved Skills :   {val.date} </b> <br/><br/>
                                    <p style={{textAlign:'center' , fontSize:'12px'}}> <b> Certificate Image </b> <br/> <img  className="imgVAT" /> </p>
                                    <Link to="/stuDynamicProfile"> <p style={{textAlign:'center'}}> <Button text="View Profile" type="text" /> </p> </Link>
                                 </p>
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

export default ViewAchievementsT;