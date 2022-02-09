import { useState } from 'react';

const ShareBtn = (props) => {
  console.log(props)
  const handleCreateCard = (ev) => {
    props.handleClickBtnCreateCard(ev);
    setCardCreated(true);
  };

  const [cardCreated, setCardCreated] = useState(false);
  return (
    <>
      <div>
        <div className='container__button'>
          <button
            className={`container__button__btn--${props.disabledBtnShare() ? 'grey' : 'orange'}`}
            onClick={handleCreateCard}
            disabled={props.disabledBtnShare()}
          >
            <i className='far fa-address-card container__button--icon'></i>
            crear tarjeta
          </button>
        </div>
      </div>
      <div className={`container__created${cardCreated ? '' : '--hidden'}`}>
        <h4 className='container__created--title'>La tarjeta ha sido creada:</h4>
        <a href={props.apiData.cardURL} className='container__created--link'>
          Pincha aquí para ver tu tarjeta
        </a>
        <a
          type='submit'
          className='btn--twitter'
          href={`https://twitter.com/intent/tweet?text=Os%20comparto%20mi%20tarjeta%20de%20presentaci%C3%B3n%20hecha%20a%20trav%C3%A9s%20de%20la%20app%20web%20%22Awesome%20Profile%20Cards%22%20%20&url=${props.apiData.cardURL}%20%23HTML%20%23CSS%20%23JS%20%23Adalab%20%23WomenInTech`}
        >
          <i className='fab fa-twitter twitter-icon'></i>Compartir en twitter
        </a>
      </div>
    </>
  );
};

export default ShareBtn;
