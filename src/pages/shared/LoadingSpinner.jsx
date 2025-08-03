export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-600 border-t-purple-400 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-700 border-t-purple-300 rounded-full animate-spin animate-reverse"></div>
                </div>
            </div>
        </div>
    )
}