import React, { useEffect, useState } from 'react';
import styles from '../styles/components/FacebookPosts.module.css';
import fetchFacebookPosts from '../pages/api/fetchFacebookPosts';

const FacebookPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFacebookPosts().then(data => {
      console.log("Received data:", data);
      if (Array.isArray(data.data)) {
        setPosts(data.data);
      } else if (data && data.posts) {
        setPosts(data.posts);
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      setLoading(false);
    })
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className={styles.postsContainer}>

      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div className={styles.singlePost} key={index}>
            <div className={styles.postMessage}>{post.message}</div>
            <div className={styles.postTime}>{new Date(post.created_time).toLocaleString()}</div>
            <div className={styles.postImageContainer}>
              {post.attachments && post.attachments.data[0].media && post.attachments.data[0].media.image && (
                <img src={post.attachments.data[0].media.image.src} alt={post.attachments.data[0].media.image.alt} className={styles.postImage} />
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default FacebookPosts;

