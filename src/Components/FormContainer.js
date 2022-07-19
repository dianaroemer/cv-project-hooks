import React from 'react'
import PersonalInformationForm from './Field Components/PersonalInformationForm';
import WorkExperienceForm from './Field Components/WorkExperienceForm'
import EducationalExperienceForm from './Field Components/EducationalExperienceForm';
import SkillForm from './Field Components/SkillForm'

function FormContainer(props) {

    const { personalInformation, 
        handleUpdateExperience, 
        handleDeleteExperience, 
        handleCreateExperience,
        workExperience,
        educationalExperience,
        skills } = props;

    return (
        <div className='FormContainer'>
            <button type="submit" onClick={e => e.preventDefault()} className='sampleStateButton'>Generate Sample CV</button>
            <PersonalInformationForm 
                handleUpdateExperience={handleUpdateExperience}
                personalInformation={personalInformation}/>
                
            <WorkExperienceForm workExperience={workExperience}
                handleUpdateExperience={handleUpdateExperience}
                handleDeleteExperience={handleDeleteExperience}
                handleCreateExperience={handleCreateExperience}/>
            
            <EducationalExperienceForm
                educationalExperience={educationalExperience}
                handleUpdateExperience={handleUpdateExperience}
                handleDeleteExperience={handleDeleteExperience}
                handleCreateExperience={handleCreateExperience}/>

            <SkillForm
                skills={skills}
                handleUpdateExperience={handleUpdateExperience}
                handleDeleteExperience={handleDeleteExperience}
                handleCreateExperience={handleCreateExperience}/>


            {/* <SkillForm skillArr={appState.skillArr}
            createExperience={createExperience}
            deleteExperience={deleteExperience}
            toggleSkillEdit={toggleSkillEdit}
            updateInputField={updateInputField}/> */}
            
            

        </div>
    )
    
}



export default FormContainer;