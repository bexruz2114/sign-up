import { useState } from 'react';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import StepIndicator from './StepIndicator';
import Step1Role from './Step1Role';
import Step2Username from './Step2Username';
import Step3Accounts from './Step3Accounts';
import Step4Password from './Step4Password';
import Step5Profile from './Step5Profile';
import Step6Confirm from './Step6Confirm';

export default function SignupFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const [formData, setFormData] = useState({
    role: '',
    username: '',
    suffix: '_dev',
    connectedAccounts: [] as string[],
    password: '',
    profileImage: null as string | null,
    bio: '',
    location: '',
    skills: '',
  });

  const validatePassword = (password: string) => {
    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasLength && hasUppercase && hasNumberOrSymbol;
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.role !== '';
      case 2:
        return formData.username.trim() !== '';
      case 3:
        return true;
      case 4:
        return validatePassword(formData.password);
      case 5:
        return true;
      case 6:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Role
            selectedRole={formData.role}
            onRoleSelect={(role) => setFormData({ ...formData, role })}
          />
        );
      case 2:
        return (
          <Step2Username
            username={formData.username}
            suffix={formData.suffix}
            onUsernameChange={(username) => setFormData({ ...formData, username })}
            onSuffixChange={(suffix) => setFormData({ ...formData, suffix })}
          />
        );
      case 3:
        return (
          <Step3Accounts
            connectedAccounts={formData.connectedAccounts}
            onToggleAccount={(account) => {
              const accounts = formData.connectedAccounts.includes(account)
                ? formData.connectedAccounts.filter((a) => a !== account)
                : [...formData.connectedAccounts, account];
              setFormData({ ...formData, connectedAccounts: accounts });
            }}
          />
        );
      case 4:
        return (
          <Step4Password
            password={formData.password}
            onPasswordChange={(password) => setFormData({ ...formData, password })}
          />
        );
      case 5:
        return (
          <Step5Profile
            profileImage={formData.profileImage}
            bio={formData.bio}
            location={formData.location}
            skills={formData.skills}
            onProfileImageChange={(profileImage) => setFormData({ ...formData, profileImage })}
            onBioChange={(bio) => setFormData({ ...formData, bio })}
            onLocationChange={(location) => setFormData({ ...formData, location })}
            onSkillsChange={(skills) => setFormData({ ...formData, skills })}
          />
        );
      case 6:
        return <Step6Confirm formData={formData} />;
      default:
        return null;
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-black rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">Profile created successfully!</h1>
          <p className="text-xl text-gray-600 mb-8">Welcome to DevConnect.</p>
          <button
            onClick={() => {
              setIsCompleted(false);
              setCurrentStep(1);
              setFormData({
                role: '',
                username: '',
                suffix: '_dev',
                connectedAccounts: [],
                password: '',
                profileImage: null,
                bio: '',
                location: '',
                skills: '',
              });
            }}
            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Create Another Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <StepIndicator currentStep={currentStep} totalSteps={6} />

        <div className="mb-8">{renderStep()}</div>

        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white border-2 border-gray-300 text-black hover:border-black'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              canProceed()
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentStep === 6 ? 'Confirm & Create Profile' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
