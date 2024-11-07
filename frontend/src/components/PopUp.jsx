/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function PopUp({type, show, setShow, setAction, disabled, title, message, variant, navigateTo}){
    const navigate = useNavigate()

    return (
        <Modal 
            show={show} 
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end">
                {(type == "info" && navigateTo) && (
                    <Button
                        variant={variant}
                        onClick={() => navigate(navigateTo)}
                    >
                        Close
                    </Button>
                )}
                {(type == "info" && setShow) && (
                    <Button
                        variant={variant}
                        onClick={setShow}
                    >
                        Close
                    </Button>
                )}
                {(type == "edit") && (
                    <>
                        <Button
                            variant="secondary"
                            onClick={setShow}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant={variant}
                            onClick={setAction}
                            disabled={disabled}
                        >
                            Submit
                        </Button>
                    </>
                )}
                {(type == "alert") && (
                    <>
                        <Button
                            variant="secondary"
                            onClick={setShow}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="danger"
                            onClick={setAction}
                        >
                            Delete
                        </Button>
                    </>
                )}
            </Modal.Footer>
        </Modal>
    )
}