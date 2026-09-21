const Card = ({
  title,
  children,
}) => {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">

      {title && (
        <div className="border-b border-slate-200 px-6 py-4">

          <h2 className="text-lg font-semibold text-slate-800">
            {title}
          </h2>

        </div>
      )}

      <div className="p-6">
        {children}
      </div>

    </div>
  );
};

export default Card;