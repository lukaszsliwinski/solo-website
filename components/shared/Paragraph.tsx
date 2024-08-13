const Paragraph = ({ header, text }: { header: string; text: string }) => {
  return (
    <div className="m-auto w-4/5 max-w-160">
      <h2 className="text-xl xs:text-3xl xl:text-4xl">{header}</h2>
      <p className="text-sm xs:text-base xl:text-lg mt-6 text-justify">{text}</p>
    </div>
  );
};

export default Paragraph;
