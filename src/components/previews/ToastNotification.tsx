interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

const ToastNotification = ({ message, type = 'success' }: ToastProps) => {
  const colors = {
    success: 'bg-green-500/20 border-green-500 text-green-400',
    error: 'bg-red-500/20 border-red-500 text-red-400',
    info: 'bg-blue-500/20 border-blue-500 text-blue-400',
  };

  return (
    <div className={`px-6 py-4 rounded-lg border backdrop-blur-sm ${colors[type]}`}>
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default ToastNotification;
