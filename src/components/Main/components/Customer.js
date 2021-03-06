import React, {useContext} from "react";
import CreateCustomer from './Forms/CreateCustomer';
import Modal from "./Common/Modal";
import {GlobalStateContext} from '../../../state/Store';

const Customer = () => {
    const {customer} = useContext(GlobalStateContext);

    return(
        <div className="flex flex-col mt-8">
        <h3 className="text-gray-700 text-3xl font-medium mb-5">Customers</h3>
        <Modal text="Create customer profile">
            <CreateCustomer/>
            </Modal>
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div
                    className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Address</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Email</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Phone</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Discount</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                        {customer && customer.map(c=>
                        <tr key={c.id}>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm leading-5 font-medium text-gray-900">{c.address}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-500">{c.email}</div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{c.phone}</span>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">{c.discount}</td>

                                <td
                                    className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                    <a className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                </div>
        </div>
    )
}

export default Customer;