import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Button } from "flowbite-react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?limit=8");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-xl font-bold lg:text-4xl">
          Welcome to takeuforward
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm">
          Welcome to takeuforward, your interactive learning platform! Explore
          our flashcard tool to enhance your knowledge by flipping through
          questions and answers.
        </p>
        <div className="flex gap-4 mt-6">
          <Link to="/create-post">
            <Button outline gradientDuoTone="purpleToPink" className="text-lg">
              Add FlashCard
            </Button>
          </Link>
          <Link
            to="/search"
            className="text-xs sm:text-sm text-teal-500 font-bold"
          >
            <Button outline gradientDuoTone="pinkToOrange" className="text-lg">
              Quiz Yourself with Flashcards
            </Button>
          </Link>

          <Link
            to="/dashboard?tab=profile"
            className="text-xs sm:text-sm text-teal-500 font-bold"
          >
            <Button outline gradientDuoTone="purpleToBlue" className="text-lg">
              Admin Profile & Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-3 bg-amber-100 dark:bg-slate-700 max-w-6xl mx-auto rounded-xl">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              Recent FlashCards
            </h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all FlashCards
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

