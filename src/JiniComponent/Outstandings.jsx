import React from 'react'
import './css/check1.css';
import rockfort from "./css/rockfort.png"
import gradient from "./css/gradient.jpg"
import ReactDOM from 'react-dom';




class Outstandings extends React.Component {
    render() {
      return (
        <div className="App">
           <input type="checkbox" id="check"/>
  
    <header>
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div class="left_area">
        
      </div>
      <div class="right_area">
        <a href="#" class="logout_btn">Logout</a>
      </div>
    </header>
  
   
    
    <div class="sidebar">
      <div class="profile_info">
        <img src={rockfort} class="profile_image"/>
        <h6>Saman Weerasiri</h6>
        <h4>Finance Manager</h4>
      </div>
      <a href="#"><i class="fas fa-desktop"></i><span>Overview</span></a>
      <a href="#"><i class="fas fa-cogs"></i><span>Budget</span></a>
      <a href="#"><i class="fas fa-table"></i><span>Outstandings</span></a>
      <a href="#"><i class="fas fa-th"></i><span>Confirmations</span></a>
      <a href="#"><i class="fas fa-info-circle"></i><span>Reports</span></a>
    </div>
 
    
    <div class="content">
       
      <div class="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      
    </div>

   


        </div>
      )
    }
  }
  
  export default Outstandings;