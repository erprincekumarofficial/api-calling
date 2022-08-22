import axios from 'axios';
import { useState, useEffect } from "react";
const Home = () => {
  const [posts, setposts] = useState([]);
  const getPosts = async () => {
    const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
    const { data: res } = await axios.get(apiEndPoint);
    setposts(res);
  };

  useEffect(() => {
    getPosts()
  })
  return (
    <>
          <table id="customers">
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
            {posts.map((obj) => {
            return (
            <>
            <tr>
              <td>{obj.id}</td>
              <td>{obj.title}</td>
              <td>{obj.body}</td>
            </tr>
            </>
              )
            })}
        </table>
    </>
  );
}
export default Home;

