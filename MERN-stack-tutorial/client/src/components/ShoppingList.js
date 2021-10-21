import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid';
import { useState } from 'react';

const ShoppingList = () => {
    const [items, setItems] = useState([
        { id: uuid(), name: 'Eggs'},
        { id: uuid(), name: 'Milk'},
        { id: uuid(), name: 'Sugar'},
        { id: uuid(), name: 'Flour'},
    ])

    return (
        <div>
            <Container>
                <Button 
                color="dark" 
                style={{marginBottom: '2rem'}} 
                onClick={() => {
                    const name = prompt('Enter Item');
                    if (name) {
                        const newItem = { id: uuid(), name}
                        setItems([...items, newItem])
                    }
                }}
                >
                    Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            setItems(items.filter(item => item.id !== id))
                                        }}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        </div>
    )
}

export default ShoppingList
