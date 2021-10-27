import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';

const ShoppingList = ({ getItems, item, deleteItem }) => {

    useEffect(() => {
        getItems();
    }, [getItems])

    const handleDelete = (id) => {
        deleteItem(id);
    }

    const { items, loading } = item;

    return (
        <div>
            {loading ? <h2 style={{textAlign: "center"}}>Loading</h2> :<Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => handleDelete(_id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>}
        </div>
    )
}

ShoppingList.propTypes = {
    getItems: propTypes.func.isRequired,
    deleteItem: propTypes.func.isRequired,
    item: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
