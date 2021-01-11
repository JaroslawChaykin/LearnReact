import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'centre',
        border: '1px solid #d2d2d2',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    span: {
        padding: '.5rem 1rem',
    },
    input: {
        marginRight: '1rem'
    },
    index: {
        marginRight: '1rem',
        color: '#c1c1c1'
    },
    deleteBtn: {
        background: 'none',
        padding: '0 20px',
        fontWeight: '900',
        borderRadius: '4px',
        transition: 'all 0.2s'
    }
}

function TodoItem({ todo, index, onChange }) {
    const {removeTodo} = useContext(Context);
    const classes = [];

    if(todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li} className={classes.join(' ')}>
            <span style={styles.span} >
                <span style={styles.index}>{index+1}</span>
                <input type="checkbox" checked={todo.completed} style={styles.input} onChange={() => onChange(todo.id)}/>
                {todo.title}
            </span>
            <button style={styles.deleteBtn} onClick={removeTodo.bind(null, todo.id)} className='delete-btn'>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem