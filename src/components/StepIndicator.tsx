interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => (
          <div key={step} className="flex items-center flex-1 relative">
            {/* Step Circle */}
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 shadow-md ${
                  step < currentStep
                    ? 'bg-black text-white shadow-lg'
                    : step === currentStep
                    ? 'bg-black text-white scale-110 shadow-xl'
                    : 'bg-white border-2 border-gray-300 text-gray-400'
                } hover:scale-110`}
              >
                {step}
              </div>
              <span
                className={`text-xs mt-2 font-medium transition-all duration-300 ${
                  step === currentStep ? 'text-black font-bold' : 'text-gray-400'
                }`}
              >
                Step {step}
              </span>
            </div>

            {/* Progress Bar */}
            {index < totalSteps - 1 && (
              <div className="flex-1 h-1 mx-2 mt-6 bg-gray-300 rounded overflow-hidden">
                <div
                  className={`h-full rounded transition-all duration-500 ${
                    step < currentStep ? 'bg-black' : ''
                  }`}
                  style={{
                    width: step < currentStep ? '100%' : '0%',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
