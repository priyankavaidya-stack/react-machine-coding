import React, { useEffect, useState, useRef } from 'react'

export default function Modal() {
    const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Open Dialog</button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button onClick={()=>{
            setShow(false);
        }}>Close</button>
      </ModalDialog>
    </>
  )
}

function ModalDialog({ isOpen, children }){
    const ref = useRef();

    useEffect(()=>{
        if(!isOpen){
            return;
        }
        const dialog = ref.current;
        dialog.showModal();
        return () => {
            dialog.close();
        };
    },[isOpen]);

    return(
        <dialog ref={ref}>{children}</dialog>
    );
}
