import NavItem from "./NavItem";

function BottomNav({ activePage, onNavigate }) {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <NavItem
        label="Home"
        active={activePage === "home"}
        onClick={() => onNavigate("home")}
        icon={<span>⌂</span>}
      />

      <NavItem
        label="Nest"
        active={activePage === "nest"}
        onClick={() => onNavigate("nest")}
        icon={<span>☆</span>}
      />

      <NavItem
        label="Add"
        active={activePage === "add"}
        onClick={() => onNavigate("add")}
        icon={<span>+</span>}
      />

      <NavItem
        label="Profile"
        active={activePage === "profile"}
        onClick={() => onNavigate("profile")}
        icon={<span>●</span>}
      />
    </nav>
  );
}

export default BottomNav;