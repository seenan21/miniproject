import React from "react";
import axios from "axios";
import { useState } from "react";

const Delete = () => {
    const [currencyCode, setCurrencyCode] = useState("");

    const handleDelete = async () => {
        try {
            const response = await axios.get('/api/currency/');
            const currencies = response.data;
            const currency = currencies.find((c) => c.currencyCode === currencyCode);
            if (currency) {
                await axios.delete(`/api/currency/${currency.id}`);
                console.log(`Currency with id ${currency.id} deleted successfully.`);
            } else {
                console.log(`Currency with code ${currencyCode} not found.`);
            }
        } catch (error) {
            console.error("Error deleting currency:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={currencyCode}
                onChange={(e) => setCurrencyCode(e.target.value)}
                placeholder="Enter currency code"
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};