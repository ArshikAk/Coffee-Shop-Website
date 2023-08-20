import React from 'react'
import "../Styles/style.css"
import logo from "../Images/Image.png"
import Card from '../Components/Card'

import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg"
import img3 from "../Images/img3.jpg"
import img4 from "../Images/img4.jpg"

var ListImage = [img1,img2,img3,img4];
var Content = ["Content1","Content2","Content3","Content4"]

function  Home() {
  return (
    <div className='Main'>
        <nav className='Nav'>
            <div className='Name'>
                <p className='IMA'>IMAJI</p>
                <p className='Coffee'>Coffee</p>
            </div>
            <div className='NavBar'>
                <p>Home</p>
                <p>Story</p>
                <p>Menu</p>
                <p>Space</p>
                <p>Community</p>
                <p>News</p>

                <button className='Order'>Order</button>
                <button className='Sign'>Sign In</button>
            </div>
        </nav>

        <br />

        <div className='Content'>
          <center>
            <h1>Our News</h1>

            <p>Get the latest updates and deeper coffee experience from 
              IMAJI Coffee
            </p>

            <br />
            <img src={logo} alt="Coffee Shop" />

            <br />
            <br />

            <b className='Sen'>Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</b>

            <br />
            <br />
          </center>
        </div>

        <br />
        <br />
        <br />

        <div className='Card'>
          {
             ListImage.map((data,index)=>{
              return(
                <div key={index}>
                  <Card logo={data} content={Content[index]}></Card>

                  <br />
                  <br />
                </div>
                )
            }
            )
          }
        </div>

        <div className='Bottom'>
          <center>
            <div className='Address'>
            <h1>Our Location</h1>
            <p>JI. Bangkringan No 19, RT.11/RW.2, Kota Surbaya, 60124</p>
            <p><b>Customer Service</b> +6282-2876-6862</p>
            <p><b>We Are Open from </b>Sun - Mon 10 AM - 22 PM</p>

            <br />
            </div>
            <br />
            <div className='logo-section'>
              <p>2023 IMAJI COFFEE All rights reserved</p>
              <p>Terms and Conditions | Privacy Policy</p>
            </div>
          </center>
        </div>
    </div>
  )
}

export default Home