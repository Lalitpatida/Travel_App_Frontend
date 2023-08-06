import DatePicker from "react-datepicker";
import "./DateSelector.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {useDate} from "../../context";

export const DateSelector=({placeholder,checkInType})=>{

const {dateDispatch , checkInDate,checkOutDate}=useDate();

const handleDateChange=(date)=>{
  dateDispatch({
    type:checkInType ==="in" ? "CHECK_IN" :"CHECK_OUT",
    payload:date,
  });
};

const handleDateFocus=()=>{
  dateDispatch({
    type:"DATE_FOCUS",
  });
};



    return (
        <DatePicker className="search-dest input"
        selected={checkInType ==="in"? checkInDate : checkOutDate}
        onChange={(date) => handleDateChange(date)}
        onFocus={handleDateFocus}
        dateFormat="dd/MM/yyyy"
        placeholderText="Add Dates"
        closeOnScroll={true}
        />  
  );
};