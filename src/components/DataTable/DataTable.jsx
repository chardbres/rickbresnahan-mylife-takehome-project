import React from 'react'
import Table from 'react-bootstrap/Table'

import './DataTable.scss'

const DataTable = props => {
    const dataArray = props.data

    return (
        <div className='tableDiv'>
            <p>Click the 'Get Data!' button to populate the table with Rick and Morty data. Use the filter buttons to select which data to see (button will select FOR the category when filled!) </p>
            <Table striped bordered hover size='sm' className='dataTable'>
                <thead>
                    <tr style={{ 'text-align': 'center' }}>
                        <th style={{ width: '20rem' }}>Category</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArray.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td style={{ 'text-align': 'center' }}>{item.tag}</td>
                                <td>{item.content}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default DataTable