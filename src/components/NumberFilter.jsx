import React, { useState } from 'react';

const NumberFilter = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
const num = parseInt(inputValue);
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Number Filter
      </h2>
      
      <div className="space-y-6">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number (e.g., 10)"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                   transition-all duration-200 outline-none text-lg
                   placeholder-gray-400"
        />
        
        <div className="flex gap-3">
          <button
            onClick={() => {
              
    const oddNumbers = [];
    for (let i = 1; i <= num; i++) {
      if (i % 2 !== 0)
      oddNumbers.push(i);
    }
    setResult(oddNumbers.join(', '));
  }
            }
            className="flex-1 py-3 px-4 bg-purple-500 hover:bg-purple-600 
                     text-white font-semibold rounded-xl transition-all 
                     duration-200 transform hover:-translate-y-1 
                     hover:shadow-lg active:translate-y-0
                     focus:outline-none focus:ring-2 focus:ring-red-300 
                     focus:ring-opacity-50 uppercase tracking-wide"
          >
            Odd Numbers
          </button>
          
          <button
            onClick={() => {
          
    const evenNumbers = [];
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0)
      evenNumbers.push(i);
    }
    setResult(evenNumbers.join(', '));
            }}
            className="flex-1 py-3 px-4 bg-green-500 hover:bg-green-600 
                     text-white font-semibold rounded-xl transition-all 
                     duration-200 transform hover:-translate-y-1 
                     hover:shadow-lg active:translate-y-0
                     focus:outline-none focus:ring-2 focus:ring-green-300 
                     focus:ring-opacity-50 uppercase tracking-wide"
          >
            Even Numbers
          </button>
        </div>
        
        <div className="p-5 bg-gray-50 rounded-xl border-2 border-gray-200 
                      min-h-20 shadow-inner">
          <p className="text-gray-700 text-lg">
            <strong className="text-gray-800">Result: </strong>
            {result || 'Enter a number and click a button above...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumberFilter;