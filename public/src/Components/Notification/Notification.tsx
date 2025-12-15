import React from 'react'
import "./Notification.css"
import avatar from "../../assets/account.png"

const Notification = ({ notification }) => {
    const date = new Date(notification.dateTime)

    return (
        <div className={`notification ${notification.read ? 'read' : ''}`}>
            <div className="notification__avatar">
                <img src={notification.user.avatar || avatar} alt={notification.user.name} />
                <div className={`notification__status notification__status--${notification.user.status}`}></div>
            </div>
            <div className='notification__content'>
                <h2 className='notification__title'>{notification.title}</h2>
                <time className='notification__date'>
                    {date.getDate()} {date.toLocaleString('default', { month: 'short' })}, {date.getFullYear()}
                </time>
            </div>
            {!notification.read && <div className='notification__read-indicator'></div>}
        </div>
    )
}

export default Notification
