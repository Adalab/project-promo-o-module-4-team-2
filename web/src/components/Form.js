import Label from './Label';
import Palettes from './Palettes';
import Input from './Input';
import ShareBtn from './ShareBtn';
import { useRef } from 'react';

const Form = (props) => {
  const inputEl = useRef(null);
  const fileReader = new FileReader();

  const handleFile = () => {
    const selectedFile = inputEl.current.files[0];
    if (selectedFile) {
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const getImage = () => {
    props.handleImage(fileReader.result);
  };

  fileReader.addEventListener('load', getImage);

  const smallImage = () => {
    if (props.dataPhoto) {
      return <img className='form__button--small' src={props.dataPhoto} alt='user' />;
    } else {
      return null;
    }
  };

  return (
    <form action='' method='post' className='form'>
      <fieldset className='fieldset__design'>
        <Label
          title='diseña'
          icon='far fa-object-ungroup'
          name='design'
          handleClickCollapse={props.handleClickCollapse}
          arrow={props.designOpen}
        />
        <div className={`select ${props.designOpen ? '' : 'hidden'}`}>
          <h3 className='select__title'>Colores</h3>
          <div className='select__options'>
            <Palettes
              number='1'
              color='cold'
              data={props.palette}
              handleInput={props.handleInput}
            />
            <Palettes number='2' color='hot' data={props.palette} handleInput={props.handleInput} />
            <Palettes number='3' color='mix' data={props.palette} handleInput={props.handleInput} />
          </div>
        </div>
      </fieldset>

      <fieldset className='fieldset__fill'>
        <Label
          title='Rellena'
          icon='far fa-keyboard'
          name='fill'
          handleClickCollapse={props.handleClickCollapse}
          arrow={props.fillOpen}
        />

        <div className={`form_container  ${props.fillOpen ? '' : 'hidden'}`}>
          <Input
            labelText='Nombre Completo'
            id='name'
            placeholder='Ej: Amparo Smith'
            required='required'
            handleInput={props.handleInput}
            data={props.name}
            type='text'
          />

          <Input
            labelText='Puesto'
            id='job'
            placeholder='Ej: Front-end unicorn'
            required='required'
            handleInput={props.handleInput}
            data={props.job}
            type='text'
          />

          <label className='form__label'> Imagen de perfil </label>
          <div className='form__img'>
            <label htmlFor='photo' className='button__img js__profile-trigger'>
              Añadir imagen
              <input
                ref={inputEl}
                type='file'
                name='photo'
                id='photo'
                className='hidden js__profile-upload-btn'
                onChange={handleFile}
              />
            </label>
            <div className='form__button--square'>{smallImage()}</div>
          </div>

          <Input
            labelText='Email'
            id='email'
            placeholder='Ej:amparo-smith@gmail.com'
            required='required'
            handleInput={props.handleInput}
            data={props.email}
            type='text'
          />

          <Input
            labelText='Teléfono'
            id='phone'
            placeholder='Ej: 555-55-55-55'
            required='required'
            handleInput={props.handleInput}
            data={props.phone}
            type='tel'
          />

          <Input
            labelText='Linkedin'
            id='linkedin'
            placeholder='Ej: linkedin.com/in/amparo.smith'
            required='required'
            handleInput={props.handleInput}
            data={props.linkedin}
            type='text'
          />

          <Input
            labelText='Github'
            id='github'
            placeholder='Ej: @amparo-smith'
            required='required'
            handleInput={props.handleInput}
            data={props.github}
            type='text'
          />
        </div>
      </fieldset>

      <fieldset className='fieldset__share'>
        <Label
          title='Comparte'
          icon='fas fa-share-alt'
          name='share'
          handleClickCollapse={props.handleClickCollapse}
          arrow={props.shareOpen}
        />
        <div className={props.shareOpen ? '' : 'hidden'}>
          <ShareBtn
            handleClickBtnCreateCard={props.handleClickBtnCreateCard}
            apiData={props.apiData}
            disabledBtnShare={props.disabledBtnShare}
          />
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
