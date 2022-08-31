import styled from "styled-components";

const ArticleCard = ({ image, title, category, smallText, authors }) => {
  console.log("small text", authors && authors);
  return (
    <Container>
      <Image image={image} />
      <ArticleInfo>
        <Title>
          {title && title.length >= 50 ? title.slice(0, 50) + " ..." : title}
        </Title>
        <Credits authors={authors} />
        <CategoryTag>
          {category && category.charAt(0).toUpperCase() + category.slice(1)}
        </CategoryTag>
      </ArticleInfo>
    </Container>
  );
};

const Credits = ({ authors }) => {
  if (authors.length > 1) {
    return (
      <ShortText>{"By " + authors[0] + ", " + authors[1] + ", ..."}</ShortText>
    );
  } else if (authors.length <= 1) {
    return <ShortText>{"By " + authors}</ShortText>;
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
`;

const ShortText = styled.p`
  color: #6c6c6c;
  font-size: 16px;
  line-height: 25px;
  margin-top: 10px;
`;

const CategoryTag = styled.div`
  text-align: center;
  max-width: 30%;
  color: white;
  background-color: #ed9c00;
  border-radius: 50px;
  margin-top: 15px;
`;

export default ArticleCard;
