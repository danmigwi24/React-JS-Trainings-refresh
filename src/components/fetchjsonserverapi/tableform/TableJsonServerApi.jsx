import React from 'react'

const TableJsonServerApi = ({ items }) => {
    return (
        <div>
            <table>
                <tbody>
                    {
                        items.map(item => (
                            <RowJsonServerApi
                                key={item.id}
                                item={item}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

const RowJsonServerApi = ({ item }) => {
    return (
        <tr>
            {
                Object.entries(item).map(([key, value]) => {
                    console.log(`key =============== ${value}`);
                    return (
                        <CellJsonServerApi
                            key={key}
                            cellData={JSON.stringify(value)}
                        />
                    )
                })
            }
        </tr>
    )
}

const CellJsonServerApi = ({ cellData }) => {
    return (
        <td>
            {cellData}
        </td>
    )
}

export default TableJsonServerApi