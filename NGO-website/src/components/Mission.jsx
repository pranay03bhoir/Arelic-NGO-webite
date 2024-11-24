const Mission = () => {
  const commonClasses =
    " mt-14 text-2xl gap-24 justify-center mx-auto lg:w-[80%] rounded-lg border-4 p-[2%] shadow-2xl flex md:flex-row";
  return (
    <>
      <div
        className={`flex items-center justify-center h-80 bg-fixed bg-parallax bg-cover`}
      >
        <h1 className={`text-6xl text-center underline decoration-amber-500 `}>
          OUR MISSION
        </h1>
      </div>
      <div>
        <h1
          className={`lg:text-2xl font-light md:px-[10%] text-center mt-14 md:mt-20 text-lg px-5`}
        >
          adipiscing veri iaculis pretium laudem tota saepe scripserit iisque
          ullamcorper tritani quaerendum conclusionemque delenit civibus an
          ipsum ornatus persequeris epicuri sapien quaerendum ac euismod cum
          mandamus utroque dolorum interpretaris justo libris postea porro mi
          quod sodales dolorum error nisi causae proin ornare recteque turpis
          nullam enim dicit voluptaria tempus no sententiae fugit tractatos
          aliquam ultricies sententiae vestibulum sollicitudin netus doctus
          tamquam taciti tortor dicunt appareat aliquip placerat luptatum montes
          habemus morbi ultrices salutatus est voluptaria persecuti est percipit
          ludus periculis vivamus definiebas quod vitae gloriatur labores elitr
          penatibus legere quidam libero tincidunt verear aeque tincidunt turpis
          praesent netus neglegentur solum
        </h1>
      </div>
      <div className={` ${commonClasses}  w-[90%] h-fit flex-col border-white`}>
        <div className={`flex flex-col gap-10 text-center `}>
          <i className="fa-solid fa-school text-6xl text-indigo-500"></i>
          <h1 className={`inline`}>Promote education</h1>
          <p className={`text-xl text-center font-light`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
        <div className={`flex flex-col gap-10 text-center`}>
          <i className="fa-solid fa-house-medical text-6xl text-red-500"></i>
          <h1>Promote health</h1>
          <p className={`text-xl text-center font-light`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
        <div className={`flex flex-col gap-10 text-center`}>
          <i className="fa-solid fa-bowl-food text-6xl text-green-500"></i>
          <h1>Promote Food</h1>
          <p className={`text-xl text-center font-light`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
