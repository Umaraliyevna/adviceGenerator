import { useCallback, useEffect, useState } from "react";

type AdviceSlipType = {
  id: number;
  advice: string;
};

type AdviceSlipResponse = {
  slip?: AdviceSlipType;
  slips?: AdviceSlipType[];
};

function useAdvice() {
  const [advice, setAdvice] = useState < AdviceSlipType | null >(null);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLoader, setIsLoader] = useState<boolean>(false);

  const getRandomAdvice = useCallback(async (userPrompt?:string) => {
    setIsLoader(true);
    const response = await fetch(
      `https://api.adviceslip.com/advice${
        userPrompt ? `/search/${userPrompt}` : ""
      }`
    );

    const result: AdviceSlipResponse =
      await response.json();
    setIsLoader(false);

    if (result.slip) {
      setAdvice(result.slip || null);
    } else {
      setAdvice(result.slips?.[0] || null);
    }
  }, []);

  const showNextAdvice = useCallback(() => {
    getRandomAdvice();
    setIsSaved(false);
  }, [getRandomAdvice]);

  useEffect(() => {
    getRandomAdvice();
  }, []);

  return {
    advice,
    isLoader,
    getRandomAdvice,
    showNextAdvice,
    isSaved,
    setIsSaved,
  };
}

export default useAdvice;
