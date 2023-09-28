// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const fetchFacebookPosts = async () => {
  try {
    const result = await axios.get(
      'https://graph.facebook.com/544581589273552/posts?fields=message,created_time,attachments&access_token=${process.env.FACEBOOK_ACCESS_TOKEN'
      );
      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

export default fetchFacebookPosts;