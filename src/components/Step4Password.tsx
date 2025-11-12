import { useState } from 'react';
import { Eye, EyeOff, Check, X } from 'lucide-react';

interface Step4PasswordProps {
  password: string;
  onPasswordChange: (password: string) => void;
}

export default function Step4Password({ password, onPasswordChange }: Step4PasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    numberOrSymbol: /[0-9!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isValid = validations.length && validations.uppercase && validations.numberOrSymbol;

  // Password strength calculation
  const getPasswordStrength = () => {
    const score =
      (validations.length ? 1 : 0) +
      (validations.uppercase ? 1 : 0) +
      (validations.numberOrSymbol ? 1 : 0);

    if (score === 3) return { label: 'Strong', color: 'bg-green-500', width: 'w-full' };
    if (score === 2) return { label: 'Medium', color: 'bg-yellow-500', width: 'w-2/3' };
    if (score === 1) return { label: 'Weak', color: 'bg-red-500', width: 'w-1/3' };
    return { label: 'Very Weak', color: 'bg-gray-300', width: 'w-1/6' };
  };

  const strength = getPasswordStrength();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-3">Create your password</h1>
        <p className="text-gray-600 text-lg">Make your account secure</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-black mb-2">
            Password
          </label>
          <div
            className={`flex items-center border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
              isFocused ? 'border-black' : password && !isValid ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter your password"
              className="flex-1 px-5 py-4 text-lg outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-4 py-4 hover:bg-gray-50 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-600" />
              ) : (
                <Eye className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Password strength bar */}
          {password && (
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Password strength:</span>
                <span className="font-medium text-black">{strength.label}</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-2 rounded-full ${strength.color} ${strength.width} transition-all duration-300`} />
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
          <p className="text-sm font-semibold text-black mb-3">Password requirements:</p>

          <div className="flex items-center space-x-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                validations.length ? 'bg-black' : 'bg-gray-300'
              }`}
            >
              {validations.length ? (
                <Check className="w-3 h-3 text-white" />
              ) : (
                <X className="w-3 h-3 text-gray-500" />
              )}
            </div>
            <span
              className={`text-sm ${
                validations.length ? 'text-black font-medium' : 'text-gray-600'
              }`}
            >
              At least 8 characters
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                validations.uppercase ? 'bg-black' : 'bg-gray-300'
              }`}
            >
              {validations.uppercase ? (
                <Check className="w-3 h-3 text-white" />
              ) : (
                <X className="w-3 h-3 text-gray-500" />
              )}
            </div>
            <span
              className={`text-sm ${
                validations.uppercase ? 'text-black font-medium' : 'text-gray-600'
              }`}
            >
              At least one uppercase letter
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                validations.numberOrSymbol ? 'bg-black' : 'bg-gray-300'
              }`}
            >
              {validations.numberOrSymbol ? (
                <Check className="w-3 h-3 text-white" />
              ) : (
                <X className="w-3 h-3 text-gray-500" />
              )}
            </div>
            <span
              className={`text-sm ${
                validations.numberOrSymbol ? 'text-black font-medium' : 'text-gray-600'
              }`}
            >
              At least one number or symbol
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
