import './label.styles.scss'
export default function Labels(options) {
  return (
    <>
      <label className="text-violet-800 text-center text-2xl h-1/3 m-3 w-full p-2">{options.text}</label>
    </>
  );
}
