import React, {useState} from 'react';
import KeysList from 'modules/common/keys/keys-list';
import Input from '../input';

function App() {
    const [value, setValue] = useState('');
    return (
        <div className="app-container">
            <Input value={value} setValue={setValue}/>
            <KeysList/>
        </div>
    );
}

export default App;
