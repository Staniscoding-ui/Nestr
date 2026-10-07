function NavItem({ label, icon, active = false, onClick }) {
  return (
    <button
      type="button"
      className={`nav-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {icon}
      <span className="nav-item-label">{label}</span>
    </button>
  );
}

export default NavItem;