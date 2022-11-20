import axios from 'axios'
import './styles.css'
import btnIcon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

type Props = {
  saleId: number;
}

const handleClick = (id : number) => {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then((response) => {
    
  })
}

const NotificationButton = ( {saleId} : Props ) => {
  return(
    <div className='dsmeta-red-btn' onClick={() => handleClick(saleId)}>
      <img src={btnIcon} alt="Notificação" />
    </div>
  )
}

export default NotificationButton;