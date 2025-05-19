export default function Disclaimer() {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 sm:p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Disclaimer
        </h1>

        <div className="space-y-6 text-black">
          <div className="p-4 bg-white/5 rounded-lg border-l-4 border-blue-500">
            <p className="mb-4 leading-relaxed ">
              The tools and content provided on this website are intended solely
              for educational and informational purposes. The hedge bet
              calculator is designed to help users understand betting strategies
              and stake distribution principles. It is not intended for actual
              gambling use or for promoting betting behavior.
            </p>
          </div>

          <div className="p-4 bg-white/5 rounded-lg border-l-4 border-purple-500">
            <p className="mb-4 leading-relaxed">
              This calculator does not interact with or affect any external
              websites, including gambling platforms or services. It operates
              entirely within the user's browser and does not send or receive
              any data from third-party services or betting companies.
            </p>
          </div>

          <div className="p-4 bg-white/5 rounded-lg border-l-4 border-red-500">
            <p className="mb-4 leading-relaxed">
              We do not endorse, support, or affiliate with any gambling website
              or company. This tool is created with a focus on learning and
              analysis only.
            </p>
          </div>

          <div className="p-4 bg-white/5 rounded-lg border-l-4 border-yellow-500">
            <p className="mb-4 leading-relaxed">
              By using this website, you acknowledge that you understand and
              agree to use the information for personal educational purposes
              only. Any use of this tool to place actual bets is done at your
              own discretion and risk.
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border-l-4 border-yellow-500">
            <p className="mb-4 leading-relaxed">
              We are not responsible for any financial loss or legal
              consequences resulting from the use or misuse of this tool.
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border-l-4 border-yellow-500">
            <p className="mb-4 leading-relaxed">
              If you do not agree with any part of this disclaimer, please
              refrain from using this website.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
