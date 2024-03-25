import {Table} from "react-bootstrap";
import React, {useState} from "react";

/**
 * @param roles
 * @param setSelectedRole
 */
export function DisplayTable({data,setSelectedObject,model}) {
    const [selectedRow, setSelectedRow] = useState(null);
    const handleRowClick = (item) => {
        setSelectedObject(item);
        setSelectedRow(item.id);
    };
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                {Object.values(model.FormElements).map((element, index) => (
                    <th key={index}>{element.formLable}</th>
                ))}

            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr
                    key={item.id}
                    className={selectedRow === item.id ? "table-primary" : ""}
                    onClick={() => handleRowClick(item)}
                >
                    {Object.values(model.FormElements).map((element, index) => (
                        <td key={index}>{item[element.name]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </Table>
    )
}