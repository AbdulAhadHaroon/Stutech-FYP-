import React, {Component} from 'react';
import '../../css/bootstrap.min.css';
import './ChatMessenger.css';
import '../../css/scrollbar.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import firebase from '../../config/firebase.js';
import { messaging } from 'firebase';

class ChatMessenger extends Component {
  
  constructor() {
    super();

    this.state = {
        myChatList:[] ,
        myMessage:[] ,
        pushNode1 : 'none' ,
        pushNode2 : 'none' ,
        userObj : {} ,
        myObj : {}
         
    }
  }

  componentDidMount(){
   this.addData();
  }

  addData(){
    const { myChatList} = this.state;
    var chatdata = this.props.cinfo;
    var data = this.props.details;
    if(chatdata.name == undefined || chatdata.name==null || chatdata.name=='undefined')
    {
           
    }
    else{
      this.showmessage(chatdata.id);
      
      var obj = {
        name : chatdata.name ,
        id: chatdata.id ,
        email : chatdata.email ,
        image : chatdata.image 
      }
      
    var skey =  firebase.database().ref(`chatList/${data.id}/${chatdata.id}`);
    skey.set(obj)

      var pNode1 = chatdata.id + data.id;
      var pNode2 =  data.id + chatdata.id;
      this.setState({pushNode1:pNode1 , pushNode2:pNode2 , userObj:obj})

      }
      // myChatList.push({ id:'awexgbt' ,logo:require('../../images/c1.jpg') ,  Name:'Saylani' , Email:'malik@gmail.com'  }) 
      // myChatList.push({ id:'1we4hji' ,logo:require('../../images/c2.jpg')  , Name:'AppTech' , Email:'bilal@gmail.com'}) 
      // myChatList.push({ id:'dfmk30f' ,logo:require('../../images/c3.jpg')  , Name:'SSUET' , Email:'zubair@gmail.com'})
    }

    sendMessage(){
    const { pushNode1 , pushNode2 } = this.state;
    var chatdata = this.props.cinfo;
    var data = this.props.details;

    var  mesg = document.getElementById('msg').value;

      if(mesg.length<1){
          Swal.fire('Oops' , "Please write some thing" , 'error');
      }
      else{
        var skey =  firebase.database().ref( `chating/${chatdata.id}/${pushNode1}`).push();
        var dkey =  firebase.database().ref( `chating/${data.id}/${pushNode2}`).push();
        const msgObj = {
                 message: mesg,
                 time: (new Date()).getTime(),
                 id:data.id
                };  
                skey.set(msgObj);
                dkey.set(msgObj);                
      }
  }

showmessage(fid){
  const { myChatList , pushNode1 , pushNode2 , myMessage } = this.state;
  var data = this.props.details;
  
  
  firebase.database().ref().child(`chating/${data.id}/${data.id+fid}`).on('child_added', (snap) => {
  
    var obj = {
       message :  snap.val().message ,
       id : snap.val().id
    }
    myMessage.push(obj)
    this.setState({ myMessage })     
 })
}


  render(){
      const {myChatList  , pushNode1 , pushNode2 , userObj , myMessage} = this.state;
      var data = this.props.details;
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
                    <p> 
                    TO : {  userObj.name } <br/>
                    From : { data.name }
                    </p>
                    <hr/>
                    <div id="chat"  className="cdiv scrollbar square scrollbar-lady-lips thin">
                    {
                     myMessage.map((val , ind)=>{
                      return(
                    <div>    
                     { val.id == data.id && <div className="alert alert-success" style={{fontSize:'12px' , width:'50%' , marginLeft:'50%'}} > {val.message}   </div>  }
                     <br/> 
                     { val.id != data.id && <div className="alert alert-primary"  style={{fontSize:'12px' , width:'50%'}} > {val.message}  </div>}
                    </div>
                  )
                  })
                    }
                    </div>
                    <hr/>
                    <div className="row">
                    <input type="text" style={{width:'80%' , marginRight:'10px' , height:'30px' , fontSize:'12px' , marginTop:'5px'}} className="form-control border-success rounded"  placeholder="write your message here" id="msg" />
                    <button className="BtnCM"  onClick={()=>this.sendMessage()} > Send</button>
                    </div>
                </div>
             </div>  
        </div>
      </div> 
     </div> 
  )}
}

function mapStateToProp(state) {
  return ({
    cinfo: state.root.chatInfo ,
    details : state.root.organizationInfo,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(ChatMessenger);
