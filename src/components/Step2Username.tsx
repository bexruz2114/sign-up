import { useState } from 'react';

interface Step2UsernameProps {
  username: string;
  suffix: string;
  onUsernameChange: (username: string) => void;
  onSuffixChange: (suffix: string) => void;
}

export default function Step2Username({
  username,
  suffix,
  onUsernameChange,
  onSuffixChange,
}: Step2UsernameProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-3">Create your username</h1>
        <p className="text-gray-600 text-lg">Choose a unique developer handle</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-semibold text-black mb-2">
            Username
          </label>
          <div
            className={`flex items-center border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
              isFocused ? 'border-black' : 'border-gray-300'
            }`}
          >
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => onUsernameChange(e.target.value.toLowerCase().replace(/\s/g, ''))}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="e.g. jasur"
              className="flex-1 px-5 py-4 text-lg outline-none"
            />
            <select
              value={suffix}
              onChange={(e) => onSuffixChange(e.target.value)}
              className="px-4 py-4 text-lg bg-gray-50 border-l-2 border-gray-300 outline-none cursor-pointer font-medium"
            >
              <option value="_dev">_dev</option>
              <option value=".dev">.dev</option>
            </select>
          </div>
          {username && (
            <p className="mt-3 text-sm text-gray-600">
              Your username will be:{' '}
              <span className="font-semibold text-black">
                {username}
                {suffix}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
