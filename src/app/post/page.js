import MyPost from "./mypost";

async function getPosts() {
    let postData = await fetch('https://jsonplaceholder.typicode.com/posts')
    postData = await postData.json()
    return postData;
}

const Post = async () => {
    let posts = await getPosts();
    // console.log(posts) 
  return (
    <div>
        <h2>Posts | Fetch data with api in server side Components</h2>
        {
            posts.map((post) => 
            <>
            <h4 key={post.id}>#{post.id}) Post Title :  {post.title}</h4>
            <MyPost data = {post.id}/>
            </>
        )
        }
    </div>
  )
}

export default Post