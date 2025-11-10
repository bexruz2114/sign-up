import { useState } from 'react';
import { Upload, User } from 'lucide-react';

interface Step5ProfileProps {
  profileImage: string | null;
  bio: string;
  location: string;
  skills: string;
  onProfileImageChange: (image: string | null) => void;
  onBioChange: (bio: string) => void;
  onLocationChange: (location: string) => void;
  onSkillsChange: (skills: string) => void;
}

export default function Step5Profile({
  profileImage,
  bio,
  location,
  skills,
  onProfileImageChange,
  onBioChange,
  onLocationChange,
  onSkillsChange,
}: Step5ProfileProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      onProfileImageChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-3">Set your profile</h1>
        <p className="text-gray-600 text-lg">Customize your personal info</p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center">
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative w-32 h-32 rounded-full border-2 border-dashed transition-all duration-300 ${
              dragActive ? 'border-black bg-gray-50' : 'border-gray-300'
            }`}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-full">
                <User className="w-10 h-10 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500">Upload</span>
              </div>
            )}
            <label
              htmlFor="profile-image"
              className="absolute bottom-0 right-0 w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
            >
              <Upload className="w-5 h-5 text-white" />
            </label>
            <input
              id="profile-image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleImageUpload(e.target.files[0]);
                }
              }}
              className="hidden"
            />
          </div>
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-semibold text-black mb-2">
            Bio (Optional)
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => onBioChange(e.target.value)}
            placeholder="Tell us about yourself..."
            rows={4}
            className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-2xl outline-none focus:border-black transition-all duration-300 resize-none"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-black mb-2">
            Location (Optional)
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            placeholder="e.g. San Francisco, CA"
            className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-2xl outline-none focus:border-black transition-all duration-300"
          />
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-semibold text-black mb-2">
            Skills (Optional)
          </label>
          <input
            id="skills"
            type="text"
            value={skills}
            onChange={(e) => onSkillsChange(e.target.value)}
            placeholder="e.g. React, TypeScript, Node.js"
            className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-2xl outline-none focus:border-black transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
