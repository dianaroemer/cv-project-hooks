import React, { Component } from 'react'
// import FormElement from './FormElement';
import PersonalInformationForm from './Field Components/PersonalInformationForm';
import WorkExperienceForm from './Field Components/WorkExperienceForm'
import SkillForm from './Field Components/SkillForm'
import EducationalExperienceForm from './Field Components/EducationalExperienceForm';


// class FormContainer extends Component {
//     // constructor(props) {
//         // super(props);
//     // }

//     render() {
//         const { updateInputField, appState, createExperience, deleteExperience, toggleSkillEdit, setSampleState } = this.props;


//         return (
//             <div className='FormContainer'>
//                 {/* <h3>I am FormContainer.js. I contain forms. Let's put something together</h3> */}
//                 <button type="submit" onClick={setSampleState} className='sampleStateButton'>Generate Sample CV</button>
//                 <PersonalInformationForm 
//                     updateInputField={updateInputField}
//                     personalInformation={appState.personalInformation}/>
//                 <WorkExperienceForm workExperienceArr={appState.workExperience.workExperienceArr}
//                     elementType={appState.workExperience.type}
//                     updateInputField={updateInputField}
//                     createExperience={createExperience}
//                     deleteExperience={deleteExperience}/>
                
//                 <SkillForm skillArr={appState.skillArr}
//                 createExperience={createExperience}
//                 deleteExperience={deleteExperience}
//                 toggleSkillEdit={toggleSkillEdit}
//                 updateInputField={updateInputField}/>
                
//                 <EducationalExperienceForm
//                     educationalExperienceArr={appState.educationalExperience.educationalExperienceArr}
//                     elementType={appState.educationalExperience.type}
//                     updateInputField={updateInputField}
//                     createExperience={createExperience}
//                     deleteExperience={deleteExperience}/>

//                     {/* <FormElement/> */}
//                 {/* <FormElement/> */}
//             </div>
//         )
//     }
// }

function FormContainer(props) {

    const { personalInformation, 
        handlePersonalInformation, 
        handleUpdateExperience, 
        handleDeleteExperience, 
        handleCreateExperience,
        workExperience } = props;

    return (
        <div className='FormContainer'>
            {/* <h3>I am FormContainer.js. I contain forms. Let's put something together</h3> */}
            <button type="submit" onClick={e => e.preventDefault()} className='sampleStateButton'>Generate Sample CV</button>
            <PersonalInformationForm 
                handlePersonalInformation={handlePersonalInformation}
                personalInformation={personalInformation}/>
                
            <WorkExperienceForm workExperience={workExperience}
                handleUpdateExperience={handleUpdateExperience}
                handleDeleteExperience={handleDeleteExperience}
                handleCreateExperience={handleCreateExperience}/>
            
            {/* <SkillForm skillArr={appState.skillArr}
            createExperience={createExperience}
            deleteExperience={deleteExperience}
            toggleSkillEdit={toggleSkillEdit}
            updateInputField={updateInputField}/> */}
            
            {/* <EducationalExperienceForm
                educationalExperienceArr={appState.educationalExperience.educationalExperienceArr}
                elementType={appState.educationalExperience.type}
                updateInputField={updateInputField}
                createExperience={createExperience}
                deleteExperience={deleteExperience}/> */}

        </div>
    )
    
}



export default FormContainer;