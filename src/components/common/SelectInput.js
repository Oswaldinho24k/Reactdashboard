/**
 * Created by BlisS on 22/03/17.
 */
import React, {PropTypes} from 'react';


const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                {/* Note, value us set here rather on the option*/}
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control">
                    <option value="">
                        {defaultOption}
                    </option>
                    {options.map((option) => {
                        return (
                            <option
                                value={option.value}
                                key={option.value}
                            >{option.text}</option>
                        );
                    })};
                </select>
                {error && <div className="alert alert-danger"></div>}
                {error}
            </div>
        </div>
    );
};

// SelectInput.propTypes = {
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     defaultOption: PropTypes.string,
//     value: PropTypes.string,
//     error: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object)
//
// };

export default SelectInput;
