import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ image, title, category, smallText, authors, id }) => {
  const navigate = useNavigate();
  const checkHandler = (e) => {
    navigate(`/article/${id}`);
  };
  return (
    <div>
      <Container onClick={checkHandler}>
        <Image image={image} />
        <ArticleInfo>
          <Title>
            {title && title.length >= 50 ? title.slice(0, 50) + " ..." : title}
          </Title>
          <Credits authors={authors} />
        </ArticleInfo>
      </Container>
      <Category category={category} />
    </div>
  );
};

const Credits = ({ authors }) => {
  if (authors && authors.length > 1) {
    return (
      <ShortText>{"By " + authors[0] + ", " + authors[1] + ", ..."}</ShortText>
    );
  } else if (authors && authors.length <= 1) {
    return <ShortText>{"By " + authors}</ShortText>;
  }
};

const Category = ({ category }) => {
  if (category && category === "personal-development") {
    const articleCateogry = "Personal development";
    return <CategoryTag>{articleCateogry}</CategoryTag>;
  }
  if (category && category === "life-tip") {
    const articleCateogry = "Life tips";
    return <CategoryTag>{articleCateogry}</CategoryTag>;
  }
  if (category && category === "personal-story") {
    const articleCateogry = "Personal story";
    return <CategoryTag>{articleCateogry}</CategoryTag>;
  } else {
    return (
      <div>
        <CategoryTag>
          {category && category.charAt(0).toUpperCase() + category.slice(1)}
        </CategoryTag>
      </div>
    );
  }
};

const Container = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  height: 190px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
  &:hover {
    cursor: pointer;
  }
`;

const ArticleInfo = styled.div`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  &:hover {
    cursor: pointer;
    color: #6c6c6c;
  }
`;

const ShortText = styled.p`
  color: #6c6c6c;
  font-size: 16px;
  line-height: 25px;
  margin-top: 10px;
`;

const CategoryTag = styled.div`
  font-size: 13px;
  text-align: center;
  padding: 0 15px;
  max-width: 130px;
  color: white;
  background-color: #ed9c00;
  border-radius: 50px;
  margin-top: 15px;
`;

export default ArticleCard;
