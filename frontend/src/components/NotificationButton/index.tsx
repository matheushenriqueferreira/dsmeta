import axios from 'axios'
import './styles.css'
import btnIcon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type Props = {
  saleId: number;
}

const handleClick = (id : number) => {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then((response) => {
    toast.info("SMS enviado com sucesso")
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