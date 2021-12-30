
import { Charts } from "../components/Charts"
import { Table } from "../components/Table"
import { useEffect, useState } from "react"
import axios from "axios"
import { Loading } from "../components/Loading"

type InvoiceData = {
    InvoiceId: number,
    CustomerName: null | string,
    CustomerId: null | string,
    VendorName: string,
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
    LineItems: null | string,
    AmountDue: number,
    LastModifiedDateTime: null | string,
    TransactionDate: null | string,
    ReceivedDate: null | string

}[]

export const Home = ({ setInvNumber }) => {

    const [Pass, setPass] = useState<number>()
    const [data, setData] = useState<InvoiceData>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        axios.get('https://invoiceprocessingapi.azurewebsites.net/api/Invoice').then(res => {
            setLoading(false)
            setData(res.data)
        }).catch(err => {
            setLoading(false)
            setError(true)
        })
    }, [])

    return (
        <div className="container-fluid">
            <div className="row mt-10">
                <div className="col">
                    <h4 className="text-white" >Dashboard</h4>
                </div>
            </div>
            <div className="row mt-10">
                <div className="col-4 ">
                    <div className="card card-flush shadow-sm">
                        <div className="card-header">
                            <h4 className="card-title">Chart</h4>
                        </div>
                        <div className="card-body">
                            <Charts />
                        </div>
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="card card-flush shadow-sm">
                        <div className="card-header">
                            <h4 className="card-title">Chart</h4>
                        </div>
                        <div className="card-body">
                            <Charts />
                        </div>
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="card card-flush shadow-sm">
                        <div className="card-header">
                            <h4 className="card-title">Chart</h4>
                        </div>
                        <div className="card-body">
                            <Charts />
                        </div>
                    </div>
                </div>

            </div>
            <div className="row justify-content-between g-5 my-3">
                <div className="col">
                    {loading ? <Loading /> : error ? <h4>Something Error from Server !!!</h4> : <Table setPass={setPass} data={data} />}
                    {setInvNumber(Pass)}
                </div>
            </div>
        </div>
    )
}