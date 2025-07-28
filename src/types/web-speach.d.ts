// Extend the Window interface to include SpeechRecognition and webkitSpeechRecognition
interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition; // For Chrome/Edge compatibility
    SpeechSynthesisUtterance: typeof SpeechSynthesisUtterance;
    webkitSpeechSynthesisUtterance: typeof SpeechSynthesisUtterance; // Less common, but good to include
}

// Declare the SpeechRecognition interface (if not already in lib.d.ts)
// Most modern lib.d.ts files *do* include SpeechRecognition, but webkitSpeechRecognition is often missing.
// This ensures both are covered.
declare let SpeechRecognition: {
    prototype: SpeechRecognition;
    new(): SpeechRecognition;
};

// Also declare webkitSpeechRecognition specifically
declare  let webkitSpeechRecognition: {
    prototype: SpeechRecognition;
    new(): SpeechRecognition;
};

// Declare SpeechSynthesisUtterance if not already in lib.d.ts
declare let SpeechSynthesisUtterance: {
    prototype: SpeechSynthesisUtterance;
    new(text: string): SpeechSynthesisUtterance;
};
