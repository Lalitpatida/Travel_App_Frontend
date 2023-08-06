import { createContext,useContext,useReducer } from "react";
import {dateReducer} from "../reducer";

const initialState={
    guests:0,
    destination:"",
    checkInDate:null,
    checkOutDate:null,
    isSearchModalOpen:false,
    isSearchResultOpen:true,
};

const DateContext=createContext(initialState);

const DateProvider=({children})=>{

 const [{destination,guests,checkInDate,checkOutDate,isSearchModalOpen,isSearchResultOpen} , dateDispatch]=useReducer(dateReducer,initialState);

    return (
    <DateContext.Provider value={{destination,guests,checkInDate,checkOutDate,isSearchModalOpen, dateDispatch,isSearchResultOpen}}>
        {children}
        </DateContext.Provider>
    );
};

const useDate=()=> useContext(DateContext);

export {useDate,DateProvider};