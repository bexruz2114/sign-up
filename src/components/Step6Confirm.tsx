import { User, Lock, Link2, MapPin, Code } from 'lucide-react';

interface Step6ConfirmProps {
  formData: {
    role: string;
    username: string;
    suffix: string;
    connectedAccounts: string[];
    profileImage: string | null;
    bio: string;
    location: string;
    skills: string;
  };
}

export default function Step6Confirm({ formData }: Step6ConfirmProps) {
  const getRoleLabel = (role: string) => {
    return role === 'job_seeker' ? 'Job Seeker' : 'Employer';
  };

  const getAccountLabel = (account: string) => {
    const labels: { [key: string]: string } = {
      github: 'GitHub',
      google: 'Google',
      email: 'Email',
      phone: 'Phone number',
    };
    return labels[account] || account;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-3">Review and Confirm</h1>
        <p className="text-gray-600 text-lg">
          Please review your information before completing registration
        </p>
      </div>

      <div className="bg-white rounded-3xl border-2 border-gray-200 overflow-hidden">
        {formData.profileImage && (
          <div className="flex justify-center pt-8 pb-4">
            <img
              src={formData.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
            />
          </div>
        )}

        <div className="divide-y divide-gray-200">
          <div className="px-8 py-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 rounded-xl">
                <User className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Role</p>
                <p className="text-lg font-semibold text-black">{getRoleLabel(formData.role)}</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 rounded-xl">
                <User className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Username</p>
                <p className="text-lg font-semibold text-black">
                  {formData.username}
                  {formData.suffix}
                </p>
              </div>
            </div>
          </div>

          <div className="px-8 py-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 rounded-xl">
                <Lock className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Password</p>
                <p className="text-lg font-semibold text-black">••••••••</p>
              </div>
            </div>
          </div>

          {formData.connectedAccounts.length > 0 && (
            <div className="px-8 py-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <Link2 className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">Connected Accounts</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.connectedAccounts.map((account) => (
                      <span
                        key={account}
                        className="px-3 py-1 bg-black text-white text-sm font-medium rounded-full"
                      >
                        {getAccountLabel(account)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {formData.bio && (
            <div className="px-8 py-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <User className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Bio</p>
                  <p className="text-base text-black">{formData.bio}</p>
                </div>
              </div>
            </div>
          )}

          {formData.location && (
            <div className="px-8 py-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="text-lg font-semibold text-black">{formData.location}</p>
                </div>
              </div>
            </div>
          )}

          {formData.skills && (
            <div className="px-8 py-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <Code className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Skills</p>
                  <p className="text-lg font-semibold text-black">{formData.skills}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
