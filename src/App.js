import React, {useState} from 'react';
import './App.css';
import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput'

function App() {
    const [userName, setUserName] = useState('Dmitrijs')
    return(
        <div className='App'>
            <UserInput {...{setUserName}}/>
            <UserOutput {...{userName}}/>
            <UserOutput {...{userName}}/>
        </div>
    )
}

export default App;
