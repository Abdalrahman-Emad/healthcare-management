import React from 'react';

const BillingInfo = () => {
    // Example data; replace with real billing information
    const billingData = [
        { id: 1, date: '2024-08-01', amount: '$150', status: 'Paid' },
        { id: 2, date: '2024-07-01', amount: '$200', status: 'Unpaid' },
    ];

    return (
        <div className="billing-info">
            <h3>Your Billing Information</h3>
            <ul>
                {billingData.map(bill => (
                    <li key={bill.id}>
                        Date: {bill.date}, Amount: {bill.amount}, Status: {bill.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BillingInfo;
