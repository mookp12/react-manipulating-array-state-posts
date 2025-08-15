function Posts({ post, setPosts }) {

  const handleLike = () => {
    setPosts(post.likes++);
  }

  const handleDislike = () => {
    if (post.likes > 0) {
    setPosts(post.likes--);
    }
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <div class="post-item">
          <div class="post-header">
            <h2>{post.title}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{post.likes}</span>
            </div>
          </div>
          <p class="post-content">{post.content}</p>
          <div class="post-actions">
            <button class="like-button" onClick={handleLike}>Like</button>
            <button class="dislike-button" onClick={handleDislike}>Dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
