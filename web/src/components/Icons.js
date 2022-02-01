const Icons = (props) => {
  return (
    <li className={`card__social--icon social__icon__palette${props.palette} js_icon_border`}>
      <a className='js_previewPhone' href={props.type === '' ? '#' : `${props.href}${props.type}`}>
        <i className={`${props.iconName} icon_image__pallete${props.palette}`}></i>
      </a>
    </li>
  );
};

export default Icons;
