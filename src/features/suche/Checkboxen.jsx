// CheckboxGroupStyles.js
import PropTypes from 'prop-types';
//Import UI
import { Column } from '../../ui/Columns';
import Block from '../../ui/Block';
import { Row, CheckboxLabel, CheckboxInput } from '../../ui/Checkboxen';

const Checkboxen = ({ categories, checkboxStates, selectAll, handleSelectAll, handleCheckboxChange }) => {
  return (
    <Block>
      <h3>Verzeichnisse</h3>
      <Row>
        <Column>
          <CheckboxLabel>
            <CheckboxInput 
              type="checkbox" 
              name="alle_verzeichnisse" 
              checked={selectAll.directories} 
              onChange={() => handleSelectAll('directories')} 
            /> 
            Alle
          </CheckboxLabel>
          {categories.directories.map(item => (
            <CheckboxLabel key={item}>
              <CheckboxInput 
                type="checkbox" 
                name={item} 
                checked={checkboxStates[item]} 
                onChange={() => handleCheckboxChange(item)} 
              /> 
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </CheckboxLabel>
          ))}
        </Column>
        <Column>
          <CheckboxLabel>
            <CheckboxInput 
              type="checkbox" 
              name="alle_ehe" 
              checked={selectAll.ehe} 
              onChange={() => handleSelectAll('ehe')} 
            /> 
            Alle
          </CheckboxLabel>
          {categories.ehe.map(item => (
            <CheckboxLabel key={item}>
              <CheckboxInput 
                type="checkbox" 
                name={item} 
                checked={checkboxStates[item]} 
                onChange={() => handleCheckboxChange(item)} 
              /> 
              {item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')}
            </CheckboxLabel>
          ))}
        </Column>
        <Column>
          <CheckboxLabel>
            <CheckboxInput 
              type="checkbox" 
              name="alle_namensfuehrung" 
              checked={selectAll.namensfuehrung} 
              onChange={() => handleSelectAll('namensfuehrung')} 
            /> 
            Alle
          </CheckboxLabel>
          {categories.namensfuehrung.map(item => (
            <CheckboxLabel key={item}>
              <CheckboxInput 
                type="checkbox" 
                name={item} 
                checked={checkboxStates[item]} 
                onChange={() => handleCheckboxChange(item)} 
              /> 
              {item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')}
            </CheckboxLabel>
          ))}
        </Column>
        <Column>
          <CheckboxLabel>
            <CheckboxInput 
              type="checkbox" 
              name="alle_lebenspartn" 
              checked={selectAll.lebenspartn} 
              onChange={() => handleSelectAll('lebenspartn')} 
            /> 
            Alle
          </CheckboxLabel>
          {categories.lebenspartn.map(item => (
            <CheckboxLabel key={item}>
              <CheckboxInput 
                type="checkbox" 
                name={item} 
                checked={checkboxStates[item]} 
                onChange={() => handleCheckboxChange(item)} 
              /> 
              {item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')}
            </CheckboxLabel>
          ))}
        </Column>
      </Row>
    </Block>
  );
};

Checkboxen.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.string)
  ).isRequired,
  checkboxStates: PropTypes.objectOf(PropTypes.bool).isRequired,
  selectAll: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleSelectAll: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkboxen;