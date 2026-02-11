import { useState } from "react";
import { mockPaymentMethods, mockPaymentProcess } from "../data/mockPayment";

export const usePayment = () => {
  const [processing, setProcessing] = useState(false);
  const [paymentMethods] = useState(mockPaymentMethods);

  const processPayment = (paymentData) => {
    setProcessing(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        const result = {
          success: true,
          transactionId: `TXN-${Date.now().toString().slice(-8)}`,
          ...mockPaymentProcess,
          ...paymentData,
          data: new Date().toISOString(),
        };

        setProcessing(false);
        resolve(result);
      }, 1200);
    });
  };

  return {
    processing,
    paymentMethods,
    processPayment,
  };
};
