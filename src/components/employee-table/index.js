import React from 'react'

export default function EmployeeTable(props) {
    return (
       
            <tbody>
                {
                    props.data.map((row,key) => (
                        <tr key={key}>
                            {/* <td>{row.image}</td> */}
                            <td>{row.name}</td>
                            <td>{row.phone_number}</td>
                            <td>{row.email_address}</td>
                            <td>{row.birthday}</td>
                        </tr>
                    ))
                }

            </tbody>



       
    )
}