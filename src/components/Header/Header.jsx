import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src='https://svgsilh.com/svg/1314467.svg' />
      <div className={classes.logo}>Kotkagram</div>

    </header>
  );
}

export default Header;