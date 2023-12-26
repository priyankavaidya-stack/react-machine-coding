import { useState } from 'react';
import Modal from './Modal';


export default function App() {
    const [isOpen, setOpen] = useState(false);

  return (
    <div>
        <button onClick={()=> setOpen(true)}>Show Modal</button>
        <Modal isOpen={isOpen} onClose={()=> setOpen(false)} />
    </div>
  );
}
