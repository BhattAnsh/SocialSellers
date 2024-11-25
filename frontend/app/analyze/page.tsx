// "use client";
// import { useState } from "react";
// import Image from "next/image";

// interface ProductAnalysis {
//   metadata: {
//     asin: string;
//     availability: string;
//     category: string;
//     brand: string;
//   };
//   product_details: {
//     title: string;
//     price: string;
//     attributes: string[];
//     materials: string;
//     colors: string;
//     target_audience: string;
//     benefits: string;
//     description: string;
//   };
//   dimensions: {
//     height: string;
//     width: string;
//     length: string;
//     unit: string;
//   };
//   item_weight: {
//     value: string;
//     unit: string;
//   };
//   additional_info: {
//     warranty: string;
//   };
// }

// export default function AnalyzePage() {
//   const [postUrl, setPostUrl] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [step, setStep] = useState(1);
//   const [analysis, setAnalysis] = useState<ProductAnalysis | null>(null);
//   const [loading, setLoading] = useState(false);

//   const steps = [
//     { number: 1, title: "Analyze" },
//     { number: 2, title: "Edit Details" },
//     { number: 3, title: "Preview" },
//   ];

//   const handleAnalyze = async () => {
//     try {
//       setError(null);
//       setLoading(true);
      
//         const response = await fetch('https://combined-api-production.up.railway.app/twitter-data', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ tweet_url: postUrl }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch data from API');
//         }

//         const data = await response.json();
//         setAnalysis(data);
//         setStep(2);
//     } catch (error) {
//       setError("Failed to analyze the URL. Please try again.");
//       console.error('API Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderStep1 = () => (
//     <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
//       <input
//         type="text"
//         value={postUrl}
//         onChange={(e) => setPostUrl(e.target.value)}
//         placeholder="Enter post URL"
//         className="w-full p-3 border rounded-lg mb-4"
//       />
//       <button
//         onClick={handleAnalyze}
//         disabled={loading}
//         className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//       >
//         {loading ? "Analyzing..." : "Analyze"}
//       </button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );

//   const renderStep2 = () => (
//     <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
//       <div className="space-y-6">
//         {/* Product Photos Section */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4">Product Photos</h2>
//           <div className="border-2 border-dashed border-gray-300 rounded-lg w-32 h-32 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
//             <span className="text-gray-500">+ Add Photo</span>
//           </div>
//         </div>

//         {/* Title and Price Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Title
//             </label>
//             <input
//               type="text"
//               value={analysis?.product_details.title || "Moto Edge 30 Pro 5G Smartphone"}
//               onChange={(e) => setAnalysis(analysis ? {
//                 ...analysis,
//                 product_details: { ...analysis.product_details, title: e.target.value }
//               } : null)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Price
//             </label>
//             <input
//               type="text"
//               value={analysis?.product_details.price || "$699.99"}
//               onChange={(e) => setAnalysis(analysis ? {
//                 ...analysis,
//                 product_details: { ...analysis.product_details, price: e.target.value }
//               } : null)}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         </div>

//         {/* Description Section */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Description
//           </label>
//           <textarea
//             value={analysis?.product_details.description || "Experience the next generation of mobile technology with this powerful smartphone. Features include a stunning 6.7-inch OLED display, advanced 108MP camera system, and 5G connectivity for ultra-fast data speeds. The large 5000mAh battery with 30W fast charging keeps you powered throughout your day."}
//             onChange={(e) => setAnalysis(analysis ? {
//               ...analysis,
//               product_details: { ...analysis.product_details, description: e.target.value }
//             } : null)}
//             rows={4}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-end space-x-4 pt-4">
//           <button
//             onClick={() => setStep(1)}
//             className="px-6 py-2 border rounded-lg hover:bg-gray-50"
//           >
//             Back
//           </button>
//           <button
//             onClick={() => setStep(3)}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Preview
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderStep3 = () => (
//     <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Preview</h2>
      
//       <h1 className="text-3xl font-bold mb-2">{analysis?.product_details.title}</h1>
//       <p className="text-blue-600 text-2xl mb-6">${analysis?.product_details.price}</p>
      
//       <h3 className="text-xl font-bold mb-2">Description</h3>
//       <p className="mb-6">{analysis?.product_details.description}</p>
      
//       <h3 className="text-xl font-bold mb-2">Specifications</h3>
//       <ul className="list-disc pl-6 mb-8">
//         {analysis?.product_details.attributes.map((attr, index) => (
//           <li key={index} className="mb-2">{attr}</li>
//         ))}
//       </ul>

//       <div className="flex justify-end space-x-4">
//         <button
//           onClick={() => setStep(2)}
//           className="px-6 py-2 border rounded-lg hover:bg-gray-50"
//         >
//           Edit
//         </button>
//         <button
//           className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//         >
//           Publish
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 pt-20">
//       <div className="container max-w-7xl">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
//           Create Product Listing
//         </h1>

//         {/* Progress Steps */}
//         <div className="flex justify-center items-center mb-12">
//           {steps.map((s, index) => (
//             <div key={s.number} className="flex items-center">
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 step >= s.number 
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}>
//                 {s.number}
//               </div>
//               {index < steps.length - 1 && (
//                 <div className={`w-24 h-[2px] ${
//                   step > index + 1 ? "bg-blue-600" : "bg-gray-200"
//                 }`}></div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Steps Content */}
//         {step === 1 && renderStep1()}
//         {step === 2 && renderStep2()}
//         {step === 3 && renderStep3()}
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductAnalysis {
  metadata: {
    asin: string;
    availability: string;
    category: string;
    brand: string;
  };
  product_details: {
    title: string;
    price: string;
    attributes: string[];
    materials: string;
    colors: string;
    target_audience: string;
    benefits: string;
    description: string;
  };
  dimensions: {
    height: string;
    width: string;
    length: string;
    unit: string;
  };
  item_weight: {
    value: string;
    unit: string;
  };
  additional_info: {
    warranty: string;
  };
}

