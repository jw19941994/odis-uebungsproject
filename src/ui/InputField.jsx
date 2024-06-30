import PropTypes from 'prop-types';
import FormGroup from './FormGroup';
import Label from './Label';
import Input from './Input';

const InputField = ({ label, name, required = false, type = "text", defaultValue = "", readOnly = false, disabled = false }) => (
  <FormGroup>
    <Label>{label}{required && " *"}</Label>
    <Input
      type={type}
      name={name}
      required={required}
      defaultValue={defaultValue}
      readOnly={readOnly}
      disabled={disabled}  // Hier wird das disabled-Attribut hinzugefügt
    />
  </FormGroup>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,  // PropType für das disabled-Attribut hinzufügen
};

export default InputField;
