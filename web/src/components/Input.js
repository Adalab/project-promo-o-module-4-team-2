function Input(props) {
  const handleChangeInput = (ev) => {
    props.handleInput(ev);
  };
  return (
    <>
      <label className='form__label' htmlFor={props.id}>
        {props.labelText}
      </label>
      <input
        onChange={handleChangeInput}
        value={props.data}
        className='form__input'
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        pattern={props.pattern}
        required={props.required}
      />
    </>
  );
}
export default Input;
