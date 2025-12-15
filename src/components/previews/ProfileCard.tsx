const ProfileCard = () => {
  return (
    <div className="w-72 p-6 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 
      border border-gray-700 text-center">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full 
        bg-gradient-to-r from-green-400 to-emerald-500" />
      <h3 className="text-xl font-bold text-white">John Doe</h3>
      <p className="text-gray-400 mb-4">Full Stack Developer</p>
      <div className="flex justify-center gap-2 flex-wrap">
        {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
          <button key={social} 
            className="px-3 py-1 text-sm rounded-full bg-gray-700 
              text-gray-300 hover:bg-green-500/20 hover:text-green-400 
              transition-colors">
            {social}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
