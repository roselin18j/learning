const PageHeader = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="mb-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="rounded-xl bg-[#450C3F] px-5 py-3 font-semibold text-white transition hover:bg-[#5e1652]"
        >
          {buttonText}
        </button>
      )}

    </div>
  );
};

export default PageHeader;