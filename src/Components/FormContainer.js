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
        setSampleState,
        workExperience,
        educationalExperience,
        skills } = props;

    return (
        <div className='FormContainer'>
            <button type="submit" onClick={e => setSampleState(e)} className='sampleStateButton'>Generate Sample CV</button>
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

        </div>
    )
    
}



export default FormContainer;