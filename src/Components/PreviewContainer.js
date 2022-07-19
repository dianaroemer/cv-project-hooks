import React, { Component } from 'react'

// class PreviewContainer extends Component {
//     // constructor(props){
//         // super(props);
//     // }

//     render() {

//         const { appState } = this.props;

//         const personalInformation = appState.personalInformation;
//         const workExperienceArr = appState.workExperience.workExperienceArr;
//         const skillArr = appState.skillArr;
//         const educationalExperienceArr = appState.educationalExperience.educationalExperienceArr;

//         let workRows = [];
//         workExperienceArr.forEach(element => {
//             workRows.push(
//                 <div className='previewWorkSlot' key={element.key}>
//                     <text className='previewWorkPosition'>{element.position.toUpperCase()}</text> {element.startDate ? "  ||  " : ''} {element.startDate} {element.endDate ? "to" : ''} {element.endDate} 
//                     <div className='previewWorkCompany'>
//                         {element.company}{element.location ? "  ||  " : ''}{element.location}</div>
//                     <div className='previewWorkDetails'>{element.descriptionOfDuties}</div> {'\n'}

//                 </div>
//             )
//         })

//         let skillRows = []
//         skillArr.forEach(element => {
//             skillRows.push(
//                 <li className='previewSkillSlot' key={element.key}>
//                     {element.skill}
//                 </li>
//             )
//         })


//         let educationalRows = [];
//         educationalExperienceArr.forEach(element => {
//             educationalRows.push(
//                 <div className='previewEducationalExperienceSlot' key={element.key}>

//                     <text className='previewEducationInstitution'>{element.institution}</text> {element.degree ? " || " : ""} {element.degree} <div></div>
//                     <div className='previewEducationDates'>
//                     {element.startDate} {element.endDate ? "to" : ''} {element.endDate} 
//                     </div>
//                     <div className='previewEducationDetails'>{element.details}</div>
//                 </div>
//             )

//         })

//         return (

//             <div className='previewContainer' style={{borderStyle: 'solid', borderRadius: 3, borderWidth: 1, borderColor: 'lightgrey', whiteSpace: 'pre-wrap'}}>

//                 <div className='previewPersonal'>
//                     <div className='previewPersonalName'>
//                         {personalInformation.name}
//                     </div>
//                     <div className='previewPersonalTitle'>
//                         {personalInformation.title}
//                     </div>
//                     <div className='previewPersonalAddress'>
//                         {personalInformation.address}
//                     </div>
//                     <div className='previewPersonalPhoneEmail'>
//                         {personalInformation.email ? <a href={"mailto:" + personalInformation.email}> {personalInformation.email} </a> : ''}
                        
//                         {personalInformation.phone ? ' || ' : ''} 
//                         {personalInformation.phone}
//                     </div>
//                     <div className='previewPersonalLinks'>
//                         <a href={personalInformation.linkedIn}>{personalInformation.linkedIn}</a>
//                          {personalInformation.gitHub ? '  ||  ' : ''}
//                          <a href={personalInformation.gitHub}>{personalInformation.gitHub}</a>
//                     </div>
//                     <div className='previewPersonalDivider'>- - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </div>

//                 </div>
//                 {workRows[0] ? (<div className='previewWorkContainer'>
//                     <div className='previewHeaderText'>
//                         Work Experience
//                     </div>
//                     {workRows}
//                 </div>) : ''}

//                 {skillRows[0] ? (<div className='previewSkillContainer'>
//                     <div className='previewHeaderText'>
//                         Skills
//                         </div>
//                         <ul className='previewSkillList'>
//                         {skillRows}
//                         </ul>
//                 </div>) : ''}

//                 {educationalRows[0] ? (<div className='previewEducationalContainer'>
//                     <div className='previewHeaderText'>
//                         Educational Experience
//                     </div>
//                     {educationalRows}
//                 </div>) : ''}

//             </div>

//         )
//     }
// }


const PreviewContainer = (props) => {

    
    const { personalInformation,
    workExperience,
    educationalExperience,
    skills } = props;

    // const personalInformation = appState.personalInformation;
    // const workExperienceArr = appState.workExperience.workExperienceArr;
    // const skillArr = appState.skillArr;
    // const educationalExperienceArr = appState.educationalExperience.educationalExperienceArr;

    let workRows = [];
    workExperience.forEach(element => {
        workRows.push(
            <div className='previewWorkSlot' key={element.key}>
                <text className='previewWorkPosition'>{element.position.toUpperCase()}</text> {element.startDate ? "  ||  " : ''} {element.startDate} {element.endDate ? "to" : ''} {element.endDate} 
                <div className='previewWorkCompany'>
                    {element.company}{element.location ? "  ||  " : ''}{element.location}</div>
                <div className='previewWorkDetails'>{element.descriptionOfDuties}</div> {'\n'}

            </div>
        )
    })

    let skillRows = []
    skills.forEach(element => {
        skillRows.push(
            <li className='previewSkillSlot' key={element.key}>
                {element.skill}
            </li>
        )
    })


    let educationalRows = [];
    educationalExperience.forEach(element => {
        educationalRows.push(
            <div className='previewEducationalExperienceSlot' key={element.key}>

                <text className='previewEducationInstitution'>{element.institution}</text> {element.degree ? " || " : ""} {element.degree} <div></div>
                <div className='previewEducationDates'>
                {element.startDate} {element.endDate ? "to" : ''} {element.endDate} 
                </div>
                <div className='previewEducationDetails'>{element.details}</div>
            </div>
        )

    })

    return (

        <div className='previewContainer' style={{borderStyle: 'solid', borderRadius: 3, borderWidth: 1, borderColor: 'lightgrey', whiteSpace: 'pre-wrap'}}>

            <div className='previewPersonal'>
                <div className='previewPersonalName'>
                    {personalInformation.name}
                </div>
                <div className='previewPersonalTitle'>
                    {personalInformation.title}
                </div>
                <div className='previewPersonalAddress'>
                    {personalInformation.address}
                </div>
                <div className='previewPersonalPhoneEmail'>
                    {personalInformation.email ? <a href={"mailto:" + personalInformation.email}> {personalInformation.email} </a> : ''}
                    
                    {personalInformation.phone ? ' || ' : ''} 
                    {personalInformation.phone}
                </div>
                <div className='previewPersonalLinks'>
                    <a href={personalInformation.linkedIn}>{personalInformation.linkedIn}</a>
                     {personalInformation.gitHub ? '  ||  ' : ''}
                     <a href={personalInformation.gitHub}>{personalInformation.gitHub}</a>
                </div>
                <div className='previewPersonalDivider'>- - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </div>

            </div>
            {workRows[0] ? (<div className='previewWorkContainer'>
                <div className='previewHeaderText'>
                    Work Experience
                </div>
                {workRows}
            </div>) : ''}

            {skillRows[0] ? (<div className='previewSkillContainer'>
                <div className='previewHeaderText'>
                    Skills
                    </div>
                    <ul className='previewSkillList'>
                    {skillRows}
                    </ul>
            </div>) : ''}

            {educationalRows[0] ? (<div className='previewEducationalContainer'>
                <div className='previewHeaderText'>
                    Educational Experience
                </div>
                {educationalRows}
            </div>) : ''}

        </div>

    )

}


export default PreviewContainer;