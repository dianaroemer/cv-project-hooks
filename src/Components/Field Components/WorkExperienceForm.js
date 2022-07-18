import React from 'react'

function WorkExperienceForm(props){

    const {workExperience, 
        handleUpdateExperience, 
        handleDeleteExperience, 
        handleCreateExperience} = props;
    let rows =[];

    workExperience.forEach(element => {
        // console.log(updateInputField);
        rows.push(
            <WorkExperienceSlot 
                workExperience={element}
                key={element.key}
                handleUpdateExperience={handleUpdateExperience}
                handleDeleteExperience={handleDeleteExperience}/>
        )
    });

    return (
        <div className='workExperienceForm' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'navy', borderWidth: 10}}>
            <h3>Work Experience</h3>
            
            {rows}
        
        <p></p>
        <button type="submit" onClick={e => handleCreateExperience(e,'workExperience')} id='workAddButton'>Add Work Experience</button>
        <p></p>
    </div>
    )

}

function WorkExperienceSlot(props) {

    const { workExperience, 
        handleUpdateExperience, 
        handleDeleteExperience } = props;

    return (
        <form className='workExperienceSlot' style={{borderStyle: 'dashed', borderRadius: 2, borderColor: 'black', borderWidth: 3}}>
            <div className='positionFieldContainer'>
                Position: <input className="inputField" type="text" placeholder='Stormtrooper, 2nd Battalion' onChange={e => handleUpdateExperience(e, workExperience, 'position', 'workExperience')} value={workExperience.position}></input>
            </div>
            <div className='companyFieldContainer'>
                Company: <input className="inputField" type="text" placeholder='The Empire, LLC' onChange={e => handleUpdateExperience(e, workExperience, 'company', 'workExperience')} value={workExperience.company}>
                </input>
            </div>
            <div className='locationFieldContainer'>
                Location: <input className="inputField" type="text" placeholder='Star, Death, The' onChange={e => handleUpdateExperience(e, workExperience, 'location', 'workExperience')} value={workExperience.location}></input>
            </div>
            <div className='startDateFieldContainer'>
                Start Date: <input className="inputField" type="month" onChange={e => handleUpdateExperience(e, workExperience, 'startDate', 'workExperience')} value={workExperience.startDate}></input>
            </div>
            <div className='endDateFieldContainer'>
                End Date: <input className="inputField" type="month" onChange={e => handleUpdateExperience(e, workExperience, 'endDate', 'workExperience')} value={workExperience.endDate}></input>
            </div>

            <div className='descriptionFieldContainer'>
                Description of Duties: <textarea className='inputField' placeholder='Kept workspace free of filthy Rebel scum, organized weekly Stormtrooper Socials' onChange={e => handleUpdateExperience(e, workExperience, 'descriptionOfDuties', 'workExperience')} value={workExperience.descriptionOfDuties}></textarea>
            </div>

            <button type="button" onClick={e => handleDeleteExperience(e, workExperience, 'workExperience')}> Delete this Entry </button>
            <p></p>
        </form>
    )
}








export default WorkExperienceForm;

/* 
--- Work Experience(VARIABLE, ADD AND DELETE THESE FORM FIELDS) ---
Position:
Company:
City:
Start Date:
End Date:? (maybe set this is a duration sort of thing?)
Short description:
*/