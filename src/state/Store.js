import React, {createContext, useReducer, useMemo} from "react";
import userReducer from "./reducers/userReducer";
import companyReducer from "./reducers/companyReducer";
import productReducer from "./reducers/productReducer";
import vehicleReducer from "./reducers/vehicleReducer";
import warehouseReducer from "./reducers/warehouseReducer";
import customerReducer from "./reducers/customerReducer";
import workerReducer from "./reducers/workerReducer";



export const GlobalContext = createContext();
export const Store = ({children}) => {
    const [user, dispatchUser] = useReducer(userReducer, null);
    const [company, dispatchCompany] = useReducer(companyReducer, null);
    const [product, dispatchProduct] = useReducer(productReducer, null);
    const [vehicle, dispatchVehicle] = useReducer(vehicleReducer, null);
    const [warehouse, dispatchWarehouse] = useReducer(warehouseReducer, null);
    const [customer, dispatchCustomer] = useReducer(customerReducer, null);
    const [worker, dispatchWorker] = useReducer(workerReducer, null);

    
    const contextValue = useMemo(() =>({ user, dispatchUser, company, dispatchCompany, product, dispatchProduct, vehicle, dispatchVehicle, warehouse, dispatchWarehouse, customer, dispatchCustomer, worker, dispatchWorker }), [user, dispatchUser, company, dispatchCompany, product, dispatchProduct, vehicle, dispatchVehicle, warehouse, dispatchWarehouse, customer, dispatchCustomer, worker, dispatchWorker ]);


    return(
        <GlobalContext.Provider value={contextValue}>
        {children}
        </GlobalContext.Provider>
    )
}

