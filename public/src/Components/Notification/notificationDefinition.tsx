import avatar from "../../assets/account.png"

const notificationDefinition = [
    {
        user: {
            name: "John Doe",
            avatar: avatar,
            status: 'online'
        },
        title: <> <strong>John Doe</strong> started following you! </>,
        dateTime: '2024-09-15T10:00:00Z',
        notificationType: 'following',
        read: false
    },
    {
        user: {
            name: "John Daryl",
            avatar: avatar,
            status: 'pending'
        },
        title: <> <strong>John Daryl</strong> liked your post </>,
        dateTime: '2024-09-15T11:00:00Z',
        notificationType: 'liked',
        read: false
    },
    {
        user: {
            name: "Jane Smith",
            avatar: avatar,
            status: 'online'
        },
        title: <> <strong>Jane Smith</strong> commented on your post </>,
        dateTime: '2024-09-15T12:00:00Z',
        notificationType: 'commented',
        read: true
    },
    {
        user: {
            name: "Bob Wilson",
            avatar: avatar,
            status: 'offline'
        },
        title: <> <strong>Bob Wilson</strong> started following you! </>,
        dateTime: '2024-09-15T13:00:00Z',
        notificationType: 'following',
        read: false
    }
]

export default notificationDefinition

