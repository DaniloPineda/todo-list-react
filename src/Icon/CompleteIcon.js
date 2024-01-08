import { Icon } from "./";


function CompleteIcon({ completed, onComplete }) {
    return (
        <Icon type='check' color={completed ? 'green' : 'gray'} onClick={onComplete}/>
    );
}

export { CompleteIcon }