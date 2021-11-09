import { useEffect, useState } from "react";
import { getPosts } from "../../services/post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      console.log(allPosts);
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return <></>;
};

export default Home;
