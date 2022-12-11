import "./button.styles.scss";

export default function Button(options) {
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 h-12 m-5">
        {options.text}
      </button>
    </>
  );
}
