import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center px-4">
            <div className="text-center space-y-6">
                <h1 className="text-8xl font-extrabold text-primary">404</h1>

                <h2 className="text-2xl md:text-3xl font-semibold">
                    Oops! Page not found
                </h2>
                <p className="text-base-content/70 max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/" className="btn btn-primary">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
