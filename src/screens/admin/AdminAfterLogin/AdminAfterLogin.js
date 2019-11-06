import React, { Component } from 'react';
import '../../../css/bootstrap.min.css';
import './AdminAfterLogin.css';
import Swal from 'sweetalert2'
import {Button} from '../../../components/button/button.js'
import { Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class AdminAfterLogin extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
           chatList:[]
         }
         this.addChat = this.addChat.bind(this);
      }
    
      addChat(){
        const {chatList} = this.state;
        chatList.push({name:'Approved my friend request' , Depart:'SE'})
        chatList.push({name:'Is thier any course on android app development' , Depart:'CE'})
        chatList.push({name:'My profile picture not changed' , Depart:'IT'})
        chatList.push({name:'Watan' , Depart:'SE'})
        chatList.push({name:'Kashmir' , Depart:'CE'})
      }

render(){
    this.addChat();
    const { chatList } = this.state;
    return(
    <div>
       
       {/*-------------- HEADER-------------------------- */}
       <div className="row" style={{backgroundColor:'rgb(20, 194, 224)'}}>
        <div className="col-md-4"> 
        <img className="sidelogoAdmAF" src={require('../../../images/logo.png')}/>
        {/* <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' , float:'right'}} src={require('../../../images/back.png')} /> */}
        </div>
      </div> 

        {/* ------------------------SIDEBAR ---------------------------*/}

        <div className="row" style={{height:'80vh' , padding:'5px' }}>

        <div  className="admDiv1">

        <div className="textAicon" style={{display:'none' , paddingLeft:'10px'}} >
            <p style={{height:'100px'}}>

            </p>
            <hr/>
            <Link to="" className="tAibtn"> <img style={{width:'25px' , height:'25px'}}  src={require('../../../images/nf.png')}/> &nbsp;&nbsp; Posts </Link> 
            <hr/>
            <Link to="/adminMessage" className="tAibtn"> <img style={{width:'25px' , height:'25px'}}  src={require('../../../images/mess.png')}/> &nbsp;&nbsp; Messages </Link> 
            <hr/>
            <Link to="/adminProfile" className="tAibtn"> <img style={{width:'25px' , height:'25px'}}  src={require('../../../images/user.jpg')}/> &nbsp;&nbsp; Profile </Link> 
            <hr/>
            <Link to="/adminGraph" className="tAibtn"> <img style={{width:'25px' , height:'25px'}}  src={require('../../../images/addjob.png')}/> &nbsp;&nbsp; Report </Link> 
            <hr/>
            <Link to="" className="tAibtn"> <img style={{width:'25px' , height:'25px'}}  src={require('../../../images/logoff.png')}/> &nbsp;&nbsp; Signout </Link> 
            </div>
        
            <div className="Aicon" style={{textAlign:'center'}}>
            <p style={{height:'100px'}}>  </p>
            <hr/>
            <Link to="" className="tAibtn"> <img style={{width:'25px' , height:'25px'}}  src={require('../../../images/nf.png')}/></Link> 
            <hr/>
            <Link to="/adminMessage" className="tAibtn"> <img style={{width:'25px' , height:'25px'}}  src={require('../../../images/mess.png')}/></Link> 
            <hr/>
            <Link to="/adminProfile" className="tAibtn"> <img style={{width:'25px' , height:'25px'}}  src={require('../../../images/user.jpg')}/></Link> 
            <hr/>
            <Link to="/adminGraph" className="tAibtn"> <img style={{width:'25px' , height:'25px'}}  src={require('../../../images/addjob.png')}/></Link> 
            </div>
            
        </div>

        <div className="admDiv2">
            <div className="adm_min_div1 row">
            
            <div  className="adm_formDiv1OAF col-xl scrollbar square scrollbar-lady-lips thin" style={{overflowY:'scroll'}} > 
                 <h6  className="sticky-top h4smdivORG"> <b> Approved Students </b> </h6>
                 <hr/>
                 {
                   chatList.map((val , index ) => {
                    return(
                      <div className="row scrollbar square scrollbar-lady-lips thin" style={{border:'solid 2px rgb(27, 180, 207)' , padding:'5px' , margin:'15px' , height:'80px' , overflowY:'scroll' , overflowX:'hidden'}}>
                        <img  style={{width:'40px' , height:'40px' , marginTop:'10px'}} src={require('../../../images/user.png')}/>
                        <p  style={{marginLeft:'20px' , marginTop:'10px' , fontSize:'15px' }}>
                          <h6 style={{fontSize:'13px' , textAlign:'left'}} >
                          <b>Name :</b> Abdul ahad<br/>
                          <b> Roll no :</b> 123 <br/>
                          <b> Department :</b> A <br/>
                          </h6>
                        </p>
                        
                        <div style={{marginTop:'20px' ,  marginLeft:'20%'}} className="row">

                        <figure>
                            <img style={{width:'auto' , height:'20px'}} src={require('../../../images/cross.png')} />
                            <figcaption><b style={{color: 'black' , fontSize:'11px'}} > Delete </b> </figcaption>
                        </figure>
                        &nbsp; &nbsp; 
                        <figure>
                            <img style={{width:'auto' , height:'20px'}} src={require('../../../images/project.png')} />
                            <figcaption><b style={{color: 'black' , fontSize:'11px'}} > Details </b> </figcaption>
                        </figure>
                        &nbsp; &nbsp; 
                        <figure>
                            <img style={{width:'auto' , height:'20px'}} src={require('../../../images/tick.png')} />
                            <figcaption><b style={{color: 'black' , fontSize:'11px'}} > Approved </b> </figcaption>
                        </figure>

                         </div>

                      </div>
                    )
                 })
                 }
              </div> 
       

              <div  className="c2 adm_formDiv1OAF col-xl scrollbar square scrollbar-lady-lips thin" style={{overflowY:'scroll' , display:'none'}} > 
                 <h6  className="sticky-top h4smdivORG"> <b> Message From Students </b> </h6>
                 <hr/>
                 {
                   chatList.map((val , index ) => {
                    return(
                      <div className="row scrollbar square scrollbar-lady-lips thin" style={{border:'solid 2px rgb(27, 180, 207)' , padding:'5px' , margin:'15px' , height:'60px' , overflowY:'scroll' }}>
                        <img  style={{width:'40px' , height:'40px'}} src={require('../../../images/user.png')}/>
                        <p  style={{marginLeft:'20px' , marginTop:'15px' , fontSize:'15px' , textAlign:'left' , width:'60%' , overflow:'hidden'}}>
                          <h6 style={{fontSize:'13px'}} ><b>Message :</b> {val.name}</h6>
                        </p>

                        <figure style={{textAlign:'center'}}>
                            <img style={{width:'auto' , height:'25px'}} src={require('../../../images/project.png')} />
                            <figcaption><b style={{color: 'black' , fontSize:'11px'}} > Reply </b> </figcaption>
                        </figure>
                      
                      </div>
                    )
                 })
                 }
              </div>

            </div>
            
            <hr/>
            
            <div className="adm_min_div2 row" >

            <div  className="adm_formDiv1OAF col-xl scrollbar square scrollbar-lady-lips thin" style={{overflowY:'scroll'}} > 
                 <h6  className="sticky-top h4smdivORG"> <b> Approved Organization </b> </h6>
                 <hr/>
                 {
                   chatList.map((val , index ) => {
                    return(
                      <div className="row scrollbar square scrollbar-lady-lips thin" style={{border:'solid 2px rgb(27, 180, 207)' , padding:'5px' , margin:'15px' , height:'80px' , overflowY:'scroll' , overflowX:'hidden'}}>
                        <img  style={{width:'40px' , height:'40px' , marginTop:'10px'}} src={require('../../../images/user.png')}/>
                        <p  style={{marginLeft:'20px' , marginTop:'10px' , fontSize:'15px' }}>
                          <h6 style={{fontSize:'13px' , textAlign:'left'}} >
                          <b>Name :</b> {val.name}<br/>
                          <b> Roll no :</b> 123 <br/>
                          <b> Department :</b> A <br/>
                          </h6>
                        </p>
                        
                        <div style={{marginTop:'20px' ,  marginLeft:'20%'}} className="row">

                        <figure>
                            <img style={{width:'auto' , height:'20px'}} src={require('../../../images/cross.png')} />
                            <figcaption><b style={{color: 'black' , fontSize:'11px'}} > Delete </b> </figcaption>
                        </figure>
                        &nbsp; &nbsp; 
                        <figure>
                            <img style={{width:'auto' , height:'20px'}} src={require('../../../images/project.png')} />
                            <figcaption><b style={{color: 'black' , fontSize:'11px'}} > Details </b> </figcaption>
                        </figure>
                        &nbsp; &nbsp; 
                        <figure>
                            <img style={{width:'auto' , height:'20px'}} src={require('../../../images/tick.png')} />
                            <figcaption><b style={{color: 'black' , fontSize:'11px'}} > Approved </b> </figcaption>
                        </figure>

                         </div>

                      </div>
                    )
                 })
                 }
              </div> 
       

              <div  className="c2 adm_formDiv1OAF col-xl scrollbar square scrollbar-lady-lips thin" style={{overflowY:'scroll' ,  display:'none'}} > 
                 <h6  className="sticky-top h4smdivORG"> <b> Message From Organization </b> </h6>
                 <hr/>
                 {
                   chatList.map((val , index ) => {
                    return(
                      <div className="row scrollbar square scrollbar-lady-lips thin" style={{border:'solid 2px rgb(27, 180, 207)' , padding:'5px' , margin:'15px' , height:'60px' , overflowY:'scroll' }}>
                        <img  style={{width:'40px' , height:'40px'}} src={require('../../../images/user.png')}/>
                        <p  style={{marginLeft:'20px' , marginTop:'15px' , fontSize:'15px' , textAlign:'left' , width:'60%' , overflow:'hidden'}}>
                          <h6 style={{fontSize:'13px'}} ><b>Message :</b> {val.name}</h6>
                        </p>

                        <figure style={{textAlign:'center'}}>
                            <img style={{width:'auto' , height:'25px'}} src={require('../../../images/project.png')} />
                            <figcaption><b style={{color: 'black' , fontSize:'11px'}} > Reply </b> </figcaption>
                        </figure>
                      
                      </div>
                    )
                 })
                 }
              </div>
            
            </div>
        </div>        
    </div>
</div>
    )
}

}

export default AdminAfterLogin;
    