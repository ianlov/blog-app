import {
  imgStyling,
  containerStyling,
  subContainerStyling,
  exContainerStyling,
} from "./style";

const ProductCard = ({ img, title, date, author }) => {
  return (
    <div style={containerStyling}>
      <img src={img} style={imgStyling} />
      <div style={subContainerStyling}>
        <div style={exContainerStyling}>
          <div>{title}</div>
          <div>{date}</div>
        </div>
        <div>{content}</div>
        <div>By {author}</div>
      </div>
    </div>
  );
};

export default ProductCard;
