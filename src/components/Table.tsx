import { useTable, useSortBy } from 'react-table'
import React from 'react'
import { Link } from "react-router-dom"



export const data: any = [
    {
        id: 1,
        action: <td className="text-center">
            <span className="svg-icon svg-icon-primary svg-icon-1"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.3"
                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                    fill="black" />
                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
            </svg></span>&nbsp;&nbsp;
            <Link to='/InvoiceDetail'>
                <span
                    className="svg-icon svg-icon-warning svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3"
                            d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                            fill="black" />
                        <path
                            d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                            fill="black" />
                    </svg></span>
            </Link>
        </td>,
        receviedDate: "09-31-2021",
        vendorId: "0458",
        vendor: "Squiz Inc",
        invoiceDate: "07-09-2020",
        inv: "",
        amount: "$ 7800.48",
        po: "",
        poStatus: "",
        terms: "Net 20",
        assignment: "",
        updated: "10-31-2021",
        currency: "",
        total: ""
    },
    {
        id: 2,
        action: <td className="text-center">
            <span className="svg-icon svg-icon-primary svg-icon-1"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.3"
                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                    fill="black" />
                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
            </svg></span>&nbsp;&nbsp;
            <Link to='/InvoiceDetail'>
                <span
                    className="svg-icon svg-icon-warning svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3"
                            d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                            fill="black" />
                        <path
                            d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                            fill="black" />
                    </svg></span>
            </Link>
        </td>,
        receviedDate: "09-31-2021",
        vendorId: "0458",
        vendor: "Apple Inc",
        invoiceDate: "07-09-2020",
        inv: "",
        amount: "$ 7800.48",
        po: "",
        poStatus: "",
        terms: "Net 20",
        assignment: "",
        updated: "10-31-2021",
        currency: "",
        total: ""
    },
    {
        id: 3,
        action: <td className="text-center">
            <span className="svg-icon svg-icon-primary svg-icon-1"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.3"
                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                    fill="black" />
                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
            </svg></span>&nbsp;&nbsp;
            <Link to='/InvoiceDetail'>
                <span
                    className="svg-icon svg-icon-warning svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3"
                            d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                            fill="black" />
                        <path
                            d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                            fill="black" />
                    </svg></span>
            </Link>
        </td>,
        receviedDate: "09-31-2021",
        vendorId: "0458",
        vendor: "Aurum Tech",
        invoiceDate: "07-09-2020",
        inv: "",
        amount: "$ 7800.48",
        po: "",
        poStatus: "",
        terms: "Net 20",
        assignment: "",
        updated: "10-31-2021",
        currency: "",
        total: ""
    },
    {
        id: 4,
        action: <td className="text-center">
            <span className="svg-icon svg-icon-primary svg-icon-1"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.3"
                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                    fill="black" />
                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
            </svg></span>&nbsp;&nbsp;
            <Link to='/InvoiceDetail'>
                <span
                    className="svg-icon svg-icon-warning svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3"
                            d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                            fill="black" />
                        <path
                            d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                            fill="black" />
                    </svg></span>
            </Link>
        </td>,
        receviedDate: "09-31-2021",
        vendorId: "0458",
        vendor: "Microsoft Store Inc ...",
        invoiceDate: "07-09-2020",
        inv: "",
        amount: "$ 7800.48",
        po: "",
        poStatus: "",
        terms: "Net 20",
        assignment: "",
        updated: "10-31-2021",
        currency: "",
        total: ""
    }
]

const IndeterminateCheckbox = React.forwardRef(
    ({ children: indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef: any = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return <input type="checkbox" ref={resolvedRef} {...rest} />
    }
)

export const Table = () => {


    const columns = React.useMemo(
        () => [
            {
                Header: '#',
                accessor: 'id',
            },
            {
                Header: 'Action',
                accessor: 'action',
            },
            {
                Header: 'Recevied Date',
                accessor: 'receviedDate',

            },
            {
                Header: 'Vendor Id',
                accessor: 'vendorId',
            },
            {
                Header: 'Vendor',
                accessor: 'vendor',
            },
            {
                Header: 'Invoice Date',
                accessor: 'invoiceDate',
            },
            {
                Header: 'Inv',
                accessor: 'inv',
            }, {
                Header: 'Amount',
                accessor: 'amount',
            }, {
                Header: 'PO',
                accessor: 'po',
            }, {
                Header: 'PO Status',
                accessor: 'poStatus',
            }, {
                Header: 'Terms',
                accessor: 'terms',
            }, {
                Header: 'Assignment',
                accessor: 'assignment',
            }, {
                Header: 'Updated',
                accessor: 'updated',
            }, {
                Header: 'Currency',
                accessor: 'currency',
            }, {
                Header: 'Total',
                accessor: 'total',
            },
        ],
        []
    )


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps,
    } = useTable({ columns, data }, useSortBy)

    return (
        <>
            <div className='d-flex'>
                <div>
                    <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
                    All
                </div>
                {allColumns.map(column => (
                    <div key={column.id}>
                        <label>
                            <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
                            {column.id}
                        </label>
                    </div>
                ))}
            </div>
            <div className='table-responsive' >
                <table {...getTableProps()} className='table table-rounded table-hover gs-3 gx-3 '>
                    <thead className='fw-bolder fs-6'>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th{...column.getHeaderProps(column.getSortByToggleProps())}>

                                        {column.render('Header')}
                                        <span className=' ps-3 text-end'>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? '     ◢'
                                                    : '     ◣'
                                                : ''}
                                        </span>

                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className='fw-bold fs-7' >
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}  >
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        </>

    )
}
