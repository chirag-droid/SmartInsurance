import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import type { PropsWithChildren } from 'react';

import { Env } from '@/libs/Env.mjs';

// Internal constants

export function WalletProvider({ children }: PropsWithChildren) {
  return (
    <AptosWalletAdapterProvider
      autoConnect
      dappConfig={{ network: Env.NEXT_PUBLIC_NETWORK }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
}
