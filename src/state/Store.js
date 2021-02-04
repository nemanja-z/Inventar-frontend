import React, {createContext, useReducer, useMemo} from "react";
import userReducer from "./reducers/userReducer";
import companyReducer from "./reducers/companyReducer";
import productReducer from "./reducers/productReducer";



export const GlobalContext = createContext();
export const Store = ({children}) => {
    const [user, dispatchUser] = useReducer(userReducer, null);
    const [company, dispatchCompany] = useReducer(companyReducer, null);
    const [product, dispatchProduct] = useReducer(productReducer, null);
    
    const contextValue = useMemo(() =>({ user, dispatchUser, company, dispatchCompany, product, dispatchProduct }), [user, dispatchUser, company, dispatchCompany, product, dispatchProduct]);


    return(
        <GlobalContext.Provider value={contextValue}>
        {children}
        </GlobalContext.Provider>
    )
}

