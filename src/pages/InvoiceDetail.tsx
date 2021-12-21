
import axios from "axios";
import { useEffect, useState } from "react";
import { PdfViewer } from "../components/PdfViewer";


type invDetails = {
    InvoiceId: null | number,
    CustomerName: null | string,
    CustomerId: null | string,
    VendorName: null | string,
    VendorAddress: null | string,
    VendorAddressRecipient: null | string,
    InvoiceNumber: null | string,
    CustomerAddress: null | string,
    CustomerAddressRecipient: null | string,
    ShippingAddress: null | string,
    ShippingAddressRecipient: null | string,
    BillingAddress: null | string,
    BillingAddressRecipient: null | string,
    RemittanceAddress: null | string,
    RemittanceAddressRecipient: null | string,
    PurchaseNumber: null | string,
    DueDate: string,
    InvoiceDate: string,
    TotalAmount: null | number,
    LineItems: null | string,
    AmountDue: number,
    LastModifiedDateTime: null | string,
    TransactionDate: null | string,
    ReceivedDate: null | string
}

type listItems = {
    LineItemId: number,
    InvoiceId: number,
    Amount: number,
    PartNumber: null,
    ProductCode: null,
    Description: null,
    UnitPrice: number,
    Quantity: number,
    ShippingQuantity: number,
    Unit: number,
    Date: string,
    TaxAmount: number,
    TaxPercentage: number
}[]




