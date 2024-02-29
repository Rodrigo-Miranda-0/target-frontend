const ConfirmationPanel = () => {
  return (
    <div className="flex flex-col mt-40 self-center w-[321px]">
      <img
        loading="lazy"
        src="src/assets/smilies.svg"
        className="aspect-[1.71] object-contain object-center w-[133px] max-w-full self-center"
        alt="Image 2"
      />
      <h2 className="text-black text-xl font-bold tracking-3 mt-4 self-center">
        Yey!
      </h2>
      <p className="text-neutral-800 text-lg font-semibold leading-8 mt-4 self-center">
        Only one more step to start enjoying
      </p>
      <p className="text-neutral-800 text-lg font-semibold leading-8 mt-4 self-center tracking-widest">
        TARGET
      </p>
      <p className="text-neutral-800 text-sm leading-8 mt-7 self-center">
        We’ve sent an email to confirm your account.
      </p>
      <p className="text-neutral-800 text-sm leading-8 self-center">
        Please check your inbox.
      </p>
    </div>
  );
};

export default ConfirmationPanel;
