import clsx from 'clsx';

export default function Button(props) {
    const { className = 'bg-black', children, text } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                '${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 inline-flex whitespace-nowrap items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded'
            )}>
            {text || children}
        </button>
    );
}
