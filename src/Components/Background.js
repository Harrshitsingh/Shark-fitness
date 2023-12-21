import Card from "../Components/Card.js";

function Background() {
  return (
    <div className="bg-black mb-20 pb-20">
      <section
        className=" bg-fixed bg-zinc-700  bg-[url('images/homnepage.jpg')] bg-no-repeat bg-cover opacity-100 "
        style={{ backgroundBlendMode: "hard-light" }}
      >
        <div className="flex justify-center flex-col items-center pt-40 pb-36 md:pt-40 md:pb-32 h-[50%] lg:pb-64 p-2 md:p-4">
          <h1 className="text-3xl md:text-4xl shadow-xl  my-1 lg:text-5xl text-white  ">
            <span className="shadow-xl font-bold text-4xl lg:text-6xl text-amber-400">
              W
            </span>
            elcome to Shark Fitness.
          </h1>
          <h1 className="md:text-2xl px-4 text-xl shadow-xl lg:text-3xl text-center my-1 text-white  ">
            <span className=" shadow-xl font-bold md:text-5xl text-4xl lg:text-4xl text-cyan-500">
              S
            </span>
            hark fitness is here to develop the body you deserve.
          </h1>
        </div>

        <div className="flex gap-10 flex-col justify-center items-center xl:flex-row flex xl:flex-wrap xl:gap-20">
          <div className="flex flex-col gap-10 xl:gap-20 md:flex-row">
            <Card
              img="images/benchpress.webp"
              heading=" Weight Training"
              para="Weight training involves using some type of resistance to do exercises
          that challenge all the muscle groups of the body, including the chest,
          back, shoulders, arms (biceps, triceps), core, legs (quadriceps,
          hamstrings, calves) and glutes."
            />
            <Card
              img="images\treadmill.jpg"
              heading="Cardio"
              para="Cardiovascular exercise is exercise that gets your heart rate up. Though some people use it solely for weight loss, cardio has other benefits as well. There are a wide variety of cardiovascular exercises, but consistency, duration, and intensity are the most important factors for meeting your fitness goals. "
            />
          </div>

          <div className="flex flex-col gap-10 xl:gap-20 md:flex-row">
            <Card
              img="images/calisthenics.jpg"
              heading="Calisthenics"
              para="Calisthenics were developed in ancient Greece and became popular again in the early 19th century. Today, fitness training athletes, military personnel, law enforcement officers, and people trying to keep in shape use these exercises for warming up for strenuous sports or to help build up their bodies."
            />
            <Card
              heading="Yoga"
              img="images/yoga.jpg"
              para="oga-like practices were first mentioned in the ancient Hindu text known as Rigveda.[7] Yoga is referred to in a number of the Upanishads.[8][9][10] The first known appearance of the word 
            yoga with the same meaning as the modern term is in the Katha Upanishad,[11][12] which was probably composed between the fifth and third centuries BCE."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Background;
