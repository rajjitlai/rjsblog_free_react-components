const NeonInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700
        text-white placeholder-gray-500
        focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20
        focus:shadow-[0_0_20px_rgba(74,222,128,0.3)]
        transition-all duration-300"
    />
  );
};

export default NeonInput;
