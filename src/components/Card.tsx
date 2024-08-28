const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    boxShadow: "0 0 0 1px #E5E7EB",
  };

  return (
    <div
      style={cardStyle}
      className="flex flex-col justify-start align-start border-2 border-amber-400 flex-1"
    >
      {children}
    </div>
  );
};

export default Card;
