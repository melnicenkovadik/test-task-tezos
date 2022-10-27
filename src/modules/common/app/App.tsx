import React, {useState} from 'react';
import KeysList from 'modules/keys/keys-list';
import {useActions} from 'hooks/actions';


function App() {
    const {addKey} = useActions();
    const [value, setValue] = useState('');
    return (
        <div className="App">
           <div className='add-key'>
               <input
                   className='add-input'
                   value={value}
                   onChange={(e) => setValue(e.target.value)}/>
               <button
                   className='add-btn'
                   onClick={() => addKey(value)}>Add</button>
           </div>
            <KeysList/>
        </div>
    );
}

export default App;
