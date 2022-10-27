import {useActions} from "../../../hooks/actions";
import {useEffect, useState} from "react";
import {TezosToolkit} from "@taquito/taquito";

const endpoint = 'https://mainnet-node.madfish.solutions';
const Tezos = new TezosToolkit(endpoint);

const getBalance = async (key: string) => {
    let ballance = 0;
    await Tezos.tz.getBalance(key.trim())
        .then((balance) => {
            ballance = balance.toNumber()
        })
        .catch((error) => {
            console.error(error)
            ballance = 0
        });
    return ballance
};

const Key = ({current,idx}: { current: string,idx:number }) => {
    const {removeKey} = useActions();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        getBalance(current).then((res) => {
            setBalance(res)
        })
    }, [current]);

    return (
        <div className="key">
            <div className="key__index">{idx}</div>
            <div className="key__hash">{current}</div>
            <div className="key__balance">{balance}</div>
            <button className="key__remove-btn" onClick={() => removeKey(current)}>
                X
            </button>
        </div>
    );
};

export default Key;