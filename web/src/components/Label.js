const Label = (props) => {
  const handleClick = () => {
    props.handleClickCollapse(props.name);
  };
  return (
    <div className={`container__${props.name}`} onClick={handleClick}>
      <i className={`${props.icon} container__${props.name}--icon`} alt={`${props.name}`}></i>
      <h3 className={`container__${props.name}--title`}>{props.title}</h3>
      <i
        className={`fas fa-chevron-up container__${props.name}--iconArrow--${
          props.arrow ? 'up' : 'down'
        }`}
      ></i>
    </div>
  );
};

export default Label;
