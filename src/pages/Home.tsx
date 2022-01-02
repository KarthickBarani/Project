
import { Charts } from "../components/Charts"
import { Table } from "../components/Table"
import { useState } from "react"
import axios from "axios"
import { Loading } from "../components/Loading"
import { useQuery } from "react-query"



export const Home = ({ setInvNumber }) => {

    const [Pass, setPass] = useState<number>()



    // useEffect(() => {
    //     axios.get('https://invoiceprocessingapi.azurewebsites.net/api/Invoice').then(res => {
    //         setLoading(false)
    //         setData(res.data)
    //     }).catch(err => {
    //         setLoading(false)
    //         setError(true)
    //     })
    // }, [])

    const { isLoading, data, isError } = useQuery('tableData', () => {
        return axios.get(`https://invoiceprocessingapi.azurewebsites.net/api/Invoice`)
    })


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
                    {isLoading ? <Loading /> : isError ? <h1>Something Error From Server</h1> : <Table setPass={setPass} data={data?.data} />}

                    { }

                    {setInvNumber(Pass)}
                </div>
            </div>
        </div>
    )
}