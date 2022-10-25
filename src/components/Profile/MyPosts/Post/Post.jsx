import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://memepedia.ru/wp-content/uploads/2018/12/kot-kashlyaet-mem.png' />
      {props.massage}
      <div>
        <span>Likes</span>{props.likesCount}
      </div>
    </div>

  );
}

export default Post;