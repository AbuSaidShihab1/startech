"use client"
import { useState } from "react";
import { FaBlogger, FaRegCommentDots } from "react-icons/fa";
import { FaFacebook, FaDiscourse } from "react-icons/fa6";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("Blogger");

  const handlePostComment = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput("");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-black text-white flex items-center p-2 rounded-t-md">
        <FaRegCommentDots className="mr-2" />
        <span className="font-bold">POST COMMENT</span>
      </div>
      <div className="flex space-x-4 bg-gray-900 text-white p-2 rounded-b-md">
        {["Blogger", "Disqus", "Facebook"].map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1 rounded-md ${
              activeTab === tab ? "bg-red-500" : "bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 border border-gray-300 rounded-md mt-2">
        <p className="text-gray-600">No comments</p>
        <p className="text-sm text-gray-500 mt-1">
          Note: Only a member of this blog may post a comment.
        </p>
        <div className="flex items-center mt-4 border p-2 rounded-md">
          <FaBlogger className="text-orange-500 text-2xl mr-2" />
          <input
            type="text"
            placeholder="Enter Comment"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-1 outline-none"
          />
        </div>
        <button 
          onClick={handlePostComment} 
          className="mt-2 w-full bg-black text-white p-2 rounded-md">
          Submit
        </button>
      </div>
      {comments.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Comments:</h3>
          {comments.map((comment, index) => (
            <div key={index} className="mb-2 p-2 border border-gray-300 rounded-md">
              {comment}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;
