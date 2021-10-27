import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { useState } from 'react';
import propTypes from 'prop-types';

const ItemModal = ({ addItem }) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');

    const handleToggle = () => {
        setModal(!modal);
    }

    const handleOnChange = (e) => {
        setName(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name
        }

        // Add item with addItem action
        addItem(newItem)

        handleToggle();
    }

    return (
        <div>
            <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={handleToggle}
            >Add Item</Button>

            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Add To Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleOnSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input type="text" name="name" id="item" placeholder="Add shopping item" onChange={handleOnChange}>
                            </Input>
                            <Button color="dark" style={{marginTop:'2rem'}} block>Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

ItemModal.propTypes = {
    addItem: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    item: state.item,
})

export default connect(mapStateToProps, { addItem })(ItemModal)
