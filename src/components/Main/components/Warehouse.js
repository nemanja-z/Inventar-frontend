import React from "react";
import CreateWarehouse from './Forms/CreateWarehouse';
import Modal from "./Common/Modal";


const Warehouse = () => {


    return(
        <div className="flex flex-col mt-8">
        <h3 className="text-gray-700 text-3xl font-medium mb-5">Warehouse</h3>
        <Modal text="Create warehouse">
            <CreateWarehouse/>
            </Modal>
                        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div
                                className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Name</th>
                                            <th
                                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Address</th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                        </tr>
                                    </thead>
    
                                    <tbody className="bg-white">
                                    <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Warehouse</div>
                                            </td>
    
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">NA</td>
    
                                            <td
                                                className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
        </div>
    )
}

export default Warehouse;