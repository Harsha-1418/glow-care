import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot } from 'lucide-react';

export default function AIChatAssistant({ activePlan, onUpdatePlanFromChat }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const defaultMessages = [
    {
      sender: 'bot',
      text: `Hello! I am your GlowCare AI Assistant ✨. I have loaded your active profile (${activePlan?.userProfile?.occasion || 'College Farewell'}, ${activePlan?.faceAnalysis?.shape || 'Oval'} face shape, ₹${activePlan?.userProfile?.budget || '2,000'} budget). How can I refine your look today?`
    }
  ];

  const [messages, setMessages] = useState(defaultMessages);
  const chatEndRef = useRef(null);

  const promptChips = [
    "What hairstyle should I choose?",
    "I have ₹1,500. Create a complete look.",
    "What should I wear to a wedding?",
    "Suggest a simple skincare routine.",
    "Change my look to traditional."
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend = null) => {
    const query = textToSend || inputMsg;
    if (!query.trim()) return;

    // Append user message
    const userMsgObj = { sender: 'user', text: query };
    setMessages(prev => [...prev, userMsgObj]);
    if (!textToSend) setInputMsg('');
    setIsTyping(true);

    // Process intelligence
    setTimeout(() => {
      let botReply = '';
      const lower = query.toLowerCase();

      if (lower.includes('hairstyle') || lower.includes('hair')) {
        botReply = `For an ${activePlan?.faceAnalysis?.shape || 'Oval'} face shape, my Hair Agent recommends: ${activePlan?.hair?.cut || 'Collarbone Layered Cut with Curtain Bangs'}. This frames your cheekbones perfectly while keeping styling time under 10 minutes!`;
      } else if (lower.includes('1500') || lower.includes('budget') || lower.includes('1,500')) {
        botReply = `Under a ₹1,500 budget, I have re-balanced your Glow Plan! I allocated ₹350 for Haircare, ₹450 for Tinted BB Cream, ₹450 for Hydrating Cleanser + SPF, and ₹250 for Rose Gold Huggie Hoops. Remaining: ₹0. Would you like me to update your dashboard plan?`;
        
        // Trigger live plan update for ₹1,500!
        if (onUpdatePlanFromChat) {
          onUpdatePlanFromChat({ budget: '1500' });
        }
      } else if (lower.includes('wedding')) {
        botReply = `For a Wedding occasion, our Fashion & Makeup Agents recommend an Organza Saree or Embroidered Anarkali in Royal Maroon/Gold tones paired with Kundan drop earrings and a warm berry lip finish! Should I update your current plan to Wedding Glam?`;
        if (onUpdatePlanFromChat && (lower.includes('change') || lower.includes('update') || lower.includes('wear'))) {
          onUpdatePlanFromChat({ occasion: 'Wedding', style: 'Traditional', budget: '5000' });
        }
      } else if (lower.includes('skincare') || lower.includes('routine')) {
        botReply = `For your self-reported ${activePlan?.userProfile?.skinType || 'Combination'} skin: Morning: Gentle Cleanser → Niacinamide Serum → Ceramide Hydrator → SPF 50. Evening: Micellar Wash → Rose Toner → Barrier Cream. (Non-medical cosmetic routine).`;
      } else if (lower.includes('traditional') || lower.includes('change my look')) {
        botReply = `✨ Done! I have updated your active Glow Plan to Traditional Silk Saree aesthetic with Kundan jewelry and warm ethnic makeup! Check your updated plan dashboard now.`;
        if (onUpdatePlanFromChat) {
          onUpdatePlanFromChat({ style: 'Traditional', occasion: 'Wedding', budget: '3000' });
        }
      } else {
        botReply = `I have analyzed your query against your ${activePlan?.faceAnalysis?.shape || 'Oval'} face geometry and ₹${activePlan?.userProfile?.budget || '2,000'} budget context. GlowCare AI recommends keeping your layered hair volume while pairing it with soft rose nude makeup.`;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-3.5 rounded-full font-bold text-white gradient-btn-primary flex items-center gap-2.5 shadow-2xl shadow-rose-600/50 hover:scale-105 transition-all group"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-amber-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span className="text-sm">GlowCare AI Assistant</span>
        </button>
      )}

      {/* Expanded Floating Chat Panel */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[420px] h-[580px] glass-modal rounded-3xl border border-white/20 bg-slate-950/95 shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          
          {/* Top Chat Bar */}
          <div className="p-4 bg-gradient-to-r from-rose-950/80 via-slate-900 to-purple-950/80 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-rose-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-outfit">GlowCare AI Assistant</h3>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active Context Synced
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-3 bg-slate-900/60 border-b border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
            {promptChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 border border-white/10 shrink-0 transition-all"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-rose-400" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white font-medium rounded-tr-none'
                      : 'bg-slate-900 border border-white/10 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-xl bg-rose-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-rose-400" />
                </div>
                <span className="animate-pulse">GlowCare AI is formulating styling advice...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-900/90 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about hair, outfit, budget, or skincare..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:outline-none focus:border-rose-500"
            />
            <button
              type="submit"
              disabled={!inputMsg.trim()}
              className="p-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 disabled:opacity-40 text-white font-bold transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