export const InvoiceDetail = (props) => {
    const [init, set] = useState(true)
    const [listItems, setListItems] = useState<listItems>([])
    const [invDetails, setInvDetails] = useState<invDetails>({} as invDetails)


    useEffect(() => {
        axios.get(`https://invoiceprocessingapi.azurewebsites.net/lineitems/${props.data}`).then(res => {
            setListItems(res.data)
        }).catch(err => { console.log(err) })
    }, [])

    useEffect(() => {
        axios.get(`https://invoiceprocessingapi.azurewebsites.net/Details/${props.data}`).then(res => {
            setInvDetails(res.data)
        }).catch(err => { console.log(err) })
    }, [])

    const reducer = (prevVal, currentVal) => prevVal + currentVal.Amount
    const subTotal: number = listItems.reduce(reducer, 0)


    // style variable
    const formInput = 'form-control form-control-solid mt-1'
    const formSelect = 'form-select form-select-solid'
    const formLabel = 'form-label fw-bolder fs-6 gray-700 mt-2'

    const pdfToggle = init ? 'Hide Invoice' : 'Show Invoice'
    const collapseClass = init ? 'col-6' : 'col-12'
    return (
        <>
            <div className="container-fluid">
                <div className="row my-10">
                    <div className="col">
                        <h4 className="text-white">Invoice Details</h4>
                    </div>
                </div>
                <div className="row ">
                    <div className="col">
                        <div className="card card-flush shadow-sm">
                            <div className="card-header bg-white">
                                <h3 className="card-title fw-bolders">Invoice Details</h3>
                                <div className="card-toolbar">
                                    <span role='button' className="svg-icon svg-icon-danger svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3"
                                            d="M6.7 19.4L5.3 18C4.9 17.6 4.9 17 5.3 16.6L16.6 5.3C17 4.9 17.6 4.9 18 5.3L19.4 6.7C19.8 7.1 19.8 7.7 19.4 8.1L8.1 19.4C7.8 19.8 7.1 19.8 6.7 19.4Z"
                                            fill="black" />
                                        <path
                                            d="M19.5 18L18.1 19.4C17.7 19.8 17.1 19.8 16.7 19.4L5.40001 8.1C5.00001 7.7 5.00001 7.1 5.40001 6.7L6.80001 5.3C7.20001 4.9 7.80001 4.9 8.20001 5.3L19.5 16.6C19.9 16.9 19.9 17.6 19.5 18Z"
                                            fill="black" />
                                    </svg></span>

                                    <span role='button' className="svg-icon svg-icon-primary svg-icon-1 px-5"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                        viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24" />
                                            <path
                                                d="M17,4 L6,4 C4.79111111,4 4,4.7 4,6 L4,18 C4,19.3 4.79111111,20 6,20 L18,20 C19.2,20 20,19.3 20,18 L20,7.20710678 C20,7.07449854 19.9473216,6.94732158 19.8535534,6.85355339 L17,4 Z M17,11 L7,11 L7,4 L17,4 L17,11 Z"
                                                fill="#000000" fill-rule="nonzero" />
                                            <rect fill="#000000" opacity="0.3" x="12" y="4" width="3" height="5" rx="0.5" />
                                        </g>
                                    </svg></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="form-group text-start">
                                                    <label htmlFor="vendorName" className={formLabel}>Vendor
                                                        Name</label>
                                                    <div className="input-group input-group-solid">
                                                        <select id="vendorName" name="vendorName" className={formSelect}>
                                                            <option value="1">{invDetails?.VendorName}</option>
                                                        </select>
                                                        <button className='btn btn-secondary btn-sm' >Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <label htmlFor="vendorId" className={formLabel}>
                                                    Vendor Id</label>
                                                <input className={formInput} type="text" />
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group text-start">
                                                    <label htmlFor="remitTo" className={formLabel}>Remit
                                                        To</label>
                                                    <select id="remitTo" name="remitTo" className={formSelect}>
                                                        <option>{invDetails?.CustomerName}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="vendorAddress" className={formLabel}>Vendor
                                                        Address</label>
                                                    <input id="venderAddress" name="venderAddress" value={invDetails?.VendorAddress?.toString()} className={formInput} />
                                                    <input value='' className={formInput} />
                                                    <input value='' className={formInput} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="subsidiary"
                                                        className={formLabel}>Subsidiary</label>
                                                    <select id="subsidiary" name="subsidiary" className={formSelect}>
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="address" className={formLabel}>
                                                    Address</label>
                                                <input id="address" name="address" value={invDetails?.RemittanceAddress?.toString()} className={formInput} />
                                                <input value='' className={formInput} />
                                                <input className={formInput} />
                                                <div className="form-group text-start">
                                                    <label htmlFor="department" className={formLabel}>
                                                        Department</label>
                                                    <select id="department" name="department" className={formSelect}>
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="poNo" className={formLabel}>
                                                        PO #</label>
                                                    <div className='input-group input-group-solid'>
                                                        <select id="poNo" name="poNo" className={formSelect}>
                                                            <option>{invDetails.PurchaseNumber}</option>
                                                        </select>
                                                        <button className='btn btn-secondary btn-sm'><span className="svg-icon svg-icon-light svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M14.5 20.7259C14.6 21.2259 14.2 21.826 13.7 21.926C13.2 22.026 12.6 22.0259 12.1 22.0259C9.5 22.0259 6.9 21.0259 5 19.1259C1.4 15.5259 1.09998 9.72592 4.29998 5.82592L5.70001 7.22595C3.30001 10.3259 3.59999 14.8259 6.39999 17.7259C8.19999 19.5259 10.8 20.426 13.4 19.926C13.9 19.826 14.4 20.2259 14.5 20.7259ZM18.4 16.8259L19.8 18.2259C22.9 14.3259 22.7 8.52593 19 4.92593C16.7 2.62593 13.5 1.62594 10.3 2.12594C9.79998 2.22594 9.4 2.72595 9.5 3.22595C9.6 3.72595 10.1 4.12594 10.6 4.02594C13.1 3.62594 15.7 4.42595 17.6 6.22595C20.5 9.22595 20.7 13.7259 18.4 16.8259Z" fill="black" />
                                                            <path opacity="0.3" d="M2 3.62592H7C7.6 3.62592 8 4.02592 8 4.62592V9.62589L2 3.62592ZM16 14.4259V19.4259C16 20.0259 16.4 20.4259 17 20.4259H22L16 14.4259Z" fill="black" />
                                                        </svg></span>Refresh</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="tax" className={formLabel}>
                                                        Tax</label>
                                                    <input id="tax" name="tax" className={formInput} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div>
                                                    <label htmlFor="location" className={formLabel}>
                                                        Location</label>
                                                    <select id="location" name="location" className={formSelect}>
                                                        <option>{ }</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="d-flex flex-column">
                                                    <label htmlFor="invoiceNumber"
                                                        className="form-label fw-bolder  fs-6 gray-700   m-2">InvoiceNumber</label>
                                                    <input id="invoiceNumber" value={invDetails?.InvoiceNumber?.toString()} className={formInput} maxLength={20} />

                                                    <div className="form-check py-auto">
                                                        <label htmlFor="creditMemo"
                                                            className="form-check-label mt-5 fw-bolder fs-6 gray-700  ">Credit
                                                            Memo?</label>
                                                        <input type="checkbox" className="form-check-input form-check-solid mt-5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <label htmlFor="invoiceDate" className={formLabel}>Invoice
                                                    Date</label>
                                                <input value={(new Date(invDetails?.InvoiceDate)).toLocaleDateString()}
                                                    maxLength={10} className={formInput} />

                                            </div>
                                            <div className=" col-3">
                                                <label htmlFor="postingPeriod" className={formLabel}>Posting
                                                    Period</label>
                                                <input className={formInput} value={''} maxLength={20} />
                                            </div>
                                            <div className="col-3">
                                                <label htmlFor="dueDate" className={formLabel}>Due
                                                    Date</label>
                                                <input value={(new Date(invDetails.DueDate)).toLocaleDateString() === '1/1/1' ? '' : (new Date(invDetails.DueDate)).toLocaleDateString()}
                                                    maxLength={10} className={formInput} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <label htmlFor="invoiceAmount" className={formLabel}>Invoice
                                                    Amount</label>
                                                <input className={formInput} value={`$ ${invDetails ? invDetails.TotalAmount?.toFixed(2) : ''}`} maxLength={15} />
                                            </div>
                                            <div className="col-3">
                                                <label className={formLabel}>Currency</label>
                                                <input type="text" value={"USD"} className={formInput} maxLength={5} />
                                            </div>
                                            <div className="col-3">
                                                <label className={formLabel}>Subtotal</label>
                                                <input type="text" value={`$ 0.00`} className={formInput} maxLength={12} />
                                            </div>
                                            <div className="col-3">
                                                <label className={formLabel}>PO Subtotal</label>
                                                <input type="text" value={`$ 0.00`} className={formInput} maxLength={10} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="memo" className={formLabel}>Memo</label>
                                                <input type="text" className={formInput} />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="approver" className={formLabel}>Approver</label>
                                                <input type="text" className={formInput} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="d-flex flex-stack">
                                                    <label className={formLabel}>Attachments</label>
                                                    <div>
                                                        <button type="button" title="Add" className="btn btn-icon-primary" data-bs-toggle={"modal"} data-bs-target="#kt_modal_1"><span
                                                            className="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg"
                                                                width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3"
                                                                    d="M3 13V11C3 10.4 3.4 10 4 10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14H4C3.4 14 3 13.6 3 13Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M13 21H11C10.4 21 10 20.6 10 20V4C10 3.4 10.4 3 11 3H13C13.6 3 14 3.4 14 4V20C14 20.6 13.6 21 13 21Z"
                                                                    fill="black" />
                                                            </svg></span>
                                                        </button>
                                                        <button title="Delete" className="btn btn-icon-danger"
                                                            data-bs-toggle="tooltip"><span className="svg-icon svg-icon-2"><svg
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
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table table-bordered bg-light rounded gs-3">
                                                        <thead className="fs-6 fw-bolder ">
                                                            <tr>
                                                                <th><input type="checkbox" className="form-check-input form-check-sm" />
                                                                </th>
                                                                <th>Description</th>
                                                                <th>File Name</th>
                                                                <th>Attached By</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white fw-bold">
                                                            <tr>
                                                                <td><input type="checkbox" className="form-check-input form-check-sm" /></td>
                                                                <td>Milestone 1: At delivery of discovery summary document</td>
                                                                <td>invoice0038.pdf</td>
                                                                <td>peter</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="col d-flex flex-column ">
                                                    <div className="w-100">
                                                        <label htmlFor="comments" className="form-label fs-6 fw-bolder mt-2">
                                                            Comments</label>
                                                        <textarea className="form-control form-control-solid mt-2"></textarea>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <button className="btn btn-light-success btn-sm m-2">Approved
                                                            <span className="svg-icon svg-icon svg-icon-1"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3"
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                                                                    fill="black" />
                                                            </svg></span>
                                                        </button>
                                                        <button className="btn btn-light-warning btn-sm my-2">Not
                                                            Approved <span className="svg-icon svg-icon-1"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3"
                                                                    d="M6.7 19.4L5.3 18C4.9 17.6 4.9 17 5.3 16.6L16.6 5.3C17 4.9 17.6 4.9 18 5.3L19.4 6.7C19.8 7.1 19.8 7.7 19.4 8.1L8.1 19.4C7.8 19.8 7.1 19.8 6.7 19.4Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M19.5 18L18.1 19.4C17.7 19.8 17.1 19.8 16.7 19.4L5.40001 8.1C5.00001 7.7 5.00001 7.1 5.40001 6.7L6.80001 5.3C7.20001 4.9 7.80001 4.9 8.20001 5.3L19.5 16.6C19.9 16.9 19.9 17.6 19.5 18Z"
                                                                    fill="black" />
                                                            </svg></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="row my-2 ">
                    <div className="col">
                        <div className="card card-flush">
                            <div className="card-header ribbon ribbon-start">
                                <h3 className="card-title fw-bolders">Invoice</h3>
                                <div role="button" data-bs-toggle="collapse" onClick={() => set(!init)} data-bs-target="#pdf" className="ribbon-label bg-primary">{pdfToggle}</div>
                            </div>
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row d-flex">
                                        <div id="pdf" className=" col-6 collapse show fade">
                                            <div className="m-3">
                                                <PdfViewer pdfurl={props.data} />
                                            </div>
                                        </div>
                                        <div className={collapseClass}>
                                            <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6 ">
                                                <li className="nav-item">
                                                    <a className="nav-link active " role="button" data-bs-toggle="tab"
                                                        href="#expensesTab">
                                                        <h4>Expenses</h4>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link " role="button" data-bs-toggle="tab" href="#itemsTab">
                                                        <h4>Items</h4>
                                                    </a>
                                                </li>
                                            </ul>

                                            <div className="tab-content h-100">
                                                <div className="tab-pane fade h-100" id="itemsTab" role="tabpanel">
                                                    <div className="table-responsive mx-1" >
                                                        <table className="table table-rounded border bg-light gs-3 ">
                                                            <thead className="fw-bolder fs-6">
                                                                <tr>
                                                                    <th className="min-w-10px">Qty</th>
                                                                    <th className="min-w-80px">PO Qty</th>
                                                                    <th className="min-w-100px">Item</th>
                                                                    <th className="min-w-150px">Vendor Part#</th>
                                                                    <th className="min-w-250px">Description</th>
                                                                    <th className="min-w-100px">Department</th>
                                                                    <th className="min-w-100px">Location</th>
                                                                    <th className="min-w-100px">Inv Rate</th>
                                                                    <th className="min-w-150px">Inv Amount</th>
                                                                    <th className="min-w-100px">PO Rate</th>
                                                                    <th className="min-w-150px">PO Line Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white">
                                                                {listItems.map(listItem => {
                                                                    return (
                                                                        <tr key={listItem.InvoiceId} >
                                                                            <td>{listItem.Quantity}</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>{listItem.PartNumber}</td>
                                                                            <td>{listItem.Description}</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>{`$ ${listItem.UnitPrice.toFixed(2)}`}</td>
                                                                            <td>{`$ ${listItem.Amount.toFixed(2)}`}</td>
                                                                            <td></td>
                                                                            <td>{ }</td>
                                                                        </tr>
                                                                    )
                                                                })}
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
                                                </div>
                                                <div className="tab-pane fade show active h-100" id="expensesTab" role="tabpanel">
                                                    <div className="d-flex flex-row-reverse mt-2">
                                                        <button title="Delete" className="btn btn-icon-danger" data-bs-toggle="tooltip">
                                                            <span className="svg-icon svg-icon-2"><svg
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
                                                            </svg></span></button>
                                                        <button title="Copy" className="btn btn-icon-secondary"
                                                            data-bs-toggle="tooltip"> <span className="svg-icon svg-icon-2"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none">
                                                                <rect opacity="0.5" x="7" y="2" width="14" height="16" rx="3"
                                                                    fill="black" />
                                                                <rect x="3" y="6" width="14" height="16" rx="3" fill="black" />
                                                            </svg></span></button>
                                                        <button title="Add" className="btn btn-icon-primary " data-bs-toggle="tooltip">
                                                            <span className="svg-icon svg-icon-2"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3"
                                                                    d="M3 13V11C3 10.4 3.4 10 4 10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14H4C3.4 14 3 13.6 3 13Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M13 21H11C10.4 21 10 20.6 10 20V4C10 3.4 10.4 3 11 3H13C13.6 3 14 3.4 14 4V20C14 20.6 13.6 21 13 21Z"
                                                                    fill="black" />
                                                            </svg></span></button>
                                                    </div>
                                                    <div className="table-responsive m-3">
                                                        <table className="table table-bordered h-80 bg-light rounded min-h-80 gs-3 ">
                                                            <thead className="fs-6 fw-bolder">
                                                                <tr>
                                                                    <th>Account</th>
                                                                    <th>Amount</th>
                                                                    <th>Dept</th>
                                                                    <th>Location</th>
                                                                    <th>Memo</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white" >
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr className="fw-bold">
                                                                    <th colSpan={3}></th>
                                                                    <th> Subtotal </th>
                                                                    <th>$ 0.00</th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-5">
                                        <div className="col">
                                            <div className="d-flex flex-stack">
                                                <div>
                                                    <p className="fw-bolder fs-4">Approval History</p>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-rounded bg-light border table-row-gray-300 gs-3">
                                                    <thead className="fs-6 fw-bolder">
                                                        <tr>
                                                            <th>Approver</th>
                                                            <th>Date Time</th>
                                                            <th>Comments</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="fs-6 fw-bold bg-white">
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div>
            </div>
            <div className="modal fade" tabIndex={-1} id="kt_modal_1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Attachment</h5>

                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x">x</span>
                            </div>

                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="form-group m-2">
                                    <label htmlFor="descprition" className="form-label fw-bold">Descprition</label>
                                    <textarea data-kt-autosize="true" className="form-control"></textarea>
                                </div>
                                <div className="form-group m-2">
                                    <label className="form-label fw-bold">Attachment</label>
                                    <input type="file" className="form-control invalid" accept="application/pdf,image/jpg,image/jpeg,image/png" />
                                    <small className="text-muted">File Format :.pdf,.jpeg,.png File Size :(max:10mb)</small>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




