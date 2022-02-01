const ResetBtn = (props) => {
  const handleClickReset = (ev) => {
    props.handleReset(ev);
  };
  return (
    <button className='reset js_reset' onClick={handleClickReset}>
      <i className='far fa-trash-alt reset__icon'></i>
      Reset
    </button>
  );
};

export default ResetBtn;
