import clsx from 'clsx';

const Checkbox = ({
  id,
  label,
  className,
  large,
  radio,
  disabled = false,
  ...props
}) => (
  <div className={`flex items-center ${className}`}>
    <div className="w-7">
      <input
        type={radio ? 'radio' : 'checkbox'}
        id={id + label}
        name={radio ? radio : id}
        disabled={disabled}
        {...(props.checked ? `checked` : null)}
        className={
          radio
            ? 'text-gold'
            : clsx(
              'border-2 rounded-none text-gold form-checkbox border-grey2',
              { 'w-5 h-5': !large },
              { 'w-7 h-7': large },
            )
        }
        {...props}
      />
    </div>

    <label htmlFor={id} className="pl-4 leading-tight text-grey4">
      {label}
    </label>
  </div>
);

export { Checkbox };
