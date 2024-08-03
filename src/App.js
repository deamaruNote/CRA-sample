import React, { useState} from 'react';
// import logo from './logo.svg';
import './assets/style.css';
import CardHeader from './components/Cardheader';
import CardBody from './components/Cardbody';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    checktype: false,
  });
  const handleFormdata = (val) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        ...val,
    }));
  };

  return (
    <>
      <div className="card">
        <CardHeader></CardHeader>
        <CardBody formData={formData} handleChange={handleFormdata}></CardBody>
      </div>
    </>
  );
}

export default App;