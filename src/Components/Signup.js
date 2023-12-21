function Signup() {
  return (
    <div className="bg-[url(images/registration.jpg)] py-20 flex flex-col items-center bg-no-repeat bg-cover  bg-local">
      <h1 className="text-center text-gray-100 md:text-5xl text-3xl font-semibold italic pb-10 mb-10">
        Registration Form
      </h1>
      <div className="border-2 border-gray-600 mx-2 p-5">
        <div className="mx-auto text-center">
          <label typeof="string" className="text-white px-1 text-2xl">
            Name:
          </label>
          <input
            type="string"
            className="border border-gray-400 text-white px-4 bg-transparent  py-2 mx-3 my-3 py-2 rounded w-[200px] md:w-[500px]"
            placeholder="Enter your name"
          ></input>
        </div>
        <div className="mx-auto text-center">
          <label typeof="string" className="text-white px-1 text-2xl">
            Phone:
          </label>
          <input
            type="string"
            className="border border-gray-400 bg-transparent px-3 text-white py-2 mx-3 my-3 py-2 rounded w-[200px] md:w-[500px]"
            placeholder="Enter your phone number"
          ></input>
        </div>
        <div className="mx-auto text-center">
          <label typeof="string" className="text-white px-1 text-2xl">
            Email:
          </label>
          <input
            type="string"
            className="border border-gray-400 bg-transparent px-3 text-white py-2 mx-3 my-3 py-2 rounded w-[200px] md:w-[500px]"
            placeholder="Enter your Email ID"
          ></input>
        </div>
        <div className="mx-auto text-center">
          <label typeof="string" className="text-white px-1 text-2xl">
            Age...:
          </label>
          <input
            type="number"
            className="border border-gray-400 bg-transparent px-3 text-white py-2 mx-3 my-3 rounded w-[200px] md:w-[500px]"
            placeholder="Enter your Age"
          ></input>
        </div>

        <button className=" w-full my-4 text-black font-bold bg-amber-300 shadow-lg shadow-amber-600 hover:bg-amber-100 hover:duration-500 hover:shadow-amber-400 hover:shadow-xl px-6 py-2 rounded-full text-center mx-auto">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Signup;
