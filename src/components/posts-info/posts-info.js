const PostsInfo = (props) => {
    const { allPosts, liked } = props;
    return (
        <div>
            {allPosts} записей, из них понравилось {liked}
        </div>
    );
};

export default PostsInfo;
