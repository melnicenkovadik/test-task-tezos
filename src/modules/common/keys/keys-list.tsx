import {useAppSelector} from 'hooks/redux';
import {useActions} from '../../hooks/actions';
import {TezosToolkit} from '@taquito/taquito';
import {useEffect, useMemo, useState} from 'react';

const endpoint = 'https://mainnet-node.madfish.solutions';
const Tezos = new TezosToolkit(endpoint);

const getBalance = async (key: string) => {
    let ballance = 0;
    await Tezos.tz.getBalance(key.trim())
        .then((balance) => {
            console.log(balance.toNumber());
            ballance = balance.toNumber()
        })
        .catch((error) => {
            console.log(error)
            ballance = 0
        });
    return ballance
};

const KeysList = () => {
    const {keys} = useAppSelector((state) => state.keys);
    console.log('keys', keys);

    return (
        <div className="keys-container">
            {keys.map((key) => (
                <Key key={key} current={key}/>
            ))}
        </div>
    );
};

const Key = ({current}: { current: string }) => {
    const {removeKey} = useActions();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        getBalance(current).then((res) => {
            setBalance(res)
        })
    }, []);
    return (
        <div className="key">
            <div className="key__hash">{current}</div>
            <div className="key__balance">{balance}</div>
            <button className="key__remove-btn" onClick={() => removeKey(current)}>
                X
            </button>
        </div>
    );
};

export default KeysList;
