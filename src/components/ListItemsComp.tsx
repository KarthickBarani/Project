import { useState } from "react"

type LineItemsType = {
    LineItemId: number,
    InvoiceId: number,
    Amount: number,
    PartNumber: null | string,
    ProductCode: null | string,
    Description: null | string,
    UnitPrice: number,
    Quantity: number,
    ShippingQuantity: number,
    Unit: number,
    Date: null | string,
    TaxAmount: number,
    TaxPercentage: number
}[]

export const ListItemsComp = (props: {
    listItems: LineItemsType
    setListItems: Function
}) => {



    const [toggle, setToggle] = useState(false)

    const reducer = (prevVal, currentVal) => prevVal + (currentVal.UnitPrice * currentVal.Quantity)
    const subTotal: number = props.listItems.reduce(reducer, 0)

    return (
        <>
            <div className="d-flex flex-row-reverse m-1">
                <span title="Add" role='button' data-bs-toggle='modal' data-bs-target='#addListItem' className="svg-icon svg-icon-2 svg-icon-primary mx-2"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none">
                    <path opacity="0.3"
                        d="M3 13V11C3 10.4 3.4 10 4 10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14H4C3.4 14 3 13.6 3 13Z"
                        fill="black" />
                    <path
                        d="M13 21H11C10.4 21 10 20.6 10 20V4C10 3.4 10.4 3 11 3H13C13.6 3 14 3.4 14 4V20C14 20.6 13.6 21 13 21Z"
                        fill="black" />
                </svg></span>
            </div>
            <div className="table-responsive mx-1">
                <table className="table table-rounded border bg-light gs-3 ">
                    <thead className="fw-bolder fs-6">
                        <tr>
                            <th className="min-w-200px">Qty</th>
                            <th className="min-w-80px">PO Qty</th>
                            <th className="min-w-100px">Item</th>
                            <th className="min-w-150px">Vendor Part#</th>
                            <th className="min-w-250px">Description</th>
                            <th className="min-w-100px">Department</th>
                            <th className="min-w-100px">Location</th>
                            <th className="min-w-200px">Inv Rate</th>
                            <th className="min-w-150px">Inv Amount</th>
                            <th className="min-w-100px">PO Rate</th>
                            <th className="min-w-150px">PO Line Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            props.listItems?.map((listItem, index) => {
                                return (
                                    <tr key={listItem.LineItemId} >
                                        <td onClick={() => setToggle(true)} >
                                            {toggle ? <input type="number" min={0} className="form-control form-control-solid" value={listItem.Quantity} onBlur={() => setToggle(false)} onChange={(e) => {
                                                // props.setListItems([...props.listItems, props.listItems[index].Quantity = e.target.valueAsNumber])
                                                let newarry = [...props.listItems]
                                                newarry[index].Quantity = e.target.valueAsNumber
                                                props.setListItems(newarry)
                                            }} /> : listItem.Quantity}
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>{listItem.PartNumber}</td>
                                        <td>{listItem.Description}</td>
                                        <td></td>
                                        <td></td>
                                        <td onClick={() => setToggle(true)}>
                                            {
                                                toggle ?
                                                    <div className="input-group input-group-solid" >
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" min={0} className="form-control form-control-solid" value={listItem.UnitPrice} onBlur={() => setToggle(false)} onChange={e => {
                                                            let newarry = [...props.listItems]
                                                            newarry[index].UnitPrice = e.target.valueAsNumber
                                                            props.setListItems(newarry)
                                                        }} />
                                                    </div>
                                                    : `$ ${listItem.UnitPrice.toFixed(2)}`
                                            }
                                        </td>
                                        <td>{`$ ${(listItem.UnitPrice * listItem.Quantity).toFixed(2)}`}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr className="fw-bold">
                            <th colSpan={7}></th>
                            <th className="min-w-150px">Items Subtotal</th>
                            <th>{`$ ${subTotal.toFixed(2)}`}</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}