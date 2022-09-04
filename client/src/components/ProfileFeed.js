import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProfileFeed = ({ recentLike, recentComment }) => {
  const navigate = useNavigate("");

  // -------------------------------
  // if (category && category === "personal-development") {
  //   const articleCateogry = "Personal development";
  //   return <CategoryTag>{articleCateogry}</CategoryTag>;
  // }
  // if (category && category === "life-tip") {
  //   const articleCateogry = "Life tips";
  // }
  // if (category && category === "personal-story") {
  //   const articleCateogry = "Personal story";
  // } else {
  //   return (
  //     <div>
  //       <CategoryTag>
  //         {category && category.charAt(0).toUpperCase() + category.slice(1)}
  //       </CategoryTag>
  //     </div>
  //   );
  // }
  // -------------------------------

  const likeFeed = recentLike && recentLike.slice(0, 6);
  const commentFeed = recentComment && recentComment.slice(0, 6);
  return (
    <Container>
      <BoxContainer>
        <Subtitle>Recent like</Subtitle>
        {likeFeed &&
          likeFeed.reverse().map((article) => {
            let category = article && article.category[0];
            if (category === "personal-development") {
              category = "Personal development";
            }
            if (category === "life-tip") {
              category = "Life tips";
            }
            if (category === "Personal story") {
              category = "Personal story";
            } else {
              category = category.charAt(0).toUpperCase() + category.slice(1);
            }

            return (
              <LinkContainer>
                <ArticleName
                  onClick={(e) => {
                    navigate(`/article/${article._id}`);
                  }}
                >
                  {article.title}
                </ArticleName>
                <ArticleCategory>{category}</ArticleCategory>
              </LinkContainer>
            );
          })}
      </BoxContainer>
      <BoxContainer>
        <Subtitle>Recent comments</Subtitle>
        {commentFeed &&
          commentFeed.reverse().map((comment) => {
            const commentText = comment.comment.slice(0, 120);
            return (
              <LinkContainer>
                <ArticleName
                  onClick={(e) => {
                    navigate(`/article/${comment.articleId}`);
                  }}
                >
                  {comment.comment.length > 120
                    ? `"${commentText}..."`
                    : `"${comment.comment}"`}
                </ArticleName>
                <ArticleCategory>{comment.articleTitle}</ArticleCategory>
              </LinkContainer>
            );
          })}
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #c7c7c7;
`;

const BoxContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.h1`
  text-transform: uppercase;
  font-size: 25px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  padding-top: 30px;
  margin-block-start: 0em;
  margin-block-end: 1em;
`;

const ArticleName = styled.p`
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: #ed9c00;
    transition: 0.3s ease-in-out;
  }
`;

const ArticleCategory = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: #6c6c6c;
  margin-bottom: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default ProfileFeed;
