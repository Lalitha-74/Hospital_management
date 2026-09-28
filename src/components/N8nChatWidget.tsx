import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  RefreshCw, 
  Sparkles, 
  ChevronDown, 
  Maximize2, 
  Minimize2,
  Trash2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { Language } from '../types';
import { HOSPITAL_INFO } from '../data/mockData';
import { ChatMessage, sendN8nChatMessage, getChatSessionId } from '../services/n8nChatService';

interface N8nChatWidgetProps {
  language: Language;
}

export const N8nChatWidget: React.FC<N8nChatWidgetProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const initialWelcomeText = language === 'te'
    ? `నమస్తే! నేను లైఫ్ లైన్ హాస్పిటల్ AI అసిస్టెంట్ (n8n ఆధారితం). నేను మీకు ఎలా సహాయపడగలను?\n\n• డాక్టర్ల సమయాలు & ఓపీ బుకింగ్\n• వైఎస్సార్ ఆరోగ్యశ్రీ & ఇన్సూరెన్స్ వివరాలు\n• మాస్టర్ హెల్త్ చెకప్ ప్యాకేజీలు\n• 24/7 అత్యవసర అంబులెన్స్ సేవలు`
    : `Namaste! I am the Lifeline Hospital AI Assistant powered by n8n.\n\nHow can I help you today? You can ask me about:\n• Specialist doctor timings & OPD tokens\n• Dr. YSR Aarogyasri 100% cashless eligibility\n• Master Health Checkup & Executive packages\n• 24/7 Emergency ambulance dispatch`;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: initialWelcomeText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener('open-n8n-chat', handleOpenEvent);
    return () => window.removeEventListener('open-n8n-chat', handleOpenEvent);
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  // Quick suggestion prompts
  const suggestions = language === 'te' ? [
    'ఆన్‌లైన్ ఓపీ ఎలా బుక్ చేయాలి?',
    'కార్డియాలజీ డాక్టర్ సమయాలు ఏమిటి?',
    'ఆరోగ్యశ్రీ కింద ఏ చికిత్సలు ఉచితం?',
    'మాస్టర్ హెల్త్ చెకప్ ఫీజు ఎంత?',
    '24/7 ఎమర్జెన్సీ నంబర్ ఇవ్వండి'
  ] : [
    'How do I book an online OP token?',
    'What are the Cardiology doctor timings?',
    'Is Dr. YSR Aarogyasri 100% cashless?',
    'Cost of Master Health Checkup package?',
    '24/7 Emergency Ambulance helpline'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    setErrorMessage(null);
    const userMsgId = 'msg-' + Date.now();
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const responseText = await sendN8nChatMessage(text);
      const botMsgId = 'msg-' + (Date.now() + 1);
      const newBotMsg: ChatMessage = {
        id: botMsgId,
        sender: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };
      setMessages(prev => [...prev, newBotMsg]);
    } catch (err: any) {
      setErrorMessage(
        err.message || 'Unable to connect to n8n webhook. Please ensure the n8n workflow is active.'
      );
      const fallbackMsg: ChatMessage = {
        id: 'msg-err-' + Date.now(),
        sender: 'bot',
        text: `I had trouble connecting to our n8n automation engine. \n\nFor instant assistance, you can also reach us directly:\n📞 Emergency / OPD: ${HOSPITAL_INFO.emergencyPhone}\n💬 WhatsApp Desk: ${HOSPITAL_INFO.whatsappNumber}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'error'
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (confirm(language === 'te' ? 'చాట్ చరిత్రను క్లియర్ చేయాలా?' : 'Clear chat history?')) {
      setMessages([
        {
          id: 'msg-welcome-' + Date.now(),
          sender: 'bot',
          text: initialWelcomeText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'sent'
        }
      ]);
      setErrorMessage(null);
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button (Bottom Right, placed cleanly alongside WhatsApp) */}
      {!isOpen && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-44 z-40 flex items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm shadow-2xl shadow-rose-950/80 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            title="Chat with Lifeline n8n AI Assistant"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-white" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              )}
            </div>
            <span className="tracking-wide">
              {language === 'te' ? 'AI అసిస్టెంట్ (n8n)' : 'Ask Lifeline AI'}
            </span>
            <span className="hidden md:inline text-[10px] uppercase font-mono bg-black/30 px-1.5 py-0.5 rounded border border-white/10 text-emerald-300">
              Online
            </span>
          </button>
        </div>
      )}

      {/* Main Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col bg-[#0c1220] border border-rose-500/40 rounded-3xl shadow-2xl overflow-hidden ${
            isExpanded
              ? 'inset-3 sm:inset-10'
              : 'bottom-4 sm:bottom-6 right-4 sm:right-6 w-[94vw] sm:w-[420px] h-[580px] max-h-[90vh]'
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-rose-950 via-slate-900 to-purple-950 border-b border-rose-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-purple-600 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#0a0e18] rounded-[14px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-rose-400" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0c1220]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-white text-sm">Lifeline AI Assistant</h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.2 rounded border border-emerald-500/30">
                    n8n webhook
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {language === 'te' ? 'ఆసుపత్రి సేవల సమాచారం & సలహాలు' : 'Instant Hospital Guidance & OPD Info'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition cursor-pointer"
                title="Clear Chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:inline p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition cursor-pointer"
                title={isExpanded ? 'Minimize' : 'Maximize'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition cursor-pointer"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Webhook Endpoint Banner */}
          <div className="bg-[#090d16] px-3 py-1.5 text-[10px] text-slate-400 border-b border-slate-800 flex items-center justify-between">
            <span className="flex items-center gap-1 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Target: lalitha-22.app.n8n.cloud</span>
            </span>
            <span className="text-slate-500 font-mono">Session ID: {getChatSessionId().slice(0, 14)}...</span>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-[#0c1220] to-[#090d16] no-scrollbar">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-tr-none shadow-md shadow-rose-950/40'
                        : msg.status === 'error'
                        ? 'bg-rose-950/60 border border-rose-500/50 text-rose-200 rounded-tl-none'
                        : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none shadow-lg'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div
                      className={`text-[10px] mt-1.5 text-right font-mono ${
                        isUser ? 'text-rose-200' : 'text-slate-500'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-xl bg-purple-600/30 text-purple-300 flex items-center justify-center shrink-0 mt-0.5 border border-purple-500/40">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Loader while waiting for n8n webhook response */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/30">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="rounded-2xl rounded-tl-none px-4 py-3 bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-[11px] text-slate-400 ml-2 font-mono">Connecting n8n workflow...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="p-2.5 bg-slate-900/80 border-t border-slate-800/80 overflow-x-auto flex items-center gap-1.5 no-scrollbar">
            <span className="text-[10px] uppercase font-bold text-slate-500 whitespace-nowrap pl-1">
              Suggestions:
            </span>
            {suggestions.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(sug)}
                disabled={isLoading}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#0c1220] hover:bg-rose-950/60 text-slate-300 hover:text-rose-300 text-[11px] border border-slate-700/80 transition cursor-pointer disabled:opacity-50"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input Box Form */}
          <div className="p-3 bg-[#0c1220] border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={
                  language === 'te'
                    ? 'మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి...'
                    : 'Ask about appointments, doctors, Aarogyasri...'
                }
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="p-2.5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold transition active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-rose-900/40"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2 text-center text-[10px] text-slate-500 flex items-center justify-center gap-2">
              <span>Powered by n8n Webhook Workflow</span>
              <span>·</span>
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                className="text-rose-400 hover:underline flex items-center gap-0.5"
              >
                <Phone className="w-2.5 h-2.5" />
                <span>24/7 Emergency Line</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