const dummyData: ProductAnalysis = {
  metadata: {
    asin: "DefaultASIN",
    availability: "In Stock",
    category: "Chair",
    brand: "ErgoCo"
  },
  product_details: {
    title: "Ergonomic Office Chair",
    price: "USD 199.99",
    attributes: ["Black", "Ergonomic", "Adjustable"],
    materials: "Black, Ergonomic, Adjustable",
    colors: "Black",
    target_audience: "Office workers",
    benefits: "Enhanced comfort and improved posture",
    description: "Ergonomic Office Chair is an excellent Chair available at USD 199.99. It features high-quality materials such as Black, Ergonomic, Adjustable and comes in Black. It is designed for Office workers, offering benefits like Enhanced comfort and improved posture. Dimensions: 120 cm x 60 cm x 60 cm. Weight: 15 kg."
  },
  dimensions: {
    height: "120",
    width: "60",
    length: "60",
    unit: "cm"
  },
  item_weight: {
    value: "15",
    unit: "kg"
  },
  additional_info: {
    warranty: "Warranty not provided"
  }
};

export default function AnalyzePage() {
  const [postUrl, setPostUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [analysis, setAnalysis] = useState<ProductAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const steps = [
    { number: 1, title: "Analyze" },
    { number: 2, title: "Edit Details" },
    { number: 3, title: "Preview" },
  ];

  const handleAnalyze = async () => {
    try {
      setError(null);
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (postUrl.includes("x.com") || postUrl.includes("twitter.com") || postUrl.includes("instagram.com")) {
        setAnalysis(dummyData);
        setStep(2);
      } else {
        setError("Failed to analyze the URL. Please try again.");
      }
    } catch (error) {
      setError("Failed to analyze the URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <input
        type="text"
        value={postUrl}
        onChange={(e) => setPostUrl(e.target.value)}
        placeholder="Enter post URL"
        className="w-full p-3 border rounded-lg mb-4"
      />
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );

  const renderStep2 = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <div className="space-y-6">
        {/* Product Photos Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Product Photos</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-32 h-32 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
            <span className="text-gray-500">+ Add Photo</span>
          </div>
        </div>

        {/* Title and Price Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={analysis?.product_details.title || "Moto Edge 30 Pro 5G Smartphone"}
              onChange={(e) => setAnalysis(analysis ? {
                ...analysis,
                product_details: { ...analysis.product_details, title: e.target.value }
              } : null)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="text"
              value={analysis?.product_details.price || "$699.99"}
              onChange={(e) => setAnalysis(analysis ? {
                ...analysis,
                product_details: { ...analysis.product_details, price: e.target.value }
              } : null)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Description Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={analysis?.product_details.description || "Experience the next generation of mobile technology with this powerful smartphone. Features include a stunning 6.7-inch OLED display, advanced 108MP camera system, and 5G connectivity for ultra-fast data speeds. The large 5000mAh battery with 30W fast charging keeps you powered throughout your day."}
            onChange={(e) => setAnalysis(analysis ? {
              ...analysis,
              product_details: { ...analysis.product_details, description: e.target.value }
            } : null)}
            rows={4}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            onClick={() => setStep(1)}
            className="px-6 py-2 border rounded-lg hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={() => setStep(3)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Preview</h2>
      
      <h1 className="text-3xl font-bold mb-2">{analysis?.product_details.title}</h1>
      <p className="text-blue-600 text-2xl mb-6">${analysis?.product_details.price}</p>
      
      <h3 className="text-xl font-bold mb-2">Description</h3>
      <p className="mb-6">{analysis?.product_details.description}</p>
      
      <h3 className="text-xl font-bold mb-2">Specifications</h3>
      <ul className="list-disc pl-6 mb-8">
        {analysis?.product_details.attributes.map((attr, index) => (
          <li key={index} className="mb-2">{attr}</li>
        ))}
      </ul>

      <div className="flex justify-end space-x-4">
        <button
          onClick={() => setStep(2)}
          className="px-6 py-2 border rounded-lg hover:bg-gray-50"
        >
          Edit
        </button>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Publish
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container max-w-7xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Create Product Listing
        </h1>

        {/* Progress Steps */}
        <div className="flex justify-center items-center mb-12">
          {steps.map((s, index) => (
            <div key={s.number} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= s.number 
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}>
                {s.number}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-24 h-[2px] ${
                  step > index + 1 ? "bg-blue-600" : "bg-gray-200"
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Steps Content */}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </div>
  )
}