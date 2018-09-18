import React from 'react';

const Form  = props => {
  const {addItem, value, handleChange, inputIsEmpty} = props;
  return (
		<form onSubmit={addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={handleChange}
          />
          <button disabled={inputIsEmpty()}>Add</button>
        </form>
  )
}

export default  Form;