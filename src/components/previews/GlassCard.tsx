const GlassCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl 
      border border-white/20 shadow-xl
      hover:bg-white/15 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default GlassCard;
