import React, { Component } from 'react';
import MenuBar from './MenuBar';
import '../App.css';
class Home extends React.Component {

  render() {
    return (
      <div>
        
       
        <div className="App">
          <table>
           
            <tr>
              <td className="App">              
              <MenuBar/>           
              </td>
            </tr>
            <tr>
              <td>
              <marquee direction="left" behavior="alternate"><h2 className="h2Color">Welcome to ProcessMAP India Private Limited, A Leading (EH&S) Software Provider.</h2></marquee>
              <div>              
             9th & 10th Floor, Infinia Tower E/3, Infocity Bhubaneswar - 751024 Odisha, India.
             <br/>
             Telephone : +91.674 – 6500875<br/>
             Sales : +91.674 – 6500875<br/>
             Fax : +91.40.23401860/6
             </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

}

export default (Home);
