import React from 'react'

export default function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>
                        <p
                        onClick={() => props.sortBy('last_name')}
                        > Name</p>
                    </th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.image}</td>
                            <td>{row.name}</td>
                            <td>{row.phone_number}</td>
                            <td>{row.email_address}</td>
                            <td>{row.birthday}</td>
                        </tr>
                    ))
                }

            </tbody>



        </table>
    )
}