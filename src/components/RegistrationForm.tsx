import React, { useState } from 'react';

const carModels = [
  'Tata Nexon EV',
  'Hyundai Kona Electric',
  'MG ZS EV',
  'BYD E6',
  'Mahindra XUV400'
];

const chargingSpecs = [
  'AC Slow',
  'AC Fast',
  'DC Fast',
  'Ultra-Fast'
];

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [carModel, setCarModel] = useState('');
  const [chargingSpec, setChargingSpec] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !carNumber || !carModel || !chargingSpec) {
      setMessage('⚠️ Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          carNumber,
          carModel,
          chargingSpecs: chargingSpec
        })
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ ' + result.message);
        setName('');
        setCarNumber('');
        setCarModel('');
        setChargingSpec('');
      } else {
        setMessage('❌ ' + result.error);
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to register. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full animate-slide-up"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">EV Registration</h2>

      {/* Owner Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Owner Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      {/* Car Number */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Car Number</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={carNumber}
          onChange={(e) => setCarNumber(e.target.value)}
          placeholder="e.g. MH12AB1234"
        />
      </div>

      {/* Car Model */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Car Model</label>
        <select
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        >
          <option value="">-- Select Car Model --</option>
          {carModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      {/* Charging Specification */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Charging Specification</label>
        <select
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={chargingSpec}
          onChange={(e) => setChargingSpec(e.target.value)}
        >
          <option value="">-- Select Charging Spec --</option>
          {chargingSpecs.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded"
      >
        Register
      </button>

      {message && (
        <p className="mt-4 text-center text-sm text-red-600">{message}</p>
      )}
    </form>
  );
};

export default RegistrationForm;
