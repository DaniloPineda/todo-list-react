import { ReactComponent as CompleteIcon } from './check.svg';
import { ReactComponent as DeleteIcon } from './delete.svg';
import './Icon.css';

const iconTypes = {
    'check': (color) => <CompleteIcon className='Icon-svg' fill={color}/>,
    'delete': (color) => <DeleteIcon className='Icon-svg' fill={color}/>,
}

function Icon({ type, color, onClick }) {
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export { Icon };