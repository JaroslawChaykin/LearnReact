import React, {useState} from "react";
import PropTypes from "prop-types";

function AddTodo({onCreate}) {
    const input = useInputValue('')
    const [value, setValue] = useState('');

    function useInputValue(defaultValue = '') {
        const [value, setValue] = useState(defaultValue);

        return {
            bind: {
                value,
                onChange: event => setValue(event.target.value)
            },
            clear: () => setValue(''),
            value: () => value
        }
    }
    
    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <input type="text" {...input.bind}/>
            <button type='submit'>Добавить</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo