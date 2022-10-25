import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div>
        <div className={classes.postsTextArea}>
          <textarea></textarea>
          <button>Add post</button>
        </div>

      </div>
      <div className={classes.posts}>
        <Post massage='Hi, how are u?' likesCount='15' />
        <Post massage='Is is my first post?' likesCount='20' />
      </div>
    </div>
  )
}

export default MyPosts;