import Image from "next/image";


const getPostsData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();    
};

const getUsersData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json();
};

const getDogData = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random",{
        cache: "no-store"
        // next: {
        //     revalidate: 10,
        // }
    })
    return res.json();
};

const ListOfPosts = async () => {
    const [posts, users, dog] = await Promise.all([
        getPostsData(), 
        getUsersData(),
        getDogData(),
    ]);

    // const [dog] = await Promise.all([
            
    //         getDogData(),
    //     ]);

  return (
    <div>
        <Image src={dog.message} alt="dog" width={200} height={300} />
      {
        posts.map((post: any) => {
            return <p key={post._id}>Post:- {post.title} </p>
        })        
      }

      {/* <div>
        {
            users.map((user: any) => {
                return <p key={user._id}>User:-{user.name}</p>
            } )
        }
      </div> */}
    </div>
  )
}

export default ListOfPosts
