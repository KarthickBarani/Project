
import axios from "axios"
import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import { PdfViewer } from "../components/PdfViewer"
import { ListItemsComp } from "../components/ListItemsComp"
import { ExpensesComp } from "../components/ExpensesComp"
import { useFormik } from "formik"
import { Loading } from "../components/Loading"


type expensesType = {
    ExpenseId: number,
    InvoiceId: number,
    Amount: number,
    Memo: null | string,
    AddedDateTime: null | string
}[]

type lineItemsType = {
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


type invDetailsType = {
    InvoiceId: number,
    CustomerName: null | string,
    CustomerId: null | string,
    VendorId: null | string,
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
    DueDate: null | string,
    InvoiceDate: null | string,
    TotalAmount: number,
    TaxTotal: number,
    LineItems: [] | lineItemsType,
    Expenses: [] | expensesType,
    AmountDue: number,
    LastModifiedDateTime: null | string,
    TransactionDate: null | string,
    ReceivedDate: null | string
}


export const InvoiceDetail = (props) => {


    const [init, set] = useState(true)
    const [invDetails, setInvDetails] = useState<invDetailsType>({} as invDetailsType)
    const [listItems, setListItems] = useState<lineItemsType>([] as lineItemsType)
    const [expenses, setExpenses] = useState<expensesType>([] as expensesType)
    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)



    useEffect(() => {
        axios.get(`https://invoiceprocessingapi.azurewebsites.net/api/invoice/details/${props.data}`).then(res => {
            setloading(false)
            setInvDetails(res.data)
            setListItems(res.data.LineItems)
            setExpenses(res.data.Expenses)
        }).catch(err => {
            setloading(false)
            setError(true)
        })
    }, [props.data])

    const formik = useFormik({
        initialValues: {
            description: '',
            qty: 0,
            invRate: 0
        },
        onSubmit: value => {
            let newArr: lineItemsType = [...listItems]
            newArr.push({
                LineItemId: 0,
                InvoiceId: 0,
                Amount: 0,
                PartNumber: '',
                ProductCode: '',
                Description: value.description,
                UnitPrice: value.invRate,
                Quantity: value.qty,
                ShippingQuantity: 0,
                Unit: 0,
                Date: '',
                TaxAmount: 0,
                TaxPercentage: 0,
            })
            setListItems(newArr)
        }
    })


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
                                {loading ? <Loading /> : error ? <h4>Something Error in Server</h4> : <Form invDetails={invDetails} ></Form>}
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
                                                    {loading ? <Loading /> : <ListItemsComp listItems={listItems} setListItems={setListItems} />}
                                                </div>
                                                <div className="tab-pane fade show active h-100" id="expensesTab" role="tabpanel">
                                                    <div className="d-flex flex-row-reverse mt-2 me-2">

                                                        <span title="Refresh" role='button' className="svg-icon svg-icon-primary svg-icon-2 mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M14.5 20.7259C14.6 21.2259 14.2 21.826 13.7 21.926C13.2 22.026 12.6 22.0259 12.1 22.0259C9.5 22.0259 6.9 21.0259 5 19.1259C1.4 15.5259 1.09998 9.72592 4.29998 5.82592L5.70001 7.22595C3.30001 10.3259 3.59999 14.8259 6.39999 17.7259C8.19999 19.5259 10.8 20.426 13.4 19.926C13.9 19.826 14.4 20.2259 14.5 20.7259ZM18.4 16.8259L19.8 18.2259C22.9 14.3259 22.7 8.52593 19 4.92593C16.7 2.62593 13.5 1.62594 10.3 2.12594C9.79998 2.22594 9.4 2.72595 9.5 3.22595C9.6 3.72595 10.1 4.12594 10.6 4.02594C13.1 3.62594 15.7 4.42595 17.6 6.22595C20.5 9.22595 20.7 13.7259 18.4 16.8259Z" fill="black" />
                                                            <path opacity="0.3" d="M2 3.62592H7C7.6 3.62592 8 4.02592 8 4.62592V9.62589L2 3.62592ZM16 14.4259V19.4259C16 20.0259 16.4 20.4259 17 20.4259H22L16 14.4259Z" fill="black" />
                                                        </svg></span>

                                                        <span title="Delete" role='button' className="svg-icon svg-icon-2 svg-icon-danger mx-2"><svg
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

                                                        <span title="Copy" role='button' className="svg-icon svg-icon-2 svg-icon-secondary mx-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none">
                                                            <rect opacity="0.5" x="7" y="2" width="14" height="16" rx="3"
                                                                fill="black" />
                                                            <rect x="3" y="6" width="14" height="16" rx="3" fill="black" />
                                                        </svg></span>

                                                        <span title="Add" role='button' className="svg-icon svg-icon-2 svg-icon-primary mx-2"><svg
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
                                                    <div className="table-responsive m-3">
                                                        <table className="table table-bordered h-80 bg-light rounded min-h-80 gs-3 ">
                                                            <thead className="fs-6 fw-bolder">
                                                                <tr>
                                                                    <th>Account</th>
                                                                    <th>Amount</th>
                                                                    <th>Memo</th>
                                                                    <th>Location</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white" >
                                                                {loading ? <Loading /> : <ExpensesComp expenses={expenses} setExpenses={setExpenses} />}

                                                            </tbody>
                                                            <tfoot>
                                                                <tr className="fw-bold">
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
            <div className="modal fade" tabIndex={-1} id="addListItem">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Item</h5>

                            <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span className="svg-icon svg-icon-2x">x</span>
                            </div>

                        </div>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group m-2">
                                    <label htmlFor="description" className="form-label fw-bold">Descprition</label>
                                    <textarea id='description' name='description' data-kt-autosize="true" className="form-control" value={formik.values.description} onChange={formik.handleChange} />
                                </div>
                                <div className="d-flex">
                                    <div className="form-group m-2">
                                        <label htmlFor="qty" className="form-label fw-bold">Quantity</label>
                                        <input id='qty' name='qty' type="number" className="form-control" value={formik.values.qty} onChange={formik.handleChange} />
                                    </div>
                                    <div className="form-group m-2">
                                        <label htmlFor="invRate" className="form-label fw-bold">Invoice Rate</label>
                                        <input id="invRate" name="invRate" type="number" className="form-control" value={formik.values.invRate} onChange={formik.handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}




