/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import { Wallet } from "@/wallet/WallletSelector";

export const useStakingInfo = (
  wallet: Wallet | undefined,
  contractId: string
) => {
  const [stakingInfo, setStakingInfo] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStakingInfo = useCallback(
    async (accountId: string) => {
      if (!wallet) {
        throw new Error("Wallet is not connected");
      }

      setLoading(true);
      setError(null);

      try {
        const result = await wallet.viewMethod({
          contractId,
          method: "get_staking_info",
          args: {
            staker_id: accountId,
          },
        });
        console.log("view staking token result", result);

        setStakingInfo(result);
      } catch (err: any) {
        if (err.message.includes("Staker not found")) {
          setError(
            "You haven't staked any tokens yet. Start staking to claim your rewards here."
          );
        } else {
          setError("Failed to fetch staking info");
        }
      } finally {
        setLoading(false);
      }
    },
    [wallet, contractId]
  );

  return {
    stakingInfo,
    loading,
    error,
    fetchStakingInfo,
  };
};
