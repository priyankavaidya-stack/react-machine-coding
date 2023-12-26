import { createPortal} from 'react-dom';
import './Modals.css';

export default function Modal({ isOpen, onClose }) {
  if(! isOpen) return null;
  return createPortal(
    <div className="modal">
        <div className="modal-container">
            <div className="modal-body">
                <p>Sample modal</p>
            </div>
            <button onClick={ onClose }>Close</button>
        </div>
    </div>,
    document.getElementById('modal')
  )
}
