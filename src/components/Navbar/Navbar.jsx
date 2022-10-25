import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.item}>
        <li><NavLink to="/profile" className={changeColor => changeColor.isActive ? classes.active : classes.item}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" className={changeColor => changeColor.isActive ? classes.active : classes.item}>Messages</NavLink></li>
        <li><NavLink to="/news" className={changeColor => changeColor.isActive ? classes.active : classes.item}>News</NavLink></li>
        <li><NavLink to="/music" className={changeColor => changeColor.isActive ? classes.active : classes.item}>Music</NavLink></li>
        <li><NavLink to="/settings" className={changeColor => changeColor.isActive ? classes.active : classes.item}>Settings</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;