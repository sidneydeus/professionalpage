import useSwr from 'swr';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Repos() {
    const { data, error } = useSwr('https://api.github.com/users/sidneydeus/repos', fetcher);

    if (error) return <div>Failed to load repos</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 divide-x">
            {data.map((repo) => (
                <div className="block bg-gray-500 m-1 p-4 text-center" key={repo.id}>
                    <Link href={repo.html_url}>
                        <a target="_blank">
                            {`Repo ${repo.name}`}
                            <div className="ml-2 w-5 inline-block">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}
