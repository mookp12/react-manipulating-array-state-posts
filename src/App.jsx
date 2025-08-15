import "./App.css";
import Posts from "./components/Posts";
import { postData } from "./raw-data/post-data";
import { useState } from "react";

function App() {
const [posts, setPosts] = useState(postData);

  return (
    <div className="App">
      {postData.map((post) => (
        <Posts post={post} setPosts={setPosts}/>
      ))}
    </div>
  );
}

export default App;
