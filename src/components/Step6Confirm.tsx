import { motion } from "framer-motion";
import { User, Lock, MapPin, Code, Sparkles } from "lucide-react";

interface Step6ConfirmProps {
  formData: {
    role: string;
    username: string;
    suffix?: string;
    password?: string;
    location?: string;
    skills?: string;
    profileImage?: string;
  };
}

interface DisplayItem {
  label: string;
  icon: JSX.Element;
  value: string;
}

export default function Step6Confirm({ formData }: Step6ConfirmProps) {
  const getRoleLabel = (role: string) =>
    role === "job_seeker" ? "Job Seeker" : "Employer";

  const items: DisplayItem[] = [
    { label: "Role", icon: <User />, value: getRoleLabel(formData.role) },
    {
      label: "Username",
      icon: <User />,
      value: formData.username + (formData.suffix || ""),
    },
    { label: "Password", icon: <Lock />, value: "••••••••" },
  ];

  if (formData.location) {
    items.push({ label: "Location", icon: <MapPin />, value: formData.location });
  }
  if (formData.skills) {
    items.push({ label: "Skills", icon: <Code />, value: formData.skills });
  }

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-10 relative">
        <h1 className="text-4xl font-bold text-black mb-3 flex items-center justify-center gap-2">
          <Sparkles className="text-yellow-500 w-6 h-6 animate-spin-slow" />
          Review and Confirm
          <Sparkles className="text-yellow-500 w-6 h-6 animate-pulse" />
        </h1>
        <p className="text-gray-600 text-lg">
          Please review your information before completing registration
        </p>
      </div>

      <div className="bg-white rounded-3xl border-2 border-gray-200 overflow-hidden shadow-lg">
        {formData.profileImage && (
          <motion.div
            className="flex justify-center pt-8 pb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={formData.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 hover:scale-110 hover:shadow-[0_0_20px_#00000030] transition-all duration-300"
            />
          </motion.div>
        )}

        <div className="divide-y divide-gray-200">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="px-8 py-6 hover:bg-gray-50 transition-colors group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-black group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-black group-hover:text-black/90">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
