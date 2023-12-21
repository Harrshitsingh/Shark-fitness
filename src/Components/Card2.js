function Card2(props) {
  return (
    <div className="border-4 md:h-[370px] h-[270px] border-white text-white mt-5 mb-5 md:w-[300px] w-[160px]">
      <img
        src={props.img}
        className="h-[200px] md:h-[300px]  md:w-[300px]"
        alt=""
      />
      <h1 className="md:text-4xl text-2xl text-center py-2">{props.city}</h1>
    </div>
  );
}

export default Card2;
