// ProductTag.jsx (src)

export default function ProductTag(props) {
  return(
    <div className={`${props.class} tag`}>{props.tag}</div>
  );
}