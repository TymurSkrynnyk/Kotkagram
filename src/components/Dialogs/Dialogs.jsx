import classes from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={changeColor => changeColor.isActive ? classes.active : classes.dialogsItems}>
          Dasha
        </div>
        <div className={classes.dialog}>
          Tymur
        </div>
        <div className={classes.dialog}>
          Dima
        </div>
        <div className={classes.dialog}>
          Makym
        </div>
        <div className={classes.dialog}>
          Alex
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How are u?</div>
        <div className={classes.message}>Privet</div>
      </div>
    </div>
  );
}

export default Dialogs;