import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './stuViewProfile.css';
import '../../../css/scrollbar.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import {Button} from '../../../components/button/button.js'
import { Navbar , Nav , NavDropdown , Form , FormControl } from 'react-bootstrap';

class StuViewProfile extends Component {
  
  constructor() {
    super();

    this.state = {
        skills:[] ,
        achievements:[],
        dataIndex : null

    }
  }

  addData(){
      const{skills , achievements}=this.state;
       skills.push({ id:'awexgbt' , skill:'Java'})
       skills.push({ id:'awexgbt' , skill:'Java script'})
       skills.push({ id:'awexgbt' , skill:'React.js'})   

       achievements.push({id:'1' , achieve:'complete android course'})
       achievements.push({id:'1' , achieve:'complete python course'})
       achievements.push({id:'1' , achieve:'complete react course'})
    }


  showFullData(e){
    const {dataIndex}  = this.state; 
   document.getElementById('adata').innerHTML = null
    this.setState({dataIndex:e})
  }  


  render(){
      const {skills , achievements} = this.state;
      this.addData();
      return(
          <div className="mainDivVO">
            
            <Navbar  expand="lg"  style={{height:'auto' , width:'100%' ,  marginLeft:'0px' , background:'rgb(20, 194, 224)'}}>
                <Navbar.Brand>
                    <img  onClick={()=>this.props.history.goBack()} style={{width:'30px' , height:'30px' }}  src={require('../../../images/back.png')} />
                    <img style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
                </Navbar.Brand>
          </Navbar>


          <div className="col-lg  div1SVP  row" >
             
             <div className="col-lg div2SVP">
                <p style={{textAlign:'center' , margin:'20px'}}> <img  className="img1SVP" /> </p>
                    <h6> <b style={{color:'rgb(47, 174, 212)'}}> Personal Information </b> </h6>
                    <p>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>{}<br/>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>PhoneNo&nbsp;&nbsp;&nbsp;:</b>{}<br/>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>{}<br/>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>{}<br/>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>DOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>{}<br/>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>Address&nbsp;&nbsp;&nbsp;&nbsp;:</b>{}<br/>
                    </p>

                    <h6> <b style={{color:'rgb(47, 174, 212)'}}> Student Information  </b> </h6>
                    <p>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>RollNo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>{}<br/>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>Batch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b>{}<br/>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>Depart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b>{}<br/>
                    </p>
             </div>
              
             <div className="col-lg div3SVP">
                    <br/>
                    <h6> <b style={{color:'rgb(47, 174, 212)'}}> Academic Information</b> </h6>
                    <p>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>Matirculation&nbsp;&nbsp;&nbsp;:</b>{}<br/>
                        <b style={{fontSize:'20px' , marginLeft:'10%' , fontSize:'14px'}}>Intermediate&nbsp;&nbsp;&nbsp;&nbsp;:</b>{}<br/>
                    </p>

                    <br/>

                    <h6> <b style={{color:'rgb(47, 174, 212)'}}>Skills</b> </h6>
                    <p style={{marginLeft:'10%'}}>
                    {
                    skills.map((val , index ) => {
                       return(
                         <b style={{fontSize:'14px'}}> { val.skill } , </b>
                       )
                    })
                    }                       
                    </p>
                    
                    <br/>
                    
                    <h6> <b style={{color:'rgb(47, 174, 212)'}}> Achievemants</b> </h6>
                    <p>
                     {
                     achievements.map((val , index ) => {
                       return(
                         <ul style={{marginLeft:'10%'}}>
                            <li>   
                            <b style={{fontSize:'14px'}}>{ val.achieve }</b>
                            </li>
                         </ul>
                       )
                    })
                    }                       
                    </p>

                    <br/>
                    <h6> <b style={{color:'rgb(47, 174, 212)'}}>About Your Self</b> </h6>
                    <p>
                        <b style={{fontSize:'14px' , marginLeft:'10%'}}> Updated soon </b>
                    </p>

             </div>

          </div>

        </div>

       )}
    }

export default StuViewProfile;