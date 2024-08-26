import PropTypes from 'prop-types';
import style from './FilterContacts.module.css';

export const FilterContacts = ({ filter, onFilterChange }) => {
  return (
    <label className={style.label}>
      Find contacts by name: 
      <input className={style.input} type="text" value={filter} onChange={(e) => onFilterChange(e)} />
    </label>
  );
};

FilterContacts.protoType = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};