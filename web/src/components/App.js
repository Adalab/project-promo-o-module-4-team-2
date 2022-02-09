import '../styles/App.scss';
import logo from '../images/logo_header.png';
import { useState, useEffect } from 'react';
import dataApi from '../services/api.js';
import Header from './Header';
import CardPreview from './CardPreview';
import ls from '../services/localstorage';
import Footer from './Footer';
import Form from './Form';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';

function App() {
  const [data, setData] = useState(
    ls.get('dataLS', {
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: 'https://i.pinimg.com/originals/dc/f8/79/dcf8790a2b15a134cfa2b4d7bf780828.jpg',
    })
  );

  //Local Storage:
  useEffect(() => {
    ls.set('dataLS', data);
  }, [data]);

  const [collapsable, setCollapsable] = useState(true);

  const handleInput = (ev) => {
    const inputChanged = ev.currentTarget.name;
    setData({
      ...data,
      [inputChanged]: ev.currentTarget.value,
    });
  };

  const handleReset = () => {
    setData({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: 'https://i.pinimg.com/originals/dc/f8/79/dcf8790a2b15a134cfa2b4d7bf780828.jpg',
    });
  };

  const [apiData, setApiData] = useState({
    cardURL: '',
    success: false,
  });

  const handleClickBtnCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((data) => {
      setApiData(data);
    });
  };

  const [designOpen, setDesignOpen] = useState(true);
  const [fillOpen, setFillOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  function handleClickCollapse(name) {
    if (name === 'design') {
      setDesignOpen(!designOpen);
      setFillOpen(false);
      setShareOpen(false);
    } else if (name === 'fill') {
      setDesignOpen(false);
      setFillOpen(!fillOpen);
      setShareOpen(false);
    } else if (name === 'share') {
      setDesignOpen(false);
      setFillOpen(false);
      setShareOpen(!shareOpen);
    }
  }

  const disabledBtnShare = () => {
    if (
      data.name.length === 0 ||
      data.job.length === 0 ||
      data.phone.length === 0 ||
      data.email.length === 0 ||
      data.linkedin.length === 0 ||
      data.github.length === 0
    ) {
      return true;
    }
  };

  //Imagen de usuario

  const handleImage = (imageData) => {
    setData({
      ...data,
      photo: imageData,
    });
  };

  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/card'>
          <Header img={logo} />
          <main className='card__main'>
            <CardPreview
              palette={data.palette}
              name={data.name}
              job={data.job}
              phone={data.phone}
              email={data.email}
              linkedin={data.linkedin}
              github={data.github}
              photo={data.photo}
              data={data}
              handleReset={handleReset}
            />
            <Form
              data={data}
              palette={data.palette}
              name={data.name}
              job={data.job}
              phone={data.phone}
              email={data.email}
              linkedin={data.linkedin}
              github={data.github}
              photo={data.photo}
              dataPhoto={data.photo}
              handleInput={handleInput}
              handleClickBtnCreateCard={handleClickBtnCreateCard}
              apiData={apiData}
              handleClickCollapse={handleClickCollapse}
              designOpen={designOpen}
              fillOpen={fillOpen}
              shareOpen={shareOpen}
              disabledBtnShare={disabledBtnShare}
              handleImage={handleImage}
            />
          </main>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
