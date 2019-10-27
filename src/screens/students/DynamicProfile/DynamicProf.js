import React, {Component} from 'react';
import '../../../css/bootstrap.min.css';
import './DynamicProf.css';
import '../../../css/scrollbar.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import {Button} from '../../../components/button/button.js'
import { Navbar , Nav , NavDropdown , Form , FormControl } from 'react-bootstrap';

class StuDynamicProfile extends Component {
  
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
          <div>
            
            <Navbar  expand="lg"  style={{height:'auto' , width:'100%' ,  marginLeft:'0px' , background:'rgb(20, 194, 224)'}}>
                <Navbar.Brand>
                    <img  onClick={()=>this.props.history.goBack()} style={{width:'30px' , height:'30px' }}  src={require('../../../images/back.png')} />
                    <img style={{height:'70px' , width:'110px' ,marginTop:'10px' , padding:'5px' }} src={require('../../../images/logo.png')}/> 
                </Navbar.Brand>
          </Navbar>

             
             <div className="col-sm-8 div1SDP">
                <p style={{textAlign:'center' , margin:'20px'}}> <img  className="img1SDP" /> </p>
                   
                    <br/>
                    <h6> <b style={{color:'rgb(47, 174, 212)'}}> Academic Information</b> </h6>
                    <p style={{fontSize:'14px'}} >
                        <b style={{fontSize:'14px' , marginLeft:'10%'}}>Matirculation&nbsp;&nbsp;&nbsp;:</b>{}<br/>
                        <b style={{fontSize:'14px' , marginLeft:'10%'}}>Intermediate&nbsp;&nbsp;&nbsp;&nbsp;:</b>{}<br/>
                    </p>

                    <br/>

                    <h6> <b style={{color:'rgb(47, 174, 212)'}}>Skills</b> </h6>
                    <p style={{marginLeft:'10%' , fontSize:'14px'}}>
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
                    <h6> <b style={{color:'rgb(47, 174, 212)'}}>About Student</b> </h6>
                    <p>
                        <br/>
                        <b style={{fontSize:'14px' , marginLeft:'10%'}}> Updated soon </b>
                    </p>

                  <p style={{textAlign:'center'}}>  <Button text="Chat"/> </p>

             </div>

          </div>

  

       )}
    }

export default StuDynamicProfile;