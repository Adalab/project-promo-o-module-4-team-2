const Palettes = (props) => {
  const handleChangeInput = (ev) => {
    props.handleInput(ev);
  };
  return (
    <label htmlFor={`optioncolor${props.number}`} className='select__options--palette'>
      <input
        onChange={handleChangeInput}
        type='radio'
        value={props.number}
        name='palette'
        className='select__options--input'
        checked={props.data === props.number}
      />
      <div className={`palette palette__${props.color}1`}></div>
      <div className={`palette palette__${props.color}2`}></div>
      <div className={`palette palette__${props.color}3`}></div>
    </label>
  );
};
export default Palettes;
