import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import ParallaxBG from "../components/cards/ParallaxBG";
import axios from "axios";
import PostPublic from "../components/cards/PostPublic";
import Head from "next/head";
import Link from "next/link";
import io from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKETIO, {
  reconnection: true,
});

const Home = ({ posts }) => {
  const [state, setState] = useContext(UserContext);

  const [newsFeed, setNewsFeed] = useState([]);

 

  useEffect(() => {
    socket.on("new-post", (newPost) => {
      setNewsFeed([newPost, ...posts]);
    });
  }, []);

  const head = () => (
    <Head>
      <title>GETlinkup Social Media Platforms</title>
      <meta
        name="description"
        content="A social network for Connect, Share, and Unite with Your World!"
      />
      <meta
        property="og:description"
        content="A social network for Connect, Share, and Unite with Your World!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GETlinkup" />
      <meta property="og:url" content="https://getlinkup.onrender.com/" />
      <meta
        property="og:image:secure_url"
        content="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1686428428/logo_cd8blp.png"
      />
      <link rel="icon" href="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1686428428/logo_cd8blp.png" />
    </Head>
  );

  const collection = newsFeed.length > 0 ? newsFeed : posts;

  return (
    <>
      {head()}
      <ParallaxBG url="/images/default.jpg"  />

      <div className="container">
        
        <div className="row pt-5">
          {collection.map((post) => (
            <div key={post._id} className="col-md-4">
              <Link href={`/post/view/${post._id}`}>
                <a>
                  <PostPublic key={post._id} post={post} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get("/posts");
  // console.log(data);
  return {
    props: {
      posts: data,
    },
  };
}

export default Home;
