import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


function SkillForm(props){

    const {skills,
        handleUpdateExperience, 
        handleDeleteExperience, 
        handleCreateExperience } = props;

    const skillRows = [];

    skills.forEach(element => {
        skillRows.push(
            <SkillSlot skill={element}
            handleUpdateExperience={handleUpdateExperience}
            handleDeleteExperience={handleDeleteExperience}
            key={element.key}/>
        )
    })
    
    return (
        <div className='skillForm' style={{borderStyle: 'solid', borderRadius: 2, borderColor: 'red', borderWidth: 10}}>
            <h3 className='skillsHeaderText'>Skills</h3>
            {skillRows}
            
        <button type="submit" onClick={e => handleCreateExperience(e, 'skills')} id='skillAddButton'>Add Skills</button>
        <p></p>
    </div>
    )
}


function SkillSlot(props){

    const { skill,
        handleUpdateExperience, 
        handleDeleteExperience } = props;

    if(skill.edit) {
        return (
            <form className='skillEditForm'>
                <input type="text" className="inputField" placeholder="Shooting womp rats in Beggar's Canyon"  
                    onChange={e => handleUpdateExperience(e, skill, 'skill', 'skills')} 
                    onKeyDown={e=> {
                        if(e.key === "Enter"){
                            e.preventDefault();
                            handleUpdateExperience(e, skill, 'edit', 'skills');
                        }
                    }}
                    value={skill.skill}></input>

                <FontAwesomeIcon icon={faCircleCheck} onClick={(e) => 
                    handleUpdateExperience(e, skill, 'edit', 'skills')}/>
                <FontAwesomeIcon icon={faTrash} onClick={e=> handleDeleteExperience(e, skill, 'skills')} />

            </form>
        );
    } else {
        return (
            <form className='skillForm'>
                {skill.skill} |
                <FontAwesomeIcon icon={faPenToSquare} onClick={(e) => 
                        handleUpdateExperience(e, skill, 'edit', 'skills')}/>
                <FontAwesomeIcon icon={faTrash} onClick={e=> handleDeleteExperience(e, skill, 'skills')} />

            </form>
        )
    }
}

export default SkillForm;