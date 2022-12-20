import "./text.styles.scss";

export default function TextArea(options) {
    return (
        <>
        <textarea
            className="textarea w-full h-2/3 bg-black/50 text-white p-3 m-1 "
            placeholder={options.placeholder}
            value={options.value}
            maxLength={options.maxLength}
            onChange={options.onChange}
            maxHeight={options.maxHeight}
            rows={options.rows}
            name={options.name}
            id={options.id}
        />
        </>
    );
}