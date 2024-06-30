import PropTypes from 'prop-types';
import FormGroup from './FormGroup';
import Label from './Label';
import Input from './Input';

const CheckboxField = ({ label, name, checked = false, disabled = false }) => (
  <FormGroup>
    <Label style={{ display: 'flex', alignItems: 'center' }}>
      <Input type="checkbox" name={name} checked={checked} disabled={disabled} style={{ marginRight: '4px' }} />
      {label}
    </Label>
  </FormGroup>
);

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool, 
};

export default CheckboxField;
