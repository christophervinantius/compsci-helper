/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function PopUp({show, setShow, message, variant, navigateTo}) {
    const navigate = useNavigate()

    return (
        <Modal 
            show={show} 
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header>
                <Modal.Title>Post Created</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                {navigateTo && (
                    <Button
                        variant={variant}
                        onClick={() => navigate(navigateTo)}
                    >
                        Close
                    </Button>
                )}
                {setShow && (
                    <Button
                        variant={variant}
                        onClick={setShow}
                    >
                        Close
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    )
}