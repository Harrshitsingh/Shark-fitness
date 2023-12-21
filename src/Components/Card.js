function Card(props) {
  return (
    <div className="">
      <div className="border-2 border-amber-300 w-[350px] shadow-lg shadow-amber-300">
        <img src={props.img} className="w-[350px] h-[350px]" alt="" />
        <h1 className="text-white text-center py-3 text-3xl underline decoration-2">
          {props.heading}
        </h1>
        <p className="text-white text-base px-3 text-center pb-5">
          {props.para}
        </p>
      </div>
    </div>
  );
}

export default Card;
