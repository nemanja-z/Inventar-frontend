import  React, {useState} from "react";


const Modal = (props) => {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal)

    return(
        <div>
            {!showModal ?<button onClick={()=>setShowModal(true)} className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
            {props.text}
            </button> :
        <div className="absolute w-full items-center">
            {props.children}
            <button onClick={()=>setShowModal(false)}>Close</button>
        </div>}
        </div>
    )
}
 export default Modal;
