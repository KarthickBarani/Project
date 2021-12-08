
import React, { useState } from "react";

import { PdfViewer } from "./PdfViewer";




const tableStyle = {
    height: "100vh",
    overflowy: "scroll"
}


export const InvoiceDetail = () => {
    const [init, set] = useState(true)
    const pdfToggle = init ? 'Show Invoice' : 'Hide Invoice'
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
                                    <span className="svg-icon svg-icon-primary svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3"
                                            d="M6.7 19.4L5.3 18C4.9 17.6 4.9 17 5.3 16.6L16.6 5.3C17 4.9 17.6 4.9 18 5.3L19.4 6.7C19.8 7.1 19.8 7.7 19.4 8.1L8.1 19.4C7.8 19.8 7.1 19.8 6.7 19.4Z"
                                            fill="black" />
                                        <path
                                            d="M19.5 18L18.1 19.4C17.7 19.8 17.1 19.8 16.7 19.4L5.40001 8.1C5.00001 7.7 5.00001 7.1 5.40001 6.7L6.80001 5.3C7.20001 4.9 7.80001 4.9 8.20001 5.3L19.5 16.6C19.9 16.9 19.9 17.6 19.5 18Z"
                                            fill="black" />
                                    </svg></span>
                                    <button data-bs-dismiss="click" className="btn btn-icon " title="Save"
                                        data-bs-toggle="tooltip">
                                        <span className="svg-icon svg-icon-primary svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg"
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
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group text-start">
                                                    <label htmlFor="vendorName" className="form-label fw-bolder  fs-6 gray-700   m-2">Vendor
                                                        Name</label>
                                                    <select id="vendorName" name="vendorName" className="form-select form-select-solid ">
                                                        <option value="1">Squiz Inc</option>
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="vendorAddress" className="form-label fw-bolder  fs-6 gray-700   m-2">Vendor
                                                        Address</label>
                                                    <input id="venderAddress" name="venderAddress" value={"12 E 49th Street 11th Floor"} className="form-control form-control-solid " />
                                                    <input value="New York NY 10017" className="form-control form-control-solid mt-3 " />
                                                    <input value="+646 876 476" className="form-control form-control-solid mt-3 " />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="vendorId" className="form-label fw-bolder  fs-6 gray-700   m-2">Vendor
                                                        Id</label>
                                                    <input id="venderId" name="venderId" value={"0485"} className="form-control form-control-solid " />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group text-start">
                                                    <label htmlFor="remitTo" className="form-label m-2 fw-bolder  fs-6 gray-700  ">Remit
                                                        To</label>
                                                    <select id="remitTo" name="remitTo" className="form-select form-select-solid ">
                                                        <option>College of Southern Nevada</option>
                                                    </select>
                                                </div>
                                                <label htmlFor="address" className="form-label fw-bolder  fs-6 gray-700   m-2">
                                                    Address</label>
                                                <input id="address" name="address" value="Attn: Accounts Payable" className="form-control form-control-solid " />
                                                <input value="Las Vegas" className="form-control form-control-solid mt-3 " />
                                                <input className="form-control form-control-solid mt-3 " />
                                                <div className="form-group">
                                                    <label htmlFor="subsidiary"
                                                        className="form-label fw-bolder fs-6-gray-700   m-2">Subsidiary</label>
                                                    <select id="subsidiary" name="subsidiary" className="form-select form-select-solid ">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group text-start">
                                                    <label htmlFor="department" className="form-label m-2 fw-bolder fs-6 gray-700">
                                                        Department</label>
                                                    <select id="department" name="department" className="form-select form-select-solid ">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div>
                                                    <label htmlFor="location" className="form-label m-2 fw-bolder  fs-6 gray-700  ">
                                                        Location</label>
                                                    <select id="location" name="location" className="form-select form-select-solid ">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="d-flex flex-column">
                                                    <label htmlFor="invoiceNumber"
                                                        className="form-label fw-bolder  fs-6 gray-700   m-2">InvoiceNumber</label>
                                                    <input id="invoiceNumber" value={10054803} className="form-control form-control-solid " maxLength={20} />

                                                    <div className="form-check py-auto">
                                                        <label htmlFor="creditMemo"
                                                            className="form-check-label mt-5 fw-bolder fs-6 gray-700  ">Credit
                                                            Memo?</label>
                                                        <input type="checkbox" className="form-check-input form-check-solid mt-5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <label htmlFor="invoiceDate" className="form-label m-2 fw-bolder  fs-6 gray-700  ">Invoice
                                                    Date</label>
                                                <input value={"06-25-2021"} data-inputmask="'mask': '99/99/9999','placeholder':'MM/DD/YYYY'"
                                                    maxLength={10} className="form-control form-control-solid  " />

                                            </div>
                                            <div className=" col-3">
                                                <label htmlFor="postingPeriod" className="form-label m-2 fw-bolder  fs-6 gray-700  ">Posting
                                                    Period</label>
                                                <input className="form-control form-control-solid " maxLength={20} />
                                            </div>
                                            <div className="col-3">
                                                <label htmlFor="dueDate" className="form-label m-2 fw-bolder  fs-6 gray-700  ">Due
                                                    Date</label>
                                                <input value={"07-25-2021"} data-inputmask="'mask': '99/99/9999','placeholder':'MM/DD/YYYY'"
                                                    maxLength={10} className="form-control form-control-solid  " />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <label htmlFor="invoiceAmount" className="form-label m-2 fw-bolder  fs-6 gray-700  ">Invoice
                                                    Amount</label>
                                                <input className="form-control form-control-solid " value={"$ 27,500.00"} maxLength={15} />
                                            </div>
                                            <div className="col-3">
                                                <label className="form-label m-2 fw-bolder  fs-6 gray-700  ">Currency</label>
                                                <input type="text" value={"USD"} className="form-control form-control-solid " maxLength={5} />
                                            </div>
                                            <div className="col-3">
                                                <label className="form-label m-2 fw-bolder  fs-6 gray-700 ">Subtotal</label>
                                                <input type="text" value={"$ 27,500.00"} className="form-control form-control-solid " maxLength={12} />
                                            </div>
                                            <div className="col-3">
                                                <label className="form-label m-2 fw-bolder  fs-6 gray-700  ">PO Subtotal</label>
                                                <input type="text" value={"$ 27,500.00"} className="form-control form-control-solid " maxLength={10} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="memo" className="form-label m-2 fw-bolder  fs-6   ">Memo</label>
                                                <input type="text" className="form-control form-control-solid  " />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="approver" className="form-label m-2 fw-bolder  fs-6  ">Approver</label>
                                                <input type="text" className="form-control form-control-solid  " />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="d-flex flex-stack">
                                                    <label className="form-label fs-6 fw-bolder m-2">Attachments</label>
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
                                                    <div className="w-100 me-10">
                                                        <label htmlFor="comments" className="form-label m-2 fs-6 fw-bolder ">
                                                            Comments</label>
                                                        <textarea className="form-control form-control-solid m-2"></textarea>
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
                <div className="row my-2 h-100vh">
                    <div className="col">
                        <div className="card card-flush">
                            <div className="card-header ribbon ribbon-start">
                                <h3 className="card-title fw-bolders">Invoice</h3>
                                <div role="button" data-bs-toggle="collapse" onClick={() => set(!init)} data-bs-target="#pdf" className="ribbon-label bg-primary">{pdfToggle}</div>
                            </div>
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div id="pdf" className="col collapse show fade">
                                            <PdfViewer />
                                        </div>
                                        <div className="col">
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
                                                    <div className="table-responsive" >
                                                        <table className="table table-rounded border bg-light gs-3 " style={tableStyle}>
                                                            <thead className="fw-bolder fs-6">
                                                                <tr>
                                                                    <th className="min-w-10px">Qty</th>
                                                                    <th className="min-w-80px">PO Qty</th>
                                                                    <th className="min-w-100px">Items</th>
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
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>0</td>
                                                                    <td>AF20221070</td>
                                                                    <td>WORTS4200</td>
                                                                    <td>TS458214 Instant On/Off Trigger Start Torch</td>
                                                                    <td></td>
                                                                    <td>St.jhon Street</td>
                                                                    <td>$ 40.10</td>
                                                                    <td>$ 40.10</td>
                                                                    <td>$ 120.30</td>
                                                                    <td>$ 120.30</td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr className="fw-bold">
                                                                    <th colSpan={9}></th>
                                                                    <th>Items Subtotal</th>
                                                                    <th>$ 120.30</th>
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
                                                    <div className="table-responsive ">
                                                        <table className="table table-bordered h-80 bg-light rounded min-h-80 gs-3 ">
                                                            <thead className="fs-6 fw-bolder">
                                                                <tr>
                                                                    <th>Account</th>
                                                                    <th>Amount</th>
                                                                    <th>Dept</th>
                                                                    <th>Location</th>
                                                                    <th>Memo</th>
                                                                    <th>Err #</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white" style={tableStyle}>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr className="fw-bold">
                                                                    <th colSpan={4}></th>
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
                </div >
            </div >
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
                                    <small className="text-muted">File Format Accpect only this .pdf,.jpeg,.png</small>
                                </div>
                                {/* <div className="fv-row">

                                        <div className="dropzone" id="kt_dropzonejs_example_1">

                                            <div className="dz-message needsclick">

                                                <i className="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>



                                                <div className="ms-4">
                                                    <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                    <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                                                </div>

                                            </div>
                                        </div>

                                    </div> */}
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



export default InvoiceDetail
