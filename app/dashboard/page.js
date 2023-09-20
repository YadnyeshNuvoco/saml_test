'client'
import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">SAML TEST APP</h1>
                <p className="text-lg text-gray-400 mb-6">Welcome to the SAML test application. Click below to get started:</p>
                <div className="space-x-4">
                    <Link href="/">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
