import { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'
function Todo(props) {
    const [showModal, setShowModal] = useState(false)
    // props als Parameter bekommt alle Werte als Object, die beim Aufruf der <Todo /> übergeben werden.

    const deleteHandler = (that) => {
        console.log(props.title)
        setShowModal(true)
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { showModal && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler}/> }
            { showModal && <Backdrop onClick={closeModalHandler}/> }
        </div>
    );
}

export default Todo