function Icon({ children, size = 24, className = "" }) {
  return (
    <span
      className={`icon ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export default Icon;