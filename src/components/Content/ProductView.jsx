// ProductView.jsx
import ProductImg from "./ProductImg";
import ProductTag from "./ProductTag";

export default function ProductView(props) {
  return(
      <div className="content_inner">
        <ProductImg img={props.img}/>
        <div className="content_info">
          <p>{props.title}</p>
          <div className="price_wrap">
            <span className="price">{props.price}</span>
            <span className="salePrice">{props.salePrice}</span>
          </div>
          <div className="tag_wrap">
          { props.isTag.sale ? <ProductTag tag='세일' class='tag_green'/> : null}
          { props.isTag.coupon ? <ProductTag tag='쿠폰' class='tag_pink'/> : null}
          { props.isTag.service ? <ProductTag tag= '증정' class='tag_blue'/> : null}
          { props.isTag.service ? <ProductTag tag= '오늘드림' class='tag_green'/> : null}
          </div>
        </div>
      </div>
  );
}