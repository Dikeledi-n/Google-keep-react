import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">menu</span>
          <span className="tooltip-text">Main Menu</span>
        </div>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="Google Keep Logo"
        />
        <span className="logo-text">Keep</span>
      </div>
      <div className="search-area">
        <div className="tooltip">
          <span className="material-symbols-outlined icon-background">
            search
          </span>
          <span className="tooltip-text">Main Menu</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">grid_view</span>
          <span className="tooltip-text">List view</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">apps</span>
          <span className="tooltip-text">Google Apps</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            account_circle
          </span>
          <span className="tooltip-text">Google</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
