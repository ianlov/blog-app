import { Link } from "react-router-dom";
import { deletePost } from "../../services/post";
import { useParams } from "react-router";

const Post = () => {
  const params = useParams();

  const handleDelete = () => {
    deletePost();
  };

  return (
    <>
      <div>
        <h1>Bee Movie</h1>
        <p>By Author on December 32, 2021</p>
        <img src="https://images.unsplash.com/photo-1635967453256-fd9e2d19f386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus
          congue massa ut facilisis. Nulla vitae posuere metus, quis viverra
          nisi. Suspendisse massa sapien, aliquet eu metus sodales, convallis
          molestie dolor. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Aenean consequat, massa ut
          porttitor semper, lectus tortor tempus nisi, ut imperdiet massa orci
          vel quam. In a varius arcu, id volutpat massa. Sed dictum purus a
          turpis dapibus, et vehicula ex feugiat. Cras ultricies nisl in ligula
          consequat, a tristique diam placerat.
        </p>
        <div>
          <button>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default Post;
