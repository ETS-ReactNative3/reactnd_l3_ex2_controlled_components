import React from 'react';

const DeleteListItem = props => {
  return (
	<button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
          Delete Last Item
        </button>
  )
}

export default DeleteListItem;