import { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia, mantleSepoliaTestnet } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
 
const wagmiConfig = createConfig({
  chains: [mantleSepoliaTestnet],
  connectors: [
    coinbaseWallet({
      appName: 'solarps',
    }),
  ],
  ssr: true,
  transports: {
    [mantleSepoliaTestnet.id]: http(),
  },
});
 
export function wallet({ children }: { children: ReactNode }) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}