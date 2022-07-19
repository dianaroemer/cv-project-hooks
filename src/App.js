import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import uniqid from "uniqid"
import Navbar from './Components/Navbar';
import FormContainer from './Components/FormContainer';
import PreviewContainer from './Components/PreviewContainer';

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
          return;
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
      return {...targetObject, 
        edit: !targetObject.edit}
    } else {
      return element
    }
   }))
  }
  
  function setSampleState(e) {
    e.preventDefault();

    setPersonalInformation({
      name : 'Dominic "D" Roemer',
      title: 'Front-end Developer',
      photoURL: '',
      address: '9337 Stargaze Ave, San Diego, CA',
      phone: 'XXX-XXX-9407',
      email: 'dominicroemer@gmail.com',
      linkedIn: 'linkedin.com/in/dominicroemer',
      gitHub: 'github.com/dominicroemer',
    });
    setWorkExperience([
      { position: 'Front-end Developer',
        company: 'Self Employed',
        location: 'San Diego, California',
        startDate: '2021-05',
        endDate: 'Present',
        descriptionOfDuties: 'Entirely self-taught from web resources (TheOdinProject && StackOverflow). Established strong fundamental Javascript knowledge for easy integration into existing work-flows',
        key: uniqid(),
      }, {
        position: 'Executive Producer',
        company: 'The Esports Channel',
        location: 'Miami, Florida',
        startDate: '2019-04',
        endDate: '2019-08',
        descriptionOfDuties: 'Acted as on-air talent, writer, editor, graphics, and more for esports startup. Used extensive knowledge of broadcast to level-up existing broadcast from a once weekly broadcast to a daily show',
        key: uniqid(),
      }, {
        position: 'Esports Commentator',
        company: 'Riot Games',
        location: 'Los Angeles, USA  &&  Sydney, AUS  &&  Shanghai, CN',
        startDate: '2015-01',
        endDate: '2018-12',
        descriptionOfDuties: 'On-air commentator for LCS, LPL, and Collegiate competitive esports broadcasts. Required in depth knowledge of game, mechanics, players, competitive narrative, and broadcast fundamentals, to be communicated in on-the-fly dictation',
        key: uniqid(),
      }
    ]);
    setEducationalExperience([
      {
        institution: 'University of California at San Diego',
        degree: 'Computer Science, B.S.',
        startDate: '2010-09',
        endDate:'2014-12',
        details: 'Studied Bioenginering for 1.5 years, Comp Sci for 2 years. Left before graduating to pursue esports commentary with Riot Games in late 2014.',
        key: uniqid(),
      }, 
    ]);
    setSkills([
      {skill: 'Javascript, HTML, CSS', key: uniqid(), type: 'skill', edit: false},
      {skill: 'React: State, Props, Lifecycle Methods, Hooks', key: uniqid(), type: 'skill', edit: false},
      {skill: 'Git and Github', key: uniqid(), type: 'skill', edit: false},
      {skill: 'Excellent Public Speaker', key: uniqid(), type: 'skill', edit: false},
    ])


    // this.setState({
    //   personalInformation: {
    //     type: 'personalInformation'
    //   },
    //   workExperience: {
    //     type: 'workExperience',
    //     workExperienceArr: [
    //       { position: 'Front-end Developer',
    //         company: 'Self Employed',
    //         location: 'San Diego, California',
    //         startDate: '2021-05',
    //         endDate: 'Present',
    //         descriptionOfDuties: 'Entirely self-taught from web resources (TheOdinProject && StackOverflow). Established strong fundamental Javascript knowledge for easy integration into existing work-flows',
    //         key: uniqid(),
    //         type: 'workExperience'
    //       }, {
    //         position: 'Executive Producer',
    //         company: 'The Esports Channel',
    //         location: 'Miami, Florida',
    //         startDate: '2019-04',
    //         endDate: '2019-08',
    //         descriptionOfDuties: 'Acted as on-air talent, writer, editor, graphics, and more for esports startup. Used extensive knowledge of broadcast to level-up existing broadcast from a once weekly broadcast to a daily show',
    //         key: uniqid(),
    //         type: 'workExperience'
    //       }, {
    //         position: 'Esports Commentator',
    //         company: 'Riot Games',
    //         location: 'Los Angeles, USA  &&  Sydney, AUS  &&  Shanghai, CN',
    //         startDate: '2015-01',
    //         endDate: '2018-12',
    //         descriptionOfDuties: 'On-air commentator for LCS, LPL, and Collegiate competitive esports broadcasts. Required in depth knowledge of game, mechanics, players, competitive narrative, and broadcast fundamentals, to be communicated in on-the-fly dictation',
    //         key: uniqid(),
    //         type: 'workExperience'
    //       },
    //     ], 
        
    //   }, 
    //   skillArr: [
        

    //   ],
    //   educationalExperience: {
    //     type: 'educationalExperience',
    //     educationalExperienceArr: [ {
    //       type: 'educationalExperience',
    //       institution: 'University of California at San Diego',
    //       degree: 'Computer Science, B.S.',
    //       startDate: '2010-09',
    //       endDate:'2014-12',
    //       details: 'Studied Bioenginering for 1.5 years, Comp Sci for 2 years. Left before graduating to pursue esports commentary with Riot Games in late 2014.',
    //       key: uniqid(),
    //     }, 
    //     ]
    //   }
    // });
  }


  
  return (
    <div className="AppContainer" style={{backgroundColor: 'bisque'}}>
      <Navbar/>
      <div className='content'>
        <FormContainer
          handleUpdateExperience={handleUpdateExperience}
          handleDeleteExperience={handleDeleteExperience}
          handleCreateExperience={handleCreateExperience}
          setSampleState={setSampleState}
          personalInformation={personalInformation}
          workExperience={workExperience}
          educationalExperience={educationalExperience}
          skills={skills}
        />

        <PreviewContainer className='previewContainer'
        personalInformation={personalInformation}
        workExperience={workExperience}
        educationalExperience={educationalExperience}
        skills={skills}/>

      </div>


    </div>
  );
}

export default App;
