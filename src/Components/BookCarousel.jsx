import React from 'react'
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';


export default function BookCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h"
          src="https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='black'>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h"
          src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className='black'>
        <h5>Second slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h"
          src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className='black'>
        <h5>Third slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  
}
