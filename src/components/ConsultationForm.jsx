import React, { useState } from 'react';
import { Sparkles, Camera, Upload, Check, DollarSign, Sliders, Info, ArrowRight } from 'lucide-react';
import { SAMPLE_SELFIES } from '../data/mockData';

export default function ConsultationForm({ onSubmitForm, initialProfile = null }) {
  // Form State initialized with demo values or props
  const [selectedSelfie, setSelectedSelfie] = useState(
    initialProfile?.avatar || SAMPLE_SELFIES[0].avatar
  );
  const [ageRange, setAgeRange] = useState(initialProfile?.ageRange || '18-24');
  const [genderStyle, setGenderStyle] = useState(initialProfile?.gender || 'Feminine');
  const [occasion, setOccasion] = useState(initialProfile?.occasion || 'College');
  const [preferredStyle, setPreferredStyle] = useState(initialProfile?.style || 'Elegant');
  const [budget, setBudget] = useState(initialProfile?.budget || '2000');
  const [customBudget, setCustomBudget] = useState('');
  const [skinType, setSkinType] = useState(initialProfile?.skinType || 'Combination');
  const [selectedConcerns, setSelectedConcerns] = useState(
    initialProfile?.concerns || ['Uneven appearance', 'Oiliness']
  );

  const occasionsList = [
    { id: 'College', label: 'College / Farewell', icon: '🎓' },
    { id: 'Interview', label: 'Job Interview', icon: '💼' },
    { id: 'Party', label: 'Night Party', icon: '🍸' },
    { id: 'Wedding', label: 'Wedding Guest', icon: '💍' },
    { id: 'Casual', label: 'Casual Outing', icon: '☕' },
    { id: 'Festival', label: 'Festival / Festive', icon: '🪔' },
    { id: 'Date', label: 'Romantic Date', icon: '🌹' },
    { id: 'Other', label: 'Other Special Event', icon: '✨' }
  ];

  const stylesList = [
    { id: 'Simple', label: 'Simple & Natural', icon: '🌿' },
    { id: 'Traditional', label: 'Traditional / Ethnic', icon: '🥻' },
    { id: 'Modern', label: 'Modern Chic', icon: '⚡' },
    { id: 'Professional', label: 'Professional Power', icon: '👔' },
    { id: 'Trendy', label: 'Trendy & Bold', icon: '🔥' },
    { id: 'Elegant', label: 'Timeless Elegant', icon: '👑' }
  ];

  const budgetOptions = ['500', '1000', '2000', '5000', 'Custom'];
  const skinTypes = ['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive'];
  const concernsList = [
    'Dryness',
    'Oiliness',
    'Uneven appearance',
    'General skincare',
    'Sensitive redness',
    'Other'
  ];

  const [uploadedFileName, setUploadedFileName] = useState('');

  const handleCustomFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedSelfie(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleConcern = (concern) => {
    if (selectedConcerns.includes(concern)) {
      setSelectedConcerns(selectedConcerns.filter(c => c !== concern));
    } else {
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalBudget = budget === 'Custom' ? (customBudget || '2000') : budget;

    const profileData = {
      image: selectedSelfie,
      ageRange,
      gender: genderStyle,
      occasion,
      style: preferredStyle,
      budget: finalBudget,
      skinType,
      concerns: selectedConcerns
    };

    onSubmitForm(profileData);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header Title */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Step 1: AI Consultation & Profile
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit tracking-tight">
          Personalize Your <span className="gradient-text-rose">Glow Profile</span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base font-sans-body max-w-xl mx-auto">
          Upload your selfie, choose your occasion, and state your beauty budget. Our 8 AI Agents will immediately analyze your visual style geometry.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* SECTION 1: SELFIE UPLOAD / SAMPLE SELECTOR */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
              <Camera className="w-5 h-5 text-rose-400" />
              1. Upload Selfie or Select Preset
            </h3>
            <span className="text-xs text-rose-400 font-medium">Required for Face Analysis</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Upload Area */}
            <div className="md:col-span-6 space-y-4">
              <div className="border-2 border-dashed border-rose-500/30 hover:border-rose-500/60 rounded-2xl p-6 text-center bg-slate-900/40 hover:bg-slate-900/70 transition-all cursor-pointer relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCustomFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-12 h-12 mx-auto rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold text-white mb-1">
                  {uploadedFileName ? `Selected: ${uploadedFileName}` : 'Click to Upload Selfie'}
                </p>
                <p className="text-xs text-slate-400">
                  {uploadedFileName ? 'Click again to choose a different photo' : 'JPG, PNG, or WEBP (Clear front-facing photo)'}
                </p>
              </div>

              {/* Sample Presets Chips */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Or pick a sample selfie for instant test:
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {SAMPLE_SELFIES.map((sample) => (
                    <button
                      key={sample.id}
                      type="button"
                      onClick={() => setSelectedSelfie(sample.avatar)}
                      className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                        selectedSelfie === sample.avatar
                          ? 'border-rose-500 ring-2 ring-rose-500/30 scale-105'
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={sample.avatar} alt={sample.name} className="w-full h-full object-cover" />
                      {selectedSelfie === sample.avatar && (
                        <div className="absolute inset-0 bg-rose-500/30 flex items-center justify-center">
                          <Check className="w-5 h-5 text-white font-bold" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Preview Box */}
            <div className="md:col-span-6 flex flex-col items-center justify-center p-4 bg-slate-900/80 rounded-2xl border border-white/10">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Active Analysis Photo Preview
              </p>
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-rose-500/40 shadow-2xl shadow-rose-950/60">
                <img src={selectedSelfie} alt="Selected Selfie" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
              </div>
              <p className="text-xs text-emerald-400 font-semibold mt-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Ready for Visual AI Scan
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 2: DEMOGRAPHICS & OCCASION & STYLE PREFERENCE */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
              <Sliders className="w-5 h-5 text-purple-400" />
              2. Occasion & Style Preferences
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Age range */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Age Range (Optional)
              </label>
              <select
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-sm focus:border-rose-500 focus:outline-none"
              >
                <option value="18-24">18 - 24 years</option>
                <option value="25-34">25 - 34 years</option>
                <option value="35-44">35 - 44 years</option>
                <option value="45+">45+ years</option>
              </select>
            </div>

            {/* Gender / Style preference */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Style Aesthetics Preference
              </label>
              <select
                value={genderStyle}
                onChange={(e) => setGenderStyle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-white text-sm focus:border-rose-500 focus:outline-none"
              >
                <option value="Feminine">Feminine & Soft</option>
                <option value="Masculine">Masculine & Sharp</option>
                <option value="Non-Binary">Universal / Unisex</option>
              </select>
            </div>
          </div>

          {/* Occasion Cards */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Select Your Occasion
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {occasionsList.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setOccasion(item.id)}
                  className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                    occasion === item.id
                      ? 'bg-gradient-to-r from-rose-500/20 to-purple-600/20 border-rose-500 text-white shadow-lg shadow-rose-950/40'
                      : 'bg-slate-900/50 border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Style */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Select Preferred Aesthetic Style
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stylesList.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setPreferredStyle(item.id)}
                  className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                    preferredStyle === item.id
                      ? 'bg-gradient-to-r from-rose-500/20 to-purple-600/20 border-rose-500 text-white shadow-lg shadow-rose-950/40'
                      : 'bg-slate-900/50 border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3: BUDGET SELECTOR */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              3. Target Beauty Budget (₹)
            </h3>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              Budget Agent Auto-Balancing Enabled
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {budgetOptions.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setBudget(opt)}
                className={`py-3.5 px-4 rounded-2xl border text-sm font-bold transition-all text-center ${
                  budget === opt
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-950/40'
                    : 'bg-slate-900/50 border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                }`}
              >
                {opt === 'Custom' ? 'Custom Amount' : `₹${parseInt(opt, 10).toLocaleString('en-IN')}`}
              </button>
            ))}
          </div>

          {budget === 'Custom' && (
            <div className="pt-2 max-w-xs">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Enter Custom Budget (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 3500"
                value={customBudget}
                onChange={(e) => setCustomBudget(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-white text-sm focus:outline-none focus:border-emerald-400"
              />
            </div>
          )}
        </div>

        {/* SECTION 4: SKINCARE INFORMATION (SELF-REPORTED) */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
              <Info className="w-5 h-5 text-teal-400" />
              4. Self-Reported Skincare Information
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              GlowCare AI uses self-reported skincare information strictly for cosmetics & routine recommendations. We do not medically diagnose skin conditions.
            </p>
          </div>

          {/* Skin Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Your Self-Reported Skin Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {skinTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setSkinType(type)}
                  className={`py-3 px-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all text-center ${
                    skinType === type
                      ? 'bg-teal-500/20 border-teal-400 text-teal-300 shadow-lg shadow-teal-950/40'
                      : 'bg-slate-900/50 border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Main Concerns */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Main Skincare Concerns (Select all that apply)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {concernsList.map((concern) => (
                <button
                  type="button"
                  key={concern}
                  onClick={() => toggleConcern(concern)}
                  className={`p-3 rounded-2xl border text-xs sm:text-sm font-medium transition-all text-left flex items-center justify-between ${
                    selectedConcerns.includes(concern)
                      ? 'bg-rose-500/20 border-rose-500 text-rose-200'
                      : 'bg-slate-900/50 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{concern}</span>
                  {selectedConcerns.includes(concern) && (
                    <Check className="w-4 h-4 text-rose-400 font-bold" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl text-lg font-bold text-white gradient-btn-primary flex items-center justify-center gap-3 shadow-2xl shadow-rose-600/40 hover:scale-105 transition-all mx-auto"
          >
            <Sparkles className="w-6 h-6 text-amber-300 animate-spin" style={{ animationDuration: '5s' }} />
            <span>✨ Launch AI Face & Style Analysis</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

      </form>
    </section>
  );
}
