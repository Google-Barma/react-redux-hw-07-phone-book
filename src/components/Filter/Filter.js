import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(changeFilter(e.target.value));
  return (
    <>
      <label className={s.text} name="filter" htmlFor="filter" value={filter}>
        Find contacts by name
      </label>
      <input
        value={filter}
        type="text"
        id="filter"
        onChange={handleChangeFilter}
      />
    </>
  );
}
