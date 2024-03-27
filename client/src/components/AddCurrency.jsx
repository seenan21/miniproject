import React from "react";
import axios from "axios";


const AddCurrency = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
            alert("Please fill all the fields");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/currency', {
                currencyCode: e.target[0].value,
                countryId: e.target[1].value,
                conversionRate: e.target[2].value
            });

            console.log("Form Submitted", response.data);
        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    }

    return (
        <div>
            <br />
            <br />
            <br />

            <h1 style={{ textAlign: 'center' }}>Add Currency</h1>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Currency Code" />
                    <input type="text" placeholder="Currency Id" />
                    <input type="number" placeholder="Conversion Rate" />
                    <br />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
    }

export default AddCurrency;