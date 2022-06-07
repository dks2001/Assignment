import React from "react";
import Select from 'react-select';
import './NewRow.css';

class NewRow extends React.Component {

    state = {
        multiSelectOption: "",
        selectedOption: "",
        term: this.props.alertName,
        freq: this.props.freq
    };


    handleChange = (opt) => {
        let val = opt['value'];
        console.log(val);
        this.setState({ selectedOption: [val.toString()] });
    };

    handleChangeMultiSelector = (multiSelectedArray) => {

        let multi = multiSelectedArray.map(item => item.value);
        this.setState({ multiSelectOption: multi });
    }

    render() {

        const { selectedOption, term, freq, multiSelectOption } = this.state;

        const op1 = [
            { label: "ME Torge (Avg.)", value: "ME Torge (Avg.)" },
            { label: "ME Speed (Avg.)", value: "ME Speed (Avg.)" },
            { label: "Rate of Return (Avg.)", value: "Rate of Return (Avg.)" }
        ];

        const op2 = [
            { label: "ME Torge (Avg.)", value: "ME Torge (Avg.)" },
            { label: "ME Speed (Avg.)", value: "ME Speed (Avg.)" },
            { label: "ME Shaft Power(Avg.)", value: "Rate of Return (Avg.)" }
        ];


        return (
            <div>
                <div className="flex" key={this.props.indexValue}>
                    <div className="remove" onClick={() => this.props.removeRow(this.props.indexValue)}>X</div>
                    <input className="alertName" type="text" value={term} onChange={(e) => this.setState({ term: e.target.value })}></input>
                    <Select
                        className="multiselect"
                        options={op1}
                        isMulti
                        defaultValue={this.props.indexValue < 2 ? [op1[0], op1[1]] : ""}
                        onChange={this.handleChangeMultiSelector} />

                    <Select
                        className="singleselect"
                        options={op2} onChange={this.handleChange}
                        defaultValue={this.props.indexValue < 2 ? [op2[0]] : ""} />

                    <input className="number" value={freq} type="number" onChange={(e) => this.setState({ freq: e.target.value })}></input>
                    <button onClick={() => this.props.addData(term, freq, selectedOption, this.props.indexValue, multiSelectOption)}>Save</button>
                </div>
                <hr/>
            </div>
        );
    }

}

export default NewRow;