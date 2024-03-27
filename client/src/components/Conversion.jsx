import React from "react";

const Conversion = () => {



    return (
        <div>
            <br />
            <br />
            <br />

            <h1 style={{ textAlign: 'center' }}>Conversion</h1>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <form>
                    <input type="text" placeholder="Currency From" />
                    <input type="text" placeholder="Currency To" />
                    <input type="number" placeholder="Amount" />
                    <br />
                    <button type="submit">Convert</button>
                </form>
            </div>
        </div>
    );
    }

export default Conversion;