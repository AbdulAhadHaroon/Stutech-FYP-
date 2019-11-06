import React, { Component } from 'react';
import '../../../css/bootstrap.min.css';
import './adminMessage.css';
import { Button } from '../../../components/button/button.js'
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import axios from 'axios'



class AdmMsg extends Component {

  constructor() {

    super();

    this.state = {
      nfdiv1: true,
      nfdiv2: false,
      nfdiv3: false,
      from: 'admin@stutech.com',
      to: 'abdulahad30396@gmail.com',
      subject : 'hello message' ,
      message : 'asdasda' ,
    }
  }

  emailType() {
    console.log('chala')
    document.getElementById('semail').style.display = 'block';
    document.getElementById('aemail').style.display = 'none';
  }

  msgType() {
    console.log('chala')
    document.getElementById('smsg').style.display = 'block';
    document.getElementById('amsg').style.display = 'none';
  }

  selected2 = (event) => {
    // var accType=""+sel.options[sel.selectedIndex].value;
    var s2 = event.target.value;
    console.log(event.target.value)

    if (s2 == "student") {
      document.getElementById('select3').style.display = 'block';
      document.getElementById('select5').style.display = 'block';
      document.getElementById('select4').style.display = 'none';
    }

    else if (s2 == "teacher") {
      document.getElementById('select3').style.display = 'block';
      document.getElementById('select4').style.display = 'none';
      document.getElementById('select5').style.display = 'none';
    }

    else if (s2 == "organization") {
      document.getElementById('select4').style.display = 'block';
      document.getElementById('select3').style.display = 'none';
      document.getElementById('select5').style.display = 'none';
    }

  }

  selected22 = (event) => {
    // var accType=""+sel.options[sel.selectedIndex].value;
    var s22 = event.target.value;
    console.log(event.target.value)

    if (s22 == "student") {
      document.getElementById('select33').style.display = 'block';
      document.getElementById('select55').style.display = 'block';
      document.getElementById('select44').style.display = 'none';
    }

    else if (s22 == "teacher") {
      document.getElementById('select33').style.display = 'block';
      document.getElementById('select44').style.display = 'none';
      document.getElementById('select55').style.display = 'none';
    }

    else if (s22 == "organization") {
      document.getElementById('select44').style.display = 'block';
      document.getElementById('select33').style.display = 'none';
      document.getElementById('select55').style.display = 'none';
    }

  }

  //  handleUpload(){
  //   var xhr = new XMLHttpRequest()
  //   xhr.addEventListener('load', () => {
  //     console.log(xhr.responseText)
  //   })
  //   xhr.open('GET', 'http://smartsms.pk/plain?api_token=6ee650fde65d4b1a8136875e0190358ecb634db168688b66305b2d88ffda&api_secret=shahjahan123&to=923022787260&message=hello+shahjahan')
  //   xhr.send()
  // }


  handleUpload(e) {
    console.log('done')
    const { from , to , subject, message } = this.state;
    e.preventDefault();
    axios.post('http://localhost:5000/send', {
      from , to , subject , message
    }).then((res) => {
      console.log(res.statusText);
    });
  }
  // handleUpload(e) {
  // var xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
  // xhr.open("GET", chrome.extension.getURL('/config_resources/config.json'), true);
  // xhr.send();
  // }

