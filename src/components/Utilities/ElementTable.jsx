import React, {useState} from "react";
import {Store, StoreModel} from "../../Classes/Store";
import {Operation} from "../../Classes/GlobalConstents";
import {DeleteElement} from "./DeleteElement";
import {ElementDetails} from "./ElementDetails";
import {Table} from "react-bootstrap";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export function ElementTable({
                                 _data,
                                 setData,
                                 setShowModal,
                                 showModal,
                                 operation,
                                 alert,
                                 setAlert,
                                 object,
                                 model,
                                 elementName
                             }) {
    const [selectedRow, setSelectedRow] = useState(new StoreModel());
    const [selectedOperation, setSelectedOperation] = useState(operation); // S = Show , D = Delete, E = Edit

    const handleRowClick = (element) => {
        setSelectedRow(element);
    };

    const handleControls = (operation) => {
        setSelectedOperation(operation);
        setShowModal(operation === Operation.Edit || operation === Operation.Show);
    }


    return (
        <div>
            {selectedOperation === Operation.Delete &&
                <DeleteElement selectedObject={selectedRow.id} setData={setData}
                               setSelectedOperation={setSelectedOperation} object={object} elementName={elementName}/>}

            <ElementDetails operation={selectedOperation} data={selectedRow} setData={setData}
                            setShowModal={setShowModal} showModal={showModal} alert={alert} setAlert={setAlert}
                            object={object} model={model} elementName={elementName}/>
            {/*{showPrint && <PrintUser user={selectedRow}/>}*/}

            <Table striped bordered hover>
                <thead>
                <tr>
                    {Object.values(model.TableColumns).map((element, index) => {
                        return (<th>{element.header}</th>)
                    })}
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {_data.map((element) => (
                    <tr key={element.id}
                        className={selectedRow.id === element.id ? "table-primary" : ""}
                        onClick={() => handleRowClick(element)}>
                        {Object.values(model.TableColumns).map((column, index) => {
                            return (<td>{element[column.elementValueName]}</td>)
                        })}
                        <td>
                            <div className="user-table-controls-buttons">
                                <RemoveRedEyeIcon className="user-table-controls-btn bg-warning"
                                                  onClick={() => handleControls(Operation.Show)}/>
                                <EditIcon className="user-table-controls-btn bg-primary"
                                          onClick={() => handleControls(Operation.Edit)}/>
                                <DeleteForeverIcon className="user-table-controls-btn bg-danger"
                                                   onClick={() => handleControls(Operation.Delete)}/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </div>

    )
}