import ConnectButton from './components/ConnectButton'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h4 className="text-4xl md:text-6xl font-bold text-white mb-8 shadow-text">
          Connect Your Wallet
        </h4>
        <div className="mt-8">
          <ConnectButton />
        </div>
      </div>
    </div>
  )
}