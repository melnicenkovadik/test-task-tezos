import React, {useEffect} from 'react';
import {useActions} from "../../hooks/actions";
import {useAppSelector} from "../../hooks/redux";

interface IInput {
    value: string,
    setValue: (value: string) => void
}

const Input = ({value, setValue}: IInput) => {
    const {addKey, setError} = useActions();
    const {error} = useAppSelector((state) => state.keys);

    function addKeyHandler() {
        // validate here
        if (value?.length < 15) {
            return setError('Key must be longer than 15 symbols')
        } else if (!value.trim()) {
            return setError('Key must not be empty')
        } else if (value.includes(' ')) {
            return setError('Key must not contain spaces')
        } else {
            setError(null);
            addKey(value);
            setValue('');
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setError('');
        }, 2000);

        return () => clearTimeout(timeout);
    }, [error]);

    return (
        <div>
            <div className='add-key'>
                <input
                    className='add-input'
                    value={value}
                    onKeyPress={(e) => e.key === 'Enter' && addKeyHandler()}
                    onChange={(e) => setValue(e.target.value)}/>
                <button
                    className='add-btn'
                    onClick={addKeyHandler}>Add
                </button>
            </div>
            {error && <div className='error'>
                <p className='warning'>Warning</p>
                <p>{error}</p>
            </div>}
        </div>
    );
}

export default Input;