import React, { useEffect } from "react";

const Ranger = () => {
    let [number, setNumber] = React.useState<any>(0);
    const [result, setResult] = React.useState<any>('');

    useEffect(() => {
        setResult(new Array(Math.abs(parseInt(number, 10) || 0)).fill(0).map((e, i) => i + 1).join())
    }, [number])

    return <div className='card'>
        <h2>Display Number Range</h2>
        <div>
            <label htmlFor="number">Number</label><br />
            <input
                id='number'
                data-testid="number"
                placeholder="ex 8"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <div>
                <br />
                <label>Output</label><br />
                <div className='result'
                    id='output'
                    data-testid="output">{result}</div>

            </div>

        </div>
    </div>
}

export default Ranger