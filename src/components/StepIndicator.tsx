interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => (
          <div key={step} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  step <= currentStep
                    ? 'bg-black text-white'
                    : 'bg-white border-2 border-gray-300 text-gray-400'
                }`}
              >
                {step}
              </div>
              <span
                className={`text-xs mt-2 font-medium transition-all duration-300 ${
                  step === currentStep ? 'text-black' : 'text-gray-400'
                }`}
              >
                Step {step}
              </span>
            </div>
            {index < totalSteps - 1 && (
              <div className="flex-1 h-0.5 mx-2 mb-6">
                <div
                  className={`h-full transition-all duration-300 ${
                    step < currentStep ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
