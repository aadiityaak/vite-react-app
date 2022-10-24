export default function Input({ type = 'text', ...props }) {
    return (
        <input
            {...props}
            className='border border-slate-300 shadow-sm rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-300'
            type={type}
        />
    );
}
