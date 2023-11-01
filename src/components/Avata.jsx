// Avata.jsx (src)

export default function Avata({image, isNew}) {
  return (
    <>
      <img src={image} className="img" alt=""/>
      { isNew && <span className="new">New!</span> }
      {/* { isNew ? <span className="new">New</span> : null } */}
    </>
  );
}