import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import Button from "./Button";

const TestGuide3  = ({dispatch}) => {

  return (
    <>
    <div className="btn-w1">
      <div className="frame">
        <button className="custom-btn btn-1">Read More</button>
        <button className="custom-btn btn-2">Read More</button>
        <button className="custom-btn btn-3"><span>Read More</span></button>
        <button className="custom-btn btn-4"><span>Read More</span></button>
        <button className="custom-btn btn-5"><span>Read More</span></button>
        <button className="custom-btn btn-6"><span>Read More</span></button>
        <button className="custom-btn btn-7"><span>Read More</span></button>
        <button className="custom-btn btn-8"><span>Read More</span></button>
        <button className="custom-btn btn-9">Read More</button>
        <button className="custom-btn btn-10">Read More</button>
        <button className="custom-btn btn-11">Read More<div className="dot"></div></button>
        <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
        <button className="custom-btn btn-13">Read More</button>
        <button className="custom-btn btn-14">Read More</button>
        <button className="custom-btn btn-15">Read More</button>
        <button className="custom-btn btn-16">Read More</button>
      </div>
    </div>

    <div className="btn-w2">
    <div className="frame">
  <button className="custom-btn btn-1">Read More</button>
  <button className="custom-btn btn-2">Read More</button>
  <button className="custom-btn btn-3"><span>Read More</span></button>
  <button className="custom-btn btn-4">Read More</button>
  <button className="custom-btn btn-5"><span>Read More</span></button>
  <button className="custom-btn btn-6"><span>Read More</span></button>
  <button className="custom-btn btn-7">Read More</button>
  <button className="custom-btn btn-8">Read More</button>
  <button className="custom-btn btn-9">Read More</button>
  <button className="custom-btn btn-10">Read More</button>
  <button className="custom-btn btn-11">Read More</button>
  <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
  <button className="custom-btn btn-13">Read More</button>
  <button className="custom-btn btn-14">Read More</button>
  <button className="custom-btn btn-15">Read More</button>
  <button className="custom-btn btn-16">Read More</button>
</div>
      <div className="btn-holder">
        <button className="btn btn-1 hover-filled-slide-down">
          <span>hover me</span>
        </button>
        <button className="btn btn-1 hover-filled-slide-up">
          <span>hover me</span>
        </button>
        <button className="btn btn-1 hover-filled-slide-left">
          <span>hover me</span>
        </button>
        <button className="btn btn-1 hover-filled-slide-right">
          <span>hover me</span>
        </button>
        <button className="btn btn-1 hover-filled-opacity">
          <span>hover me</span>
        </button>
      </div>
      <div className="btn-holder">
        <button className="btn btn-2 hover-slide-down">
          <span>hover me</span>
        </button>
        <button className="btn btn-2 hover-slide-up">
          <span>hover me</span>
        </button>
        <button className="btn btn-2 hover-slide-left">
          <span>hover me</span>
        </button>
        <button className="btn btn-2 hover-slide-right">
          <span>hover me</span>
        </button>
        <button className="btn btn-2 hover-opacity">
          <span>hover me</span>
        </button>
      </div>
      <div class='btn-holder'>
        <button className="btn btn-3 hover-border-1">
          <span>hover me</span>
        </button>
        <button className="btn btn-3 hover-border-2">
          <span>hover me</span>
        </button>
        <button className="btn btn-3 hover-border-3">
          <span>hover me</span>
        </button>
        <button className="btn btn-3 hover-border-4">
          <span>hover me</span>
        </button>
        <button className="btn btn-3 hover-border-5">
          <span>hover me</span>
        </button>
      </div>
      <div className="btn-holder">
        <button className="btn btn-4 hover-border-6">
          <span>hover me</span>
        </button>
        <button className="btn btn-4 hover-border-7">
          <span>hover me</span>
        </button>
        <button className="btn btn-4 hover-border-8">
          <span>hover me</span>
        </button>
        <button className="btn btn-4 hover-border-9">
          <span>hover me</span>
        </button>
        <button className="btn btn-4 hover-border-10">
          <span>hover me</span>
        </button>
      </div>
      <div className="btn-holder">
        <button className="btn btn-5 hover-border-11">
          <span>hover me</span>
        </button>
      </div>
    </div>

    <div className="btn-w3">
        <div className="speech-bubble">
        </div>
    </div>
    

    <div className="btn-w4"Name>
      <div class="buttons">
        <button class="btn">
          Default
        </button>
        <button class="btn btn-primary">
          Primary
        </button>
        <button class="btn btn-secondary">
          Secondary
        </button>
        <button class="btn btn-success">
          Success
        </button>
        <button class="btn btn-info">
          Info
        </button>
        <button class="btn btn-warning">
          Warning
        </button>
        <button class="btn btn-danger">
          Danger
        </button>
        <button class="btn btn-primary btn-round">
          Round
        </button>
        <button class="btn btn-primary btn-circle">
          <i class="search-icon"></i>
        </button>
        <button class="btn btn-primary disabled">
          Disabled
        </button>
        <button class="btn btn-primary loading">Loading</button>
        <button class="btn btn-primary btn-ghost">Ghost</button>
        <button class="btn btn-primary">
          <div class="inline-flex items-center space-x-2">
            <i class="plus-icon"></i>
            <div>Icon</div>
          </div>
        </button>
        <button class="btn btn-primary btn-dashed">Dashed</button>
        <button class="btn btn-primary btn-link">Link</button>
        <button class="btn btn-primary btn-jittery">
          Click Me
        </button>
        <button class="btn btn-primary btn-jelly">
          Jelly
        </button>
        <button class="btn btn-primary btn-ghost btn-fill">
          Fill In
        </button>
        <button class="btn btn-primary btn-pulse">
          Pulse
        </button>
        <button class="btn btn-primary btn-ghost btn-open">
          Open
        </button>
        <button class="btn btn-primary btn-ghost btn-close">
          Close
        </button>
        <button class="btn btn-primary btn-ghost btn-slash">
          Slash
        </button>
        <button class="btn btn-primary btn-ghost btn-fill-up">
          Fill Up
        </button>
        <button class="btn btn-primary btn-ghost btn-slide">
          Slide
        </button>
        <button class="btn btn-primary btn-ghost btn-through">
          Through
        </button>
        <button class="btn btn-primary btn-ghost btn-offset">
          Offset
        </button>
        <button class="btn btn-primary btn-ghost btn-flip-down">
          Flip Down
          <div class="front">Flip Down</div>
          <div class="back">Flip Down</div>
        </button>
        <button class="btn btn-primary btn-round btn-marquee">
          <span data-text="Marquee">Marquee</span>
        </button>
        <button class="btn btn-primary btn-ghost btn-cross">
          Cross Bar
        </button>
        <button class="btn btn-primary btn-ghost btn-open-line">
          Line
        </button>
      </div>
    </div>

    <div className="btn-w5">
      <div className="btn">
        <span>Atom</span>
        <div className="dot"></div>
      </div>
    </div>
    
    <div className="btn-w6">
      <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Neon button
      </a>
      <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Neon button
      </a>
      <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Neon button
      </a>
    </div>

    <div className="btn-w7">
      <div className="container">
        <a className="button" href="#0">One</a>
        <a className="button" href="#0">Two</a>
        <a className="button" href="#0">Three</a>
        <a className="button" href="#0">Four</a>
        <a className="button" href="#0">Five</a>
      </div>
    </div>
    



    
    </>
  )
}

export default TestGuide3;






