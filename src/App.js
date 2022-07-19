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
      },
    ]
  );
  const [educationalExperience, setEducationalExperience] = useState(
    [
      {
        institution: '1',
        degree: '',
        startDate: '',
        endDate:'',
        details: '',
        key: uniqid(),
      },
    ]
  )
  const [skills, setSkills] = useState(
    [
      {
        skill: 'TESTFOOBARSKILL', 
        key: uniqid(), 
        edit: true
      }
    ]
  )

  function handleUpdateExperience(e, targetObject, targetField, type) {
    e.preventDefault();

    switch(type) {
      case 'personalInformation': 
        console.log('here!');
        handlePersonalInformation(e, targetObject, targetField);
        break;
      case 'workExperience': 
        handleWorkExperience(e, targetObject, targetField);
        return;
      case 'educationalExperience':
        handleEducationalExperience(e, targetObject, targetField)
        return;
      case 'skills':
        if(targetField === 'edit') {
          toggleSkillEdit(e, targetObject);
        }
        handleUpdateSkill(e, targetObject, targetField);
        return;
      default:
        console.log('Reached end of handleUpdateExperience switch statement');
    }

  }

  function handleDeleteExperience(e, targetObject, type){
    e.preventDefault();

    switch(type) {
      case 'workExperience': 
        deleteWorkExperience(e, targetObject);
        return;
      case 'educationalExperience':
        deleteEducationalExperience(e, targetObject)
        return;
      case 'skills':
        deleteSkill(e, targetObject);
        return;
      default:
        console.log('Reached end of handleDeleteExperience switch statement');
    }    

  }

  function handleCreateExperience(e, type) {
    e.preventDefault();

    switch(type) {
      case 'workExperience': 
        createWorkExperience();
        return;
      case 'educationalExperience':
        createEducationalExperience()
        return;
      case 'skills':
        createSkill();
        return;
      default:
        console.log('Reached end of handleCreateExperience switch statement');
    }   

  }

  function handlePersonalInformation(e, targetObject, targetField) {
    setPersonalInformation({...targetObject, [targetField]: e.target.value});
  };

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
      }
    ])
  }

  function handleEducationalExperience(e, targetObject, targetField){
    setEducationalExperience(educationalExperience.map(element => {
      if(element === targetObject) {
        return {...targetObject, [targetField]: e.target.value,}
      } else {
        return element;
      }
    }))
  }

  function deleteEducationalExperience(e, targetObject) {
    setEducationalExperience(educationalExperience.filter(element => element !== targetObject));
  }

  function createEducationalExperience(){
    setEducationalExperience([
      ...educationalExperience,
      {
        institution: '2',
        degree: '',
        startDate: '',
        endDate:'',
        details: '',
        key: uniqid(),
      },
    ])
  }

  function handleUpdateSkill(e, targetObject, targetField){
    setSkills(skills.map(element => {
      if(element === targetObject) {
        return {...targetObject, [targetField]: e.target.value,}
      } else {
        return element;
      }
    }));
  }

  function deleteSkill(e, targetObject){
    setSkills(skills.filter(element => element !== targetObject));
  }

  function createSkill(){
    setSkills([
      ...skills,
      {
        skill: 'I am a new skill!', 
        key: uniqid(), 
        edit: true 
      }
    ])
  }

  function toggleSkillEdit(e, targetObject) {
    e.preventDefault();
   setSkills(skills.map(element => {
    if(element === targetObject){
      return {...targetObject, edit: !targetObject.edit}
    } else {
      return element
    }
   }))
  }
  


  
  return (
    <div className="AppContainer" style={{backgroundColor: 'bisque'}}>
      <Navbar/>
      <div className='content'>
        <FormContainer
          personalInformation={personalInformation}
          handleUpdateExperience={handleUpdateExperience}
          handleDeleteExperience={handleDeleteExperience}
          handleCreateExperience={handleCreateExperience}
          workExperience={workExperience}
          educationalExperience={educationalExperience}
          skills={skills}
        />

        {/* <PreviewContainer className='previewContainer'
        appState={this.state}/> */}

      </div>


    </div>
  );
}

export default App;
