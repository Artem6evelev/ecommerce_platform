import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>ShopNow</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
