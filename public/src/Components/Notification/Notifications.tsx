import React, { useState } from 'react'
import notificationDefinition from './notificationDefinition'
import close from "../../assets/close.svg"
import Notification from './Notification'
import "./Notifications.css"

const tabs = ['all', 'following', 'liked', 'commented']

const createNotificationsCount = (notifications) => {
    return notifications.reduce(
        (acc, notification) => {
            acc['all']++
            acc[notification.notificationType]++
            return acc
        }, 
        tabs.reduce((acc, tab) => {
            acc[tab] = 0
            return acc
        }, {})
    )
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const Notifications = () => {
    const [notifications, setNotifications] = useState(notificationDefinition)
    const [isOpen, setIsOpen] = useState(true)
    const notificationsCount = createNotificationsCount(notifications)
    const [currentTab, setCurrentTab] = useState('all')

    const filteredNotifications = notifications.filter((notification) => {
        if (currentTab === 'all') {
            return true
        } else {
            return notification.notificationType === currentTab
        }
    })

    const handleMarkAllAsRead = () => {
        setNotifications(notifications.map(notification => ({
            ...notification,
            read: true
        })))
    }

    if (!isOpen) return null

    return (
        <div className='notifications-wrapper'>
            <div className="notifications">
                <div className="notifications__header">
                    <h2>Notifications</h2>
                    <button 
                        className="notifications__close" 
                        onClick={() => setIsOpen(false)}
                        aria-label="Close notifications"
                    >
                        <img src={close} alt="Close" />
                    </button>
                </div>
                <div className="notifications__tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`notifications__tab ${currentTab === tab ? 'active' : ''}`}
                            onClick={() => setCurrentTab(tab)}
                        >
                            <span>{capitalizeFirstLetter(tab)}</span>
                            <span className="notifications__count">
                                {notificationsCount[tab]}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="notifications__content">
                    {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((notification, index) => (
                            <Notification key={index} notification={notification} />
                        ))
                    ) : (
                        <div className="notifications__empty">
                            <p>No notifications found</p>
                        </div>
                    )}
                </div>
                <div className='notifications__footer'>
                    <button className='notifications__button notifications__button--secondary' onClick={handleMarkAllAsRead}>
                        Mark all as read
                    </button>
                    <button className='notifications__button notifications__button--primary'>
                        View all notifications
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notifications

