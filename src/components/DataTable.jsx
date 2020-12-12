import React from 'react'
import Table from 'react-bootstrap/Table'

import './DataTable.scss'

const DataTable = () => {
    return (
        <div className='tableDiv'>
            <Table striped bordered hover size='sm' className='dataTable'>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Content</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}

export default DataTable