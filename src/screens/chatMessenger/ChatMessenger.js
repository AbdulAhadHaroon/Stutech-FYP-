import React, {Component} from 'react';
import '../../css/bootstrap.min.css';
import './ChatMessenger.css';
import '../../css/scrollbar.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

class ChatMessenger extends Component {
  
  constructor() {
    super();

    this.state = {
        myChatList:[] ,
        myMessage:[] ,
        dataIndex : null 
    }
  }

  addData(){
      const{myChatList}=this.state;
      myChatList.push({ id:'awexgbt' ,logo:require('../../images/c1.jpg') ,  Name:'Saylani' , Email:'malik@gmail.com'  }) 
      myChatList.push({ id:'1we4hji' ,logo:require('../../images/c2.jpg')  , Name:'AppTech' , Email:'bilal@gmail.com'}) 
      myChatList.push({ id:'dfmk30f' ,logo:require('../../images/c3.jpg')  , Name:'SSUET' , Email:'zubair@gmail.com'})
    }


  showFullData(e){
    const {dataIndex}  = this.state; 
   document.getElementById('adata').innerHTML = null
    this.setState({dataIndex:e})
  }  


  render(){
      const {myChatList , dataIndex} = this.state;
      this.addData();
      return(
          <div className="mainDivCM">

              <div className="row" style={{backgroundColor:'rgb(20, 194, 224)'}}>
                <div className="col-md-4"> 
                <img  onClick={()=>this.props.history.goBack()}  style={{width:'30px' , height:'30px' , marginLeft:'20px'}} src={require('../../images/back.png')} />
                <img className="sidelogoCM" src={require('../../images/logo.png')}/>
                </div>
              </div>

              <div  className="col-md-14 row">

              <div id="sdata" className="col-md-3 scrollbar square scrollbar-lady-lips thin" style={{height:'80vh' , overflowY:'scroll' , textAlign:'left' , margin:'10px' , minWidth:'300px'}}> 
                <h6 className="text-center" style={{color:'rgb(20, 194, 224)'}}> My Chats </h6>
                <hr/>
              {
                  
                  myChatList.map((val , ind)=>{
                        return(
                           <div  className="row viewDivCM" >
                              <div className='col-md-1' style={{minWidth:'50px'}} > <img className='uimgCM' src={val.logo}/> </div>
                              <div className="col-md" >
                              <p style={{fontSize:'12px'}}> 
                              <b style={{fontSize:'12px'}} >Name : </b>  {val.Name} <br/>
                              <b style={{fontSize:'12px'}}> Email : </b> {val.Email} <br/>  
                              </p>
                              </div>
                           </div>
                       )
                    })
              }
              </div>
              
              <div className="col-lg" style={{display:'inline-block' , margin:'10px'}}>
              <div className="col-xl form-control border border-success rounded" id="chatdivCM" > 
                <div className="col-lg">
                    <h6 className="text-center"> Chat Messenger </h6>
                    <p id="btn1CM"><button className="BtnCM"  > Delete Chat </button> </p> 
                    <p  id="names"> </p>
                    <hr/>
                    <div id="chat"  className="cdiv scrollbar square scrollbar-lady-lips thin"></div>
                    <hr/>
                    <div className="row">
                    <input type="text" style={{width:'80%' , marginRight:'10px' , height:'30px' , fontSize:'12px' , marginTop:'5px'}} className="form-control border-success rounded"  placeholder="write your message here" id="msgCM" />
                    <button className="BtnCM"> Send</button>
                    </div>
                </div>
             </div>  
        </div>
      </div> 
     </div> 
  )}
}

export default ChatMessenger;