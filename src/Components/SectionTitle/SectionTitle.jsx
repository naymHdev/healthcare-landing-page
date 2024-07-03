const SectionTitle = ({ btnText, title }) => {
  return (
    <>
      <button className=" px-5 py-2 rounded-full text-[#4D4C7B] border border-[#4D4C7B] ">
        {btnText}
      </button>
      <h3 className=" text-4xl leading-[54px] mt-5">{title}</h3>
    </>
  );
};

export default SectionTitle;
