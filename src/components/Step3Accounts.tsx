import { Github, Mail, Phone } from 'lucide-react';

interface Step3AccountsProps {
  connectedAccounts: string[];
  onToggleAccount: (account: string) => void;
}

export default function Step3Accounts({
  connectedAccounts,
  onToggleAccount,
}: Step3AccountsProps) {
  const accounts = [
    { id: 'github', name: 'GitHub', icon: Github },
    { id: 'google', name: 'Google', icon: Mail },
    { id: 'email', name: 'Email', icon: Mail },
    { id: 'phone', name: 'Phone number', icon: Phone },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-3">Connect your accounts</h1>
        <p className="text-gray-600 text-lg">Link your social or developer profiles</p>
      </div>

      <div className="space-y-4">
        {accounts.map(({ id, name, icon: Icon }) => {
          const isConnected = connectedAccounts.includes(id);
          return (
            <button
              key={id}
              onClick={() => onToggleAccount(id)}
              className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 ${
                isConnected
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 bg-white text-black hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl ${
                      isConnected ? 'bg-white' : 'bg-gray-100'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isConnected ? 'text-black' : 'text-gray-700'
                      }`}
                    />
                  </div>
                  <span className="text-lg font-semibold">{name}</span>
                </div>
                <div
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isConnected
                      ? 'bg-white text-black'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {isConnected ? 'Connected' : 'Connect'}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        You can skip this step or connect multiple accounts
      </p>
    </div>
  );
}