  render() {
    const { nfdiv1, nfdiv2, nfdiv3 , from , to , subject , message} = this.state;
    return (
      <div>

        <Navbar expand="md" style={{ marginLeft: '0px', height: 'auto', width: '100%', background: 'rgb(20, 194, 224)' }}>
          <Navbar.Brand>
            <img onClick={() => this.props.history.goBack()} style={{ width: '30px', height: '30px' }} src={require('../../../images/back.png')} />
            <img style={{ height: '70px', width: '110px', marginTop: '10px', padding: '5px' }} src={require('../../../images/logo.png')} />
          </Navbar.Brand>
        </Navbar>

        <div style={{ backgroundColor: 'rgb(233, 233, 233)', margin: '0px 0px 10px 0px' }}>
          <div className="row navbarAM"  >
            <p className="navitemAM" onClick={() => { this.setState({ nfdiv1: true, nfdiv2: false, nfdiv3: false, nfdiv4: false }) }} >VIEW_MESSAGE</p>
            <p className="navitemAM" onClick={() => { this.setState({ nfdiv1: false, nfdiv2: true, nfdiv3: false, nfdiv4: false }) }}>SEND_EMAIL</p>
            <p className="navitemAM" onClick={() => { this.setState({ nfdiv1: false, nfdiv2: false, nfdiv3: true, nfdiv4: false }) }}>SEND_MESSAGE</p>
          </div>
        </div>


        {nfdiv1 && <div className="col-md row" id='div2' style={{ backgroundColor: 'whitesmoke', paddingTop: '20px', margin: '30px auto !important' }} >

          <div className="col-md-5" style={{ minWidth: '400px', border: 'solid 1px rgb(20, 194, 224)', margin: '10px auto', padding: '10px' }}>

            {/* <input id="cipher"    />
            <p>asad</p> */}

            <div class="contact">
              <h3>Send Email</h3>
              {/* {{msg}} */}
              <form onSubmit={(e) => this.handleUpload(e)} >
                <p>
                  <label>From</label>
                  <input type="text" onChange={(e)=>this.setState({ from : e.target.value})} />
                </p>
                <p>
                  <label>To</label>
                  <input type="text" onChange={(e)=>this.setState({ to : e.target.value})} />
                </p>
                <p>
                  <label>Subject</label>
                  <input type="email" onChange={(e)=>this.setState({ subject : e.target.value})} />
                </p>
                <p>
                  <label>Message</label>
                  <input type="text" onChange={(e)=>this.setState({ message : e.target.value})} />
                </p>
                <p class="full">
                  <input type="submit" value="submit" />
                </p>
              </form>
            </div>








            <br />
            <h6 className="text-center" style={{ color: 'rgb(20, 194, 224)' }}><b> Messages </b> </h6>

            <div className="form-group mx-1" id="select1">
              <label style={{ fontSize: '12px' }} >VIEW MESSAGE</label>
              <select style={{ fontSize: '12px' }} className="form-control" onChange={this.selectedAccountType} >
                <option style={{ fontSize: '12px' }} value="teacher">Organization</option>
                <option style={{ fontSize: '12px' }} value="teacher">Teacher</option>
                <option style={{ fontSize: '12px' }} value="teacher">Students</option>
              </select>
            </div>
          </div>
        </div>
        }


        {nfdiv2 &&
          <div className="col-8" style={{ margin: '20px auto' }}>
            <h4 className="text-center" style={{ color: 'rgb(20, 194, 224)' }}> <b> Send Email</b> </h4>
            <p className="text-center" > <b> Applying Filters </b> </p>
            <p style={{ textAlign: 'right' }}> <button style={{ width: '200px' }} onClick={() => this.emailType()} className="btn btn-success" > Specific Email </button> </p>
            <hr />

            <div id='aemail'>
              <div className="form-group mx-1" id="select2">
                <label style={{ fontSize: '12px' }} >Select</label>
                <select style={{ fontSize: '12px' }} className="form-control" onChange={this.selected2} >
                  <option style={{ fontSize: '12px' }} value="organization">Organization</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Teacher</option>
                  <option style={{ fontSize: '12px' }} value="student">Students</option>
                </select>
              </div>

              <div className="form-group mx-1" id="select3" style={{ display: 'none' }}>
                <label style={{ fontSize: '12px' }} >Department</label>
                <select style={{ fontSize: '12px' }} className="form-control" onChange={this.selected3} >
                  <option style={{ fontSize: '12px' }} value="student">Software Engineering</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Computer Engineering</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Computer Science</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Information Technology</option>
                </select>
              </div>

              <div className="form-group mx-1" id="select4" style={{ display: 'none' }}>
                <label style={{ fontSize: '12px' }} >Organization Type</label>
                <select style={{ fontSize: '12px' }} className="form-control" onChange={this.selected4} >
                  <option style={{ fontSize: '12px' }} value="student">Software House</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Corporate</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Insurance</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Networking</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Other</option>
                </select>
              </div>

              <div className="form-group mx-1" id="select5" style={{ display: 'none' }}>
                <label style={{ fontSize: '12px' }} >Section</label>
                <select style={{ fontSize: '12px' }} className="form-control" onChange={this.selected5} >
                  <option style={{ fontSize: '12px' }} value="student">ALL</option>
                  <option style={{ fontSize: '12px' }} value="teacher">A</option>
                  <option style={{ fontSize: '12px' }} value="teacher">B</option>
                  <option style={{ fontSize: '12px' }} value="teacher">C</option>
                  <option style={{ fontSize: '12px' }} value="student">D</option>
                  <option style={{ fontSize: '12px' }} value="teacher">E</option>
                  <option style={{ fontSize: '12px' }} value="teacher">F</option>
                </select>
              </div>
              <br />

              <div style={{ border: 'solid 1px black', margin: '10px', padding: '10px' }}>
                <p className="text-center"> <b>  Email </b> </p>
                <hr />
                <input style={{ height: '30px', fontSize: '12px' }} type="text" className="form-control" placeholder="Subject" />
                <br />
                <textarea style={{ fontSize: '12px' }} type="text" className="form-control" placeholder="Message" />
                <Button text='send' type='Send' />
              </div>

            </div>

            <div id='semail' style={{ border: 'solid 1px black', margin: '10px', padding: '10px', display: 'none' }}>
              <p className="text-center"> <b>  Send Specific Email </b> </p>
              <hr />
              <input style={{ height: '30px', fontSize: '12px' }} type="email" className="form-control" placeholder="Email Address" />
              <br />
              <input style={{ height: '30px', fontSize: '12px' }} type="text" className="form-control" placeholder="Subject" />
              <br />
              <textarea style={{ fontSize: '12px' }} type="text" className="form-control" placeholder="Message" />
              <Button text='Send' type='Send' />
            </div>

          </div>
        }

        {nfdiv3 &&
          <div className="col-8" style={{ margin: '20px auto' }}>
            <h4 className="text-center" style={{ color: 'rgb(20, 194, 224)' }}> <b> Send Message</b> </h4>
            <p className="text-center" > <b> Applying Filters </b> </p>
            <p style={{ textAlign: 'right' }}> <button style={{ width: '200px' }} onClick={() => this.msgType()} className="btn btn-success" > Specific Message </button> </p>
            <hr />

            <div id='amsg'>
              <div className="form-group mx-1" id="select22">
                <label style={{ fontSize: '12px' }} >Select</label>
                <select style={{ fontSize: '12px' }} className="form-control" onChange={this.selected22} >
                  <option style={{ fontSize: '12px' }} value="organization">Organization</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Teacher</option>
                  <option style={{ fontSize: '12px' }} value="student">Students</option>
                </select>
              </div>

              <div className="form-group mx-1" id="select33" style={{ display: 'none' }}>
                <label style={{ fontSize: '12px' }} >Department</label>
                <select style={{ fontSize: '12px' }} className="form-control" onChange={this.selected3} >
                  <option style={{ fontSize: '12px' }} value="student">Software Engineering</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Computer Engineering</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Computer Science</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Information Technology</option>
                </select>
              </div>

              <div className="form-group mx-1" id="select44" style={{ display: 'none' }}>
                <label style={{ fontSize: '12px' }} >Organization Type</label>
                <select style={{ fontSize: '12px' }} className="form-control" onChange={this.selected4} >
                  <option style={{ fontSize: '12px' }} value="student">Software House</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Corporate</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Insurance</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Networking</option>
                  <option style={{ fontSize: '12px' }} value="teacher">Other</option>
                </select>
              </div>

              <div className="form-group mx-1" id="select55" style={{ display: 'none' }}>
                <label style={{ fontSize: '12px' }} >Section</label>
                <select style={{ fontSize: '12px' }} className="form-control" onChange={this.selected5} >
                  <option style={{ fontSize: '12px' }} value="student">ALL</option>
                  <option style={{ fontSize: '12px' }} value="teacher">A</option>
                  <option style={{ fontSize: '12px' }} value="teacher">B</option>
                  <option style={{ fontSize: '12px' }} value="teacher">C</option>
                  <option style={{ fontSize: '12px' }} value="student">D</option>
                  <option style={{ fontSize: '12px' }} value="teacher">E</option>
                  <option style={{ fontSize: '12px' }} value="teacher">F</option>
                </select>
              </div>
              <br />

              <div style={{ border: 'solid 1px black', margin: '10px', padding: '10px' }}>
                <p className="text-center"> <b>  Message </b> </p>
                <hr />
                <textarea style={{ fontSize: '12px' }} type="text" className="form-control" placeholder="Message" />
                <Button text='Send' type='Send' />
              </div>

            </div>

            <div id='smsg' style={{ border: 'solid 1px black', margin: '10px', padding: '10px', display: 'none' }}>
              <p className="text-center"> <b>  Send Specific Message </b> </p>
              <hr />
              <input style={{ height: '30px', fontSize: '12px' }} type="number" className="form-control" placeholder="Number" />
              <br />
              <textarea style={{ fontSize: '12px' }} type="text" className="form-control" placeholder="Message" />
              <Button text='Send' type='Send' />
            </div>

          </div>
        }

      </div>
    )
  }
}

export default AdmMsg;
