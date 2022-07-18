import React from 'react'

function EducationalExperienceForm(props){

    const {educationalExperience, 
        handleUpdateExperience, 
        handleDeleteExperience, 
        handleCreateExperience,} = props;
    let rows =[];

    educationalExperience.forEach(element => {
        rows.push(
            <EducationalExperienceSlot 
                educationalExperience={element}
                key={element.key}
                handleUpdateExperience={handleUpdateExperience}
                handleDeleteExperience={handleDeleteExperience}/>
        )
    });

    return (
        <div className='educationExperienceForm' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'brown', borderWidth: 10}}>
            <h3>Educational Experience</h3>

            {rows}
        
        <p></p>
        <button type="submit" onClick={e => handleCreateExperience(e,'educationalExperience')} id='educationAddButton'>Add Educational Experience</button>
        <p></p>
    </div>
    )
}



function EducationalExperienceSlot(props){

    const {educationalExperience, 
        handleUpdateExperience, 
        handleDeleteExperience} = props;

    return (
        <form className='educationExperienceSlot' style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'black', borderWidth: 3}}>

            <div className='institutionFieldContainer'>
                Institution: <input className="inputField" type="text" placeholder='Hogwarts School of Witchcraft and Wizardry' onChange={e => handleUpdateExperience(e, educationalExperience, 'institution', 'educationalExperience')} value={educationalExperience.institution}></input>
            </div>
            <div className='degreeFieldContainer'>
                Degree: <input className="inputField" type="text" placeholder='Master of The Dark Arts' onChange={e => handleUpdateExperience(e, educationalExperience, 'degree', 'educationalExperience')} value={educationalExperience.degree}>
                </input>
            </div>
            <div className='startDateFieldContainer'>
                Start Date: <input className="inputField" type="month"   onChange={e => handleUpdateExperience(e, educationalExperience, 'startDate', 'educationalExperience')} value={educationalExperience.startDate}></input>
            </div>
            <div className='endDateFieldContainer'>
                End Date: <input className="inputField" type="month"  onChange={e => handleUpdateExperience(e, educationalExperience, 'endDate', 'educationalExperience')} value={educationalExperience.endDate}></input>
            </div>

            <div className='detailsFieldContainer'>
                Additional Details: <textarea className='inputField' placeholder='First Hufflepuff to graduate in The Dark Arts' onChange={e => handleUpdateExperience(e, educationalExperience, 'details', 'educationalExperience')} value={educationalExperience.details}></textarea>
            </div>
            <button type="button" onClick={e => handleDeleteExperience(e, educationalExperience, 'educationalExperience')}> Delete this Entry </button>
            <p></p>
        </form>
    )
};


export default EducationalExperienceForm;