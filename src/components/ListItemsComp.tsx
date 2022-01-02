
import { useState } from "react"

type LineItemsType = {
    LineItemId: number,
    InvoiceId: number,
    Amount: number,
    PartNumber: null | string,
    ProductCode: null | string,
    Description: string,
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


    const [toggle, setToggle] = useState<boolean>(false)
    const [current, setCurrent] = useState<number>(0)

    const reducer = (prevVal, currentVal) => prevVal + (currentVal.Amount)
    const poSubtotal: number = props.listItems?.reduce(reducer, 0)



    return (
        <div className="table-responsive mx-1">
            <table className="table table-rounded border bg-light gs-3 ">
                <thead className="fw-bolder fs-6">
                    <tr>
                        <th className="min-w-100px">Action</th>
                        <th className="min-w-150px">Qty</th>
                        <th className="min-w-80px">PO Qty</th>
                        <th className="min-w-100px">Item</th>
                        <th className="min-w-150px">Vendor Part#</th>
                        <th className="min-w-350px">Description</th>
                        <th className="min-w-100px">Department</th>
                        <th className="min-w-100px">Location</th>
                        <th className="min-w-100px">Inv Rate</th>
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
                                    <td><span title="Add" role='button' onClick={() => {
                                        let newArr: LineItemsType = [...props.listItems]
                                        newArr.splice(index + 1, 0, {
                                            LineItemId: Date.now(),
                                            InvoiceId: 0,
                                            Amount: 0,
                                            PartNumber: '',
                                            ProductCode: '',
                                            Description: '',
                                            UnitPrice: 0,
                                            Quantity: 0,
                                            ShippingQuantity: 0,
                                            Unit: 0,
                                            Date: '',
                                            TaxAmount: 0,
                                            TaxPercentage: 0,
                                        })
                                        console.log(newArr)
                                        props.setListItems(newArr)
                                    }} className="svg-icon svg-icon-2 svg-icon-primary mx-2"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3"
                                                d="M3 13V11C3 10.4 3.4 10 4 10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14H4C3.4 14 3 13.6 3 13Z"
                                                fill="black" />
                                            <path
                                                d="M13 21H11C10.4 21 10 20.6 10 20V4C10 3.4 10.4 3 11 3H13C13.6 3 14 3.4 14 4V20C14 20.6 13.6 21 13 21Z"
                                                fill="black" />
                                        </svg></span>
                                        <span title="Delete" role='button' onClick={() => {
                                            let newArr: LineItemsType = [...props.listItems]
                                            newArr.splice(index, 1)
                                            props.setListItems(newArr)
                                        }} className="svg-icon svg-icon-2 svg-icon-danger mx-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                    fill="black" />
                                                <path opacity="0.5"
                                                    d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                    fill="black" />
                                                <path opacity="0.5"
                                                    d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                    fill="black" />
                                            </svg></span>
                                    </td>
                                    <td onDoubleClick={() => {
                                        setToggle(true)
                                        setCurrent(listItem.LineItemId)
                                    }} >
                                        {
                                            toggle && current === listItem.LineItemId ? <input type="number" className="form-control" value={listItem.Quantity} onBlur={() => {
                                                setToggle(false)
                                                setCurrent(0)
                                            }} onChange={(e) => {
                                                let newarry = [...props.listItems]
                                                newarry[index].Quantity = e.target.valueAsNumber
                                                newarry[index].Amount = newarry[index].UnitPrice * e.target.valueAsNumber
                                                props.setListItems(newarry)
                                            }} /> : listItem.Quantity}
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>{listItem.PartNumber}</td>
                                    <td onDoubleClick={() => {
                                        setToggle(true)
                                        setCurrent(listItem.LineItemId)
                                    }} > {toggle && current === listItem.LineItemId ? <textarea className="form-control" data-kt-autosize="true" name="description" id="description" onBlur={() => {
                                        setToggle(false)
                                        setCurrent(0)
                                    }} onChange={
                                        e => {
                                            let newarry = [...props.listItems]
                                            newarry[index].Description = e.target.value
                                            props.setListItems(newarry)
                                        }
                                    } value={listItem.Description}></textarea> : listItem.Description}</td>
                                    <td></td>
                                    <td></td>
                                    <td onDoubleClick={() => {
                                        setToggle(true)
                                        setCurrent(listItem.LineItemId)
                                    }}>
                                        {
                                            toggle && current === listItem.LineItemId ?
                                                <input type="number" className="form-control" value={listItem.UnitPrice} onBlur={() => {
                                                    setToggle(false)
                                                    setCurrent(0)
                                                }} onChange={e => {
                                                    let newarry = [...props.listItems]
                                                    newarry[index].UnitPrice = e.target.valueAsNumber
                                                    newarry[index].Amount = newarry[index].Quantity * e.target.valueAsNumber
                                                    props.setListItems(newarry)
                                                }} />
                                                : `$ ${listItem.UnitPrice.toFixed(2)}`
                                        }
                                    </td>
                                    <td onDoubleClick={() => {
                                        setToggle(true)
                                        setCurrent(listItem.LineItemId)
                                    }}>
                                        {
                                            toggle && current === listItem.LineItemId ?
                                                <input type="number" className="form-control" value={listItem.Amount} onBlur={() => {
                                                    setToggle(false)
                                                    setCurrent(0)
                                                }} onChange={e => {
                                                    let newarry = [...props.listItems]
                                                    newarry[index].Amount = e.target.valueAsNumber
                                                    newarry[index].UnitPrice = e.target.valueAsNumber / listItem.Quantity
                                                    props.setListItems(newarry)
                                                }} />
                                                : current === listItem.LineItemId ? `$ ${(listItem.Quantity * listItem.UnitPrice).toFixed(2)}` : `$ ${listItem.Amount.toFixed(2)}`
                                        }</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr className="fw-bold">
                        <th colSpan={8}></th>
                        <th className="min-w-150px">Items Subtotal</th>
                        <th>{`$ ${poSubtotal?.toFixed(2)}`}</th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}