const Checkbox = ({ id, label, className, ...props }) => (
  <div className={`flex items-center ${className}`} {...props}>
    <div className="mr-4 w-7">
      <input
        type="checkbox"
        id={id}
        name={id}
        className="rounded-none w-7 h-7 text-gold form-checkbox"
      />
    </div>

    <label htmlFor="ebook" className="leading-tight text-grey4">
      {label}
    </label>
  </div>
);

export { Checkbox };
