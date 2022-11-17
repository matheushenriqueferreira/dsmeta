import './styles.css'
import btnIcon from '../../assets/img/notification-icon.svg';

const NotificationButton = () => {
  return(
    <div className='dsmeta-red-btn'>
      <img src={btnIcon} alt="Notificação" />
    </div>
  )
}

export default NotificationButton;