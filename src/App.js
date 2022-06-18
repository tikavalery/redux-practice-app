import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { MDBTable,MDBTableHead,MDBTableBody,MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup} from 'mdb-react-ui-kit';
import axios from 'axios';
import moment from 'moment';
import { useSelector ,useDispatch} from "react-redux"
import {increment} from "./actions/index"

function App() {

  
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  

      // console.log(dispatch(increment))
  return (
   
    <div>
      I am in the component {counter}

      <button onClick = {() => dispatch(increment)}>add</button>
      <button>Minus</button>
</div>
  );
}

export default App;
