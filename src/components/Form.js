import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.submit} className="form">
            <input
             type="text"
              value={props.value}
              placeholder="Wpisz miasto"
              onChange={props.change}
              />
            <button>Wyszukaj miasta</button>
        </form>
    )
}
export default Form