import { NavLink } from 'react-router-dom';

function Header(props) {
  var { darkMode, darkModeSet, whiteMode } = props;
  return (
    <header
      className={
        darkMode === true
          ? 'darkcolor container  text-white header'
          : 'container header'
      }
    >
      <div>
        <div className="flex-sb">
          <ul className={darkMode === true ? 'text-white flex' : 'flex'}>
            <NavLink
              to="/"
              classnameaction="active"
              className={darkMode === true ? ' NavLink text-white' : 'NavLink'}
            >
              <li>Popular</li>
            </NavLink>
            <NavLink
              to="/github"
              classnameaction="active "
              className={darkMode === true ? ' NavLink text-white' : 'NavLink'}
            >
              <li>Battel</li>
            </NavLink>
          </ul>
          <h3>
            {darkMode === true ? (
              <i onClick={whiteMode} className="fas fa-sun"></i>
            ) : (
              <i onClick={darkModeSet} className="fas fa-moon"></i>
            )}
          </h3>
        </div>
      </div>
    </header>
  );
}

export default Header;