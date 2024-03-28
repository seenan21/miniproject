import React from "react";
import convertCurrency from "../utils/currency_utils";


const Conversion = () => {

    const [newAmount, setNewAmount] = React.useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const currencyFrom = e.target[0].value;
        const currencyTo = e.target[1].value;
        const amount = e.target[2].value;
        setNewAmount(12);
    }



    return (
        <div>
            <br />
            <br />
            <br />

            <h1 style={{ textAlign: 'center' }}>Conversion</h1>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Currency From" />
                    <input type="text" placeholder="Currency To" />
                    <input type="number" placeholder="Amount" />
                    <br />
                    <button type="submit">Convert</button>
                </form>

                Conversion: {newAmount}
            </div>
        </div>
    );
    }

export default Conversion;