import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import uniqid from "uniqid"
import Navbar from './Components/Navbar';
import FormContainer from './Components/FormContainer';

function App() {
  
  const [personalInformation, setPersonalInformation] = useState({
    name : '',
    title: '',
    photoURL: '',
    address: '',
    phone: '',
    email: '',
    linkedIn: '',
    gitHub: '',
    type: 'personalInformation'
  });

  function handlePersonalInformation(e, targetObject, targetField) {
    setPersonalInformation({...targetObject, [targetField]: e.target.value});
  };

  function handleUpdateExperience(e, targetObject, targetField, type) {
    if(type === 'workExperience') {
      handleWorkExperience(e, targetObject, targetField);
    }
  }

  function handleDeleteExperience(e, targetObject, type){
    if(type === 'workExperience') {
      console.log(e);
      console.log('Delete targetObject:', targetObject)
      deleteWorkExperience(e, targetObject);
    }
  }

  function handleCreateExperience(e, type) {
    e.preventDefault();
    if(type === 'workExperience'){
      console.log('creating new workExperienceObject in state array workExperience[]')
      createWorkExperience();
    }
  }

  const [workExperience, setWorkExperience] = useState(
    [
      {
        position: 'Stormtrooper, 2nd Battalion',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        descriptionOfDuties: '',
        key: uniqid(),
        type: 'workExperience',
      },
    ]
  );

  function handleWorkExperience(e, targetObject, targetField) {
    setWorkExperience(workExperience.map(element => {
      if(element === targetObject) {
        return {...targetObject, [targetField]: e.target.value,}
      } else {
        return element;
      }
    }))
  }

  function deleteWorkExperience(e, targetObject) {
    setWorkExperience(workExperience.filter(element => element !== targetObject));
  }

  function createWorkExperience(){
    setWorkExperience([
      ...workExperience,
      {
        position: 'New Work Experience',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        descriptionOfDuties: '',
        key: uniqid(),
        type: 'workExperience',
      }
    ])
  }
  

  
  return (
    <div className="AppContainer" style={{backgroundColor: 'bisque'}}>
      <Navbar/>
      <div className='content'>
        <FormContainer
          personalInformation={personalInformation}
          handlePersonalInformation={handlePersonalInformation}
          handleUpdateExperience={handleUpdateExperience}
          handleDeleteExperience={handleDeleteExperience}
          handleCreateExperience={handleCreateExperience}
          workExperience={workExperience}
        />

        {/* <PreviewContainer className='previewContainer'
        appState={this.state}/> */}

      </div>


    </div>
  );
}

export default App;
