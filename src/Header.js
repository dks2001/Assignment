import React, { useState } from 'react';
import './Header.css';
import NewRow from './NewRow';

const Header = () => {

    const arr = [
        { alertName: 'alert1', frequency: 10, indep_option: ['ME Torge(Avg.)', "ME Speed (Avg.)"], dep_option: "ME Torge(Avg.)" },
        { alertName: 'alert2', frequency: 10, indep_option: ['ME Torge(Avg.)', "ME Speed (Avg.)"], dep_option: "ME Torge(Avg.)" },
        { alertName: '', frequency: 0, indep_option: [], dep_option: "" }
    ]
    const [ar, setAr] = useState(arr);

    const setNewRow = () => {

        let newRow = [...ar, { alertName: '', frequency: 0, indep_option: [], dep_option: "" }];
        setAr(newRow);
        console.log(newRow);

    }

    const removeRow = (index) => {

        let arrrr = ar.filter((item,i) => i !== index) 
        setAr(arrrr);
    }

    const addData = (term, freq, selectedOption, index, multiSelectOption) => {
        let arToUpdate = [...ar];
        arToUpdate[index].alertName = term;
        arToUpdate[index].dep_option = selectedOption;
        arToUpdate[index].frequency = freq;
        arToUpdate[index].indep_option = multiSelectOption;

        console.log(ar);

    }

    return (
        <div className="Header">
            <header className="app-header">
                <h1>Alert Configuration</h1>
                <hr />
                <div className='headings'>
                    <div className='add' onClick={() => setNewRow()}>+</div>
                    <div>Alert Name</div>
                    <div>Independent Variable</div>
                    <div>Dependent Variable</div>
                    <div>Frequency</div>
                    <div>Save</div>
                </div>
                <hr />
            </header>

            {ar.map((ele, idx) => (
                <NewRow addData={addData} removeRow={removeRow} key={idx} indexValue={idx} alertName={ele.alertName} io={ele.indep_option} do={ele.dep_option} freq={ele.frequency} />
            ))}

        </div>
    );
}

export default Header;