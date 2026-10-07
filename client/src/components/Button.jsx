export default function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
}) {
  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}