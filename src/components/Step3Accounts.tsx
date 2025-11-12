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
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-3">Connect your accounts</h1>
        <p className="text-gray-600 text-lg">Link your social or developer profiles</p>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accounts.map(({ id, name, icon: Icon }) => {
          const isConnected = connectedAccounts.includes(id);
          return (
            <button
              key={id}
              onClick={() => onToggleAccount(id)}
              className={`group w-full p-6 rounded-2xl border-2 transition-all duration-300 
                ${isConnected
                  ? 'border-black bg-black text-white shadow-lg scale-[1.02]'
                  : 'border-gray-300 bg-white text-black hover:border-gray-400 hover:shadow-md'
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isConnected
                        ? 'bg-white group-hover:bg-gray-100'
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 transition-all duration-300 ${
                        isConnected ? 'text-black' : 'text-gray-700'
                      }`}
                    />
                  </div>
                  <span className="text-lg font-semibold">{name}</span>
                </div>

                {/* Status badge */}
                <div
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isConnected
                      ? 'bg-white text-black'
                      : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
                  }`}
                >
                  {isConnected ? 'Connected' : 'Connect'}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="text-center text-sm text-gray-500 mt-8">
        You can skip this step or connect multiple accounts
      </p>
    </div>
  );
}
