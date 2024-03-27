import React from "react";
import axios from "axios";

const UpdateCurrency = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
            alert("Please fill all the fields");
            return;
        }
            const currencyCode = e.target[0].value;
            const newRate = e.target[1].value;


        try {
            const response = await axios.get('/api/currency/');
            const currencies = response.data;
            
            
            const currency = currencies.find((c) => c.currencyCode === currencyCode);
            if (!currency) {
                alert("Currency not found");
                return;
            }

            const id = currency.id;
            await axios.put(`/api/currency/${id}/${newRate}`);

            alert("Currency updated successfully");
        } catch (error) {
            console.error("Error updating currency:", error);
            alert("An error occurred while updating currency");
        }
        
    }

    return (
        <div>
            <br />
            <br />
            <br />

            <h1 style={{ textAlign: 'center' }}>Update Currency</h1>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Currency Code" />
                    <input type="number" placeholder="Conversion Rate" />
                    <br />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );

}

export default UpdateCurrency;
