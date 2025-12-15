const GradientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="relative px-8 py-3 rounded-lg font-semibold text-black 
      bg-gradient-to-r from-green-400 via-emerald-400 to-green-500
      hover:from-green-500 hover:via-emerald-500 hover:to-green-600
      transform hover:scale-105 transition-all duration-300
      shadow-lg hover:shadow-green-500/25">
      {children}
    </button>
  );
};

export default GradientButton;
