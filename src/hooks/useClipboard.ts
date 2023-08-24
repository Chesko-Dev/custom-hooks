import { useState } from "react";

export const useClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);
  
    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text).then(
        () => setIsCopied(true),
        () => setIsCopied(false)
      );
    };
  
    return [isCopied, copyToClipboard] as const;
  };
  