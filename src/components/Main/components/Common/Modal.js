import  React, {useState} from "react";


const Modal = (props) => {
    const [showModal, setShowModal] = useState(false);

    return(
        <div className={showModal ? "mx-auto" : ""}>
            {!showModal ?<button onClick={()=>setShowModal(true)} className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
            {props.text}
            </button> :
        <div className="w-full">
        <div>
            <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" onClick={()=>setShowModal(false)}>X</button>
            </div>
            <div>
            {props.children}
            </div>
        </div>}
        </div>
    )
}
 export default Modal;
