import React, {Component} from 'react';
import '../../css/bootstrap.min.css';
import './ChatMessenger.css';
import '../../css/scrollbar.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import firebase from '../../config/firebase.js';
import { messaging } from 'firebase';
import {DynamicData} from '../../store/action/action';

class ChatMessenger extends Component {
  
  constructor() {
    super();

    this.state = {
        myChatList:[] ,
        myMessage:[] ,
        pushNode1 : 'none' ,
        pushNode2 : 'none' ,
        userObj : {} ,
        myObj : {} ,
        deleteID : null
         
    }
  }

  componentDidMount(){
   this.addData();
  }

  addData(){
   const { myChatList , deleteID , myObj} = this.state;
    
   this.setState({deleteID:null})

    var chatdata = this.props.cinfo;
  
    if(this.props.accounttype=='Student'){
     
      var data = this.props.detailsstu;   

      this.setState({myObj:{
       ...this.state.myObj ,
        name : data.name ,
        id: data.id ,
        email : data.email ,
        image : data.imgURL 
      }})

    }else if(this.props.accounttype=='Organization'){
      var data = this.props.detailsorg;

      this.setState({
        myObj : {
        ...this.state.myObj ,
        name : data.name ,
        id: data.id ,
        email : data.email ,
        image : data.imgURL 
      }})
    //   ({myObj: (this.state.myObj, {name : data.name ,
    //     id: data.id ,
    //     email : data.email ,
    //     image : data.imgURL 
    //   })
    // });

    }else if(this.props.accounttype=='Teacher'){
      var data = this.props.detailstech;
      var obj1 = {
        name : data.name ,
        id: data.id ,
        email : data.email ,
        image : data.imgURL 
      }
      console.log('object' , obj1)  
    this.setState({myObj:obj1})

    }else if(this.props.accounttype=='Admin'){
      var data = this.props.detailsadm;
      var obj1 = {
        name : data.name ,
        id: data.id ,
        email : data.email ,
        image : data.imgURL 
      }
    console.log('object' , obj1)
    this.setState({myObj:obj1})
    }else{
      Swal.fire('Oops' , 'Account Not Exist')
    }


    if(chatdata.name == undefined || chatdata.name==null || chatdata.name=='undefined')
    {
      this.showChatlist(); 
    }
    else{

      this.showmessage(chatdata.id);
      
      var obj = {
        name : chatdata.name ,
        id: chatdata.id ,
        email : chatdata.email ,
        image : chatdata.image 
      }
     

    var skey =  firebase.database().ref(`chatList/${myObj.id}/${chatdata.id}`);
    skey.set(obj)
    var fkey =  firebase.database().ref(`chatList/${chatdata.id}/${myObj.id}`);
    fkey.set(myObj)

      var pNode1 = chatdata.id + myObj.id;
      var pNode2 =  myObj.id + chatdata.id;
      this.setState({pushNode1:pNode1 , pushNode2:pNode2 , userObj:obj , deleteID:chatdata.id })

      }
    }

    setDetail(ind){
      const {myChatList , myMessage , myObj} = this.state;
      var id = myChatList[ind].id;

      while(myMessage.length > 0) {
        myMessage.splice(0,1); 
        // this.setState({myMessage});
       }

      this.showmessage(id);

      var pNode1 = id + myObj.id;
      var pNode2 =  myObj.id + id;

      var obj = {
        name : myChatList[ind].Name ,
        id: myChatList[ind].id,
        email : myChatList[ind].Email ,
        image : myChatList[ind].logo 
      }

      this.setState({pushNode1:pNode1 , pushNode2:pNode2 , userObj:obj , deleteID:id})
    }

    sendMessage(){
    const { pushNode1 , pushNode2 , myObj } = this.state;
    var chatdata = this.props.cinfo;

    var  mesg = document.getElementById('msg').value;

      if(mesg.length<1){
          Swal.fire('Oops' , "Please write some thing" , 'error');
      }
      else{
        var skey =  firebase.database().ref( `chating/${chatdata.id}/${pushNode1}`).push();
        var dkey =  firebase.database().ref( `chating/${myObj.id}/${pushNode2}`).push();
        const msgObj = {
                 message: mesg,
                 time: (new Date()).getTime(),
                 id:myObj.id
                };  
                skey.set(msgObj);
                dkey.set(msgObj);                
      }
  }

  showChatlist(){
    const {myChatList , myObj } = this.state;

    firebase.database().ref(`chatList/${myObj.id}`).on("value", (snapshot)=> {
      if(snapshot.exists()){
        // this.setState({progress:false})
        snapshot.forEach((childSnapshot) => {
         var obj = {
           id : childSnapshot.val().id ,
           logo : childSnapshot.val().image ,
           Name : childSnapshot.val().name ,
           Email : childSnapshot.val().email 
         }
          myChatList.push(obj);
         this.setState({myChatList})
        })
      }
    })
  }  

showmessage(fid){
  const { myChatList , pushNode1 , pushNode2 , myMessage , myObj } = this.state;
  console.log( myObj + 'show message' + fid )
  firebase.database().ref().child(`chating/${myObj.id}/${myObj.id+fid}`).on('child_added', (snap) => {
  
    var obj = {
       message :  snap.val().message ,
       id : snap.val().id
    }
    myMessage.push(obj)
    this.setState({ myMessage })     
 })
}


  render(){
      const {myChatList  , pushNode1 , pushNode2 , userObj , myMessage , myObj} = this.state;
      
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
                           <div  className="row viewDivCM"  style={{textAlign:'center'}}  onClick={(e)=>this.setDetail(ind)} >
                              <div className='col-md-1' style={{minWidth:'50px'}} > <img className='uimgCM' src={val.logo}/> </div>
                              <div className="col-md" >
                              <p style={{fontSize:'12px'}}> 
                              <b style={{fontSize:'12px'}} >   {val.Name} </b> <br/>
                              <b style={{fontSize:'12px'}}>  </b> {val.Email} <br/>  
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
                    From : { myObj.name }
                    </p>
                    <hr/>
                    <div id="chat"  className="cdiv scrollbar square scrollbar-lady-lips thin">
                    {
                   myMessage.length>1 &&  myMessage.map((val , ind)=>{
                      return(
                    <div>    
                     { val.id == myObj.id && <div className="alert alert-success" style={{fontSize:'12px' , width:'50%' , marginLeft:'50%'}} > {val.message}   </div>  }
                     <br/> 
                     { val.id != myObj.id && <div className="alert alert-primary"  style={{fontSize:'12px' , width:'50%'}} > {val.message}  </div>}
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
    detailsorg : state.root.organizationInfo,
    detailsadm : state.root.adminInfo,
    detailsstu : state.root.studentInfo,
    detailstech : state.root.teacherInfo,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
    dInfo : (info4)=>{ dispatch(DynamicData(info4))} 
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(ChatMessenger);
