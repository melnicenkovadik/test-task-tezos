import {useAppSelector} from 'hooks/redux';
import Key from "./key-item";

const KeysList = () => {
    const {keys} = useAppSelector((state) => state.keys);

    return (
        <div className="keys-container">
            {keys.map((key,index) => (
                <Key key={key} current={key} idx={index + 1}/>
            ))}
        </div>
    );
};


export default KeysList;
