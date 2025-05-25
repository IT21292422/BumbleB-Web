export default function DemoSection() {
  return (
    <section
      id="demo"
      className="py-20 bg-gradient-to-br from-green-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Demo & Visualization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience BumbleB in action through our interactive 3D model and
            see the rover's capabilities in our demo video
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 3D Model Section */}
          <div className="bg-white rounded-xl shadow-xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Interactive 3D Model
              </h3>
              <p className="text-gray-600">
                Explore the BumbleB rover in detail with our interactive 3D
                visualization
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-200">
              <iframe
                src={process.env.NEXT_PUBLIC_3D_MODEL_URL}
                className="w-full h-full border-0 margin-0"
                title="BumbleB 3D Model"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Use your mouse to rotate, zoom, and explore the rover's
                components
              </p>
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="bg-white rounded-xl shadow-xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Product Demo Video
              </h3>
              <p className="text-gray-600">
                Explore the journey of solving pollination challenges in
                strawberry farming with our autonomous rover and mobile app.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-200">
              <iframe
                src={process.env.NEXT_PUBLIC_VIDEO_URL}
                className="w-full h-full border-0"
                title="BumbleB Demo Video"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Discover how BumbleB tackles pollination challenges with smart
                automation and a mobile app.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Highlight */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">Computer Vision</h4>
            <p className="text-gray-600">
              Advanced flower detection and recognition using machine learning
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">Gentle Pollination</h4>
            <p className="text-gray-600">
              Precision pollination mechanism that mimics natural bee behavior
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              Mobile App Integration
            </h4>
            <p className="text-gray-600">
              Monitor progress, control operations, and view analytics via a
              dedicated mobile application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
