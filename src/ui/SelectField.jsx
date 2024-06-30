import PropTypes from 'prop-types';
import FormGroup from './FormGroup';
import Label from './Label';
import Select from './Select';

const SelectField = ({ label, name, options, disabled = false }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Select name={name} className={disabled ? 'disabled-select' : ''} disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </Select>
  </FormGroup>
);

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool, // PropType für das disabled-Attribut hinzufügen
};

export default SelectField;
