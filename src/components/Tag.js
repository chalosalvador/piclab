const Tag = ({ text, className }) => {
  return (
    <div
      className={`text-white border-white border rounded-full px-3 backdrop-filter backdrop-blur absolute before:content-['#'] before:mr-2 before:opacity-50 ${className}`}
    >
      {text}
    </div>
  );
};

export default Tag;
