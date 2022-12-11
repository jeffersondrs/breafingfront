import "./text.styles.scss";

export default function TextArea(options) {
    return (
        <>
        <textarea
            className="text-area w-full h-6full bg-black/50 text-white p-3 m-1 rounded-sm"
            placeholder={options.placeholder}
            value={options.value}
            maxLength={options.maxLength}
            onChange={options.onChange}
            maxHeight={options.maxHeight}
            rows={options.rows}
            id={options.id}
        />
        </>
    );
}