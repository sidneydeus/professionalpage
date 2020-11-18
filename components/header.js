import Image from 'next/image';

export default function Header() {
    return (
        <div className="container mx-auto">
            <div className="bg-gray-800 py-2 px-4 mt-0">
                <div className="block">
                    <div className="inline-block align-middle">
                        <Image
                            src="/img/sidney.jpeg"
                            alt="Picture of the author"
                            className="rounded-full"
                            width="80"
                            height="80"
                        />
                    </div>
                    <div className="inline-block align-middle px-2">
                        <h1 className="text-3xl text-gray-100">Sidney Deus</h1>
                        <h2 className="text-gray-100">WEB Developer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
