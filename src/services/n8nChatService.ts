export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot' | 'system';
  text: string;
  timestamp: string;
  status?: 'sending' | 'sent' | 'error';
}

const N8N_WEBHOOK_URL = 'https://lalitha-22.app.n8n.cloud/webhook/b3742f07-235e-44ad-bf9d-284cd7074a89/chat';

// Generate or retrieve persistent session ID for the patient
export const getChatSessionId = (): string => {
  const key = 'lifeline_n8n_chat_session_id';
  let sessionId = localStorage.getItem(key);
  if (!sessionId) {
    sessionId = 'session_' + Math.random().toString(36).substring(2, 12) + '_' + Date.now();
    localStorage.setItem(key, sessionId);
  }
  return sessionId;
};

export const sendN8nChatMessage = async (
  message: string,
  sessionId: string = getChatSessionId()
): Promise<string> => {
  // Common payload structure expected by n8n Chat Trigger and webhook nodes
  const payload = {
    action: 'sendMessage',
    sessionId,
    chatInput: message,
    message: message
  };

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`n8n webhook responded with status ${response.status}: ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await response.json();
      
      // Handle various n8n response structures
      if (typeof data === 'string') return data;
      if (data.output) return typeof data.output === 'string' ? data.output : JSON.stringify(data.output);
      if (data.text) return data.text;
      if (data.response) return data.response;
      if (data.message) return data.message;
      if (Array.isArray(data) && data.length > 0) {
        const first = data[0];
        if (first.output) return first.output;
        if (first.text) return first.text;
        if (first.message) return first.message;
        return JSON.stringify(first);
      }
      return JSON.stringify(data);
    } else {
      const text = await response.text();
      return text || 'Received response from Lifeline AI assistant.';
    }
  } catch (error: any) {
    console.error('Error calling n8n chatbot webhook:', error);
    throw error;
  }
};
