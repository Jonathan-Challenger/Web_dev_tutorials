import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid';
import { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';

const ShoppingList = (props) => {

    useEffect(() => {
        props.getItems();
    }, [])

    const { items } = props.item;

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
                        // setItems([...items, newItem])
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
                                            // setItems(items.filter(item => item.id !== id))
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

ShoppingList.propTypes = {
    getItems: propTypes.func.isRequired,
    item: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(ShoppingList);
