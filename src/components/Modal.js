function Modal(props) {
  const cancelHandler = () => {
    props.onCancel();
  };
  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <div className="modal">
      <p>Bist du sicher?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Abbruch
      </button>
      <button className="btn" onClick={confirmHandler}>
        OK
      </button>
    </div>
  );
}

export default Modal;
