import React, { createContext } from 'react';
import ClassB from './ClassB';
import ClassA from './ClassA';

const FirstName = createContext();
const LastName = createContext();

const App = () =>{
    return(
        <>
            <FirstName.Provider value={"meraj"} > <ClassB/> </FirstName.Provider>
            <LastName.Provider value= {"Alam" } > <ClassB/></LastName.Provider>
            <br/>
            <FirstName.Provider value={"Hello"} > <ClassA/> </FirstName.Provider>
            <LastName.Provider value= {"MJ" } > <ClassA/></LastName.Provider>
        </>
    );
}

export default App;
export {FirstName ,LastName};