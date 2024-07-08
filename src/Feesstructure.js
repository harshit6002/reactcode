// src/FeesTable.js
import React from 'react';

const feesData = [
    { feeType: 'Tuition', amount: '$2000', dueDate: '2024-08-01' },
    { feeType: 'Library', amount: '$150', dueDate: '2024-08-10' },
    { feeType: 'Sports', amount: '$100', dueDate: '2024-08-15' },
    { feeType: 'Lab', amount: '$250', dueDate: '2024-08-20' }
];

const Feesstructure = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Fees Structure</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fee Type</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Amount</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {feesData.map((fee, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fee.feeType}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fee.amount}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{fee.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Feesstructure;
