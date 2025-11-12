import { Briefcase, Users } from 'lucide-react';

interface Step1RoleProps {
  selectedRole: string;
  onRoleSelect: (role: string) => void;
}

export default function Step1Role({ selectedRole, onRoleSelect }: Step1RoleProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-3">Select your role</h1>
        <p className="text-gray-600 text-lg">Choose the option that best describes you</p>
      </div>

      {/* Bu joyni flex qilib o‘zgartirdik */}
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => onRoleSelect('job_seeker')}
          className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
            selectedRole === 'job_seeker'
              ? 'border-black bg-black text-white'
              : 'border-gray-300 bg-white text-black hover:border-gray-400'
          }`}
        >
          <div className="flex items-start space-x-4">
            <div
              className={`p-3 rounded-xl ${
                selectedRole === 'job_seeker' ? 'bg-white' : 'bg-gray-100'
              }`}
            >
              <Users
                className={`w-6 h-6 ${
                  selectedRole === 'job_seeker' ? 'text-black' : 'text-gray-700'
                }`}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">I'm a Job Seeker</h3>
              <p
                className={`text-sm ${
                  selectedRole === 'job_seeker' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Looking for development opportunities and ready to showcase my skills.
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onRoleSelect('employer')}
          className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
            selectedRole === 'employer'
              ? 'border-black bg-black text-white'
              : 'border-gray-300 bg-white text-black hover:border-gray-400'
          }`}
        >
          <div className="flex items-start space-x-4">
            <div
              className={`p-3 rounded-xl ${
                selectedRole === 'employer' ? 'bg-white' : 'bg-gray-100'
              }`}
            >
              <Briefcase
                className={`w-6 h-6 ${
                  selectedRole === 'employer' ? 'text-black' : 'text-gray-700'
                }`}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">I'm an Employer</h3>
              <p
                className={`text-sm ${
                  selectedRole === 'employer' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Searching for talented developers to join my team.
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
