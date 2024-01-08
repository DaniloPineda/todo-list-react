import { Icon } from "./";

function DeleteIcon({ onDelete }) {
    return (
        <Icon type='delete' color='gray' onClick={onDelete}/>
    );
}

export { DeleteIcon }