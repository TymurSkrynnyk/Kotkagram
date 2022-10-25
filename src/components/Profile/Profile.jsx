import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={classes.userProfileArea}>
        <div className={classes.userProfileBackground}>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
        </div>
        <div className={classes.userProfileInf}>
          <img className={classes.userImg} src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />
          <div className={classes.userProfileName}>Kotka Kotka</div>
        </div>
        <div className={classes.userProfileNav}>
          <div className={classes.userProfileNavWrapper}>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Membership</a></li>
              <li><a href="">Discussion</a></li>
              <li><a href="">Video</a></li>
              <li><a href="">Group</a></li>
              <li><a href="">Events</a></li>
              <li><a href="">Media</a></li>
            </ul>
          </div>
        </div>
      </div>

      <MyPosts />
    </div >
  );
}

export default Profile;