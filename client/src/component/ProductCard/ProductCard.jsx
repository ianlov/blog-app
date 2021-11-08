import {
  imgStyling,
  containerStyling,
  subContainerStyling,
  exContainerStyling,
} from "./style";

const ProductCard = () => {
  return (
    <div style={containerStyling}>
      <img
        src="https://images.unsplash.com/photo-1635967453256-fd9e2d19f386?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
        style={imgStyling}
      />
      <div style={subContainerStyling}>
        <div style={exContainerStyling}>
          <div>Example</div>
          <div>12/12/2021</div>
        </div>
        <div>Lorem ipsum dolor sit amet</div>
        <div>By Poopoopeepee</div>
      </div>
    </div>
  );
};

export default ProductCard;
