import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandTwitter,
} from '@tabler/icons';
import clsx from 'clsx';

export default function App() {
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className={'flex gap-x-2 place-content-center-center'}>
                <Button onClick={() => console.log('twitter')}>
                    <IconBrandTwitter /> Login
                </Button>
                <Button
                    className={'bg-sky-600'}
                    onClick={() => console.log('facebook')}
                >
                    <IconBrandFacebook /> Login
                </Button>
                <Button
                    className={'bg-black'}
                    onClick={() => console.log('github')}
                >
                    <IconBrandGithub /> Login
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-blue-600', children, text } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                '${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
