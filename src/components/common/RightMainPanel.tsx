const RightMainPanel = () => {
  return (
    <div className="flex flex-col items-stretch w-[55%] ml-5">
      <header className="bg-sky-400 flex grow flex-col items-stretch pb-12 pt-12 px-14">
        <div className="flex-col relative flex min-h-[716px] justify-center items-center ml-4 px-16 py-12">
          <img
            loading="lazy"
            srcSet="src/assets/i6.svg"
            className="absolute object-cover object-center min-w-max"
            alt="Cellphone"
          />
          <img
            loading="lazy"
            src="src/assets/play.svg"
            className="absolute object-contain object-center w-15"
            alt="PlayBtn"
          />
        </div>
      </header>
    </div>
  );
};

export default RightMainPanel;
