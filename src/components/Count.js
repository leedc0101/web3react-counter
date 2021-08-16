import React, {useState} from 'react'
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import {COUNTER_ABI} from "../constant";

function Count() {
    const { library } = useWeb3React()
    const [count, setCount] = useState(0)

    const onClick = () => {
        const counterContract = new ethers.Contract("0x9acDeC484dFD452ce56bb666A432916702fB2F0E", COUNTER_ABI, library)

        counterContract.get()
            .then((result) => {setCount(result.toNumber())})
    }

    return (
        <div>
            <button onClick={onClick}>
                Get Count
            </button>
            <div>
                {count}
            </div>
        </div>
    )
}

export default Count