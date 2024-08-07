
import {useDispatch, useSelector} from 'react-redux';
import { fetchApi } from '../features/apiCallingSlice';

function ApiCalling() {
  const categorySelector = useSelector((state)=>{return state.apiCalling.data});
  const dispatch = useDispatch();
  function btn_GetCategory(){
    dispatch(fetchApi())
    console.log(categorySelector)
  }
  return (
    <>
    <input onClick={btn_GetCategory} type='button' value='click'/>
    <select>
  {categorySelector.map((e,index)=>
  (
      <option key={index} value={e.slug}>{e.slug}</option>
  ))}
  </select>
    </>
  )
}

export default ApiCalling