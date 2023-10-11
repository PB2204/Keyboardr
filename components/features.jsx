import { FaKeyboard, FaMagic, FaLightbulb, FaGlobe } from "react-icons/fa";

function Features() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Features</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center">
            <FaKeyboard size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mechanical Keys
            </h3>
            <p className="text-gray-600 text-center">
              Enjoy a tactile typing experience with our high-quality mechanical
              keys.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaMagic size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customizable RGB Lighting
            </h3>
            <p className="text-gray-600 text-center">
              Personalize your keyboard with our customizable RGB lighting
              options.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaLightbulb size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ergonomic Design
            </h3>
            <p className="text-gray-600 text-center">
              Our keyboards are designed to provide maximum comfort and reduce
              strain on your hands and wrists.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaGlobe size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Multiple Language Support
            </h3>
            <p className="text-gray-600 text-center">
              Our keyboards support multiple languages, making them perfect for
              international users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Features };
