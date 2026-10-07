function Header({ title, subtitle, children }) {
  return (
    <header className="header">
      <div className="header-text">
        <h1 className="header-title">{title}</h1>

        {subtitle && (
          <p className="header-subtitle">
            {subtitle}
          </p>
        )}
      </div>

      {children && (
        <div className="header-actions">
          {children}
        </div>
      )}
    </header>
  );
}

export default Header;