const Anything = () => {
  return (
    <div className="bg-[#F1F3FF] py-20">
      <div className="container mx-auto px-4">
        {/* Text Section - improved spacing and responsiveness */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/MonitorIcon.svg" className="w-6" alt="Monitor Icon" />
            <p
              style={{
                background:
                  "linear-gradient(97deg, rgb(71, 82, 230) 0%, var(--token-f3e71d39-60d3-470b-86c0-689dedddff26, rgb(36, 196, 255)) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-semibold text-[#1F2329]"
            >
              Optimized for mobile
            </p>
          </div>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
            Anything. Anywhere. Anytime. Any device.
          </h2>
          <p className="text-center mx-auto max-w-2xl mt-4 text-[#646A73]">
            Lark helps enterprises plan and execute with effectiveness no matter
            where employees are. Use it on your phone or desk. Lark is for
            everyone and every role. Collaborate with cross-border colleagues
            without missing the point. Automate workflows to enhance efficiency.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full shadow-md">
              Try for free
            </button>
          </div>
        </div>

        {/* Card Section - fixed positioning issues */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Base Card */}
          <div className="relative">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <img src="/BaseIcon.svg" alt="Icon of base" />
                <h3 className="ml-3 font-medium text-gray-900">Base</h3>
              </div>
              <p className="text-[#646A73] mb-4">
                {
                  "Plan and track progress, from routines to projects. Automate content generation with OpenAI's integration."
                }
              </p>
            </div>
            <img
              src="/BaseImg.avif"
              alt="Base Image"
              className="w-full rounded-xl"
            />
          </div>

          {/* Messenger Card */}
          <div className="relative">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <img src="/Messenger.svg" alt="Icon of base" />
                <h3 className="ml-3 font-medium text-gray-900">Messenger</h3>
              </div>
              <p className="text-[#646A73] mb-4">
                {
                  "Turn chats into productivity hubs by scheduling meetings, assigning tasks, and approving - all within chat."
                }
              </p>
            </div>
            <img
              src="/MessengerImg.avif"
              alt="Base Image"
              className="w-full rounded-xl"
            />
          </div>

          {/* Approval Card */}
          <div className="relative">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <img src="/ApprovalIcon.svg" alt="Icon of base" />
                <h3 className="ml-3 font-medium text-gray-900">Approval</h3>
              </div>
              <p className="text-[#646A73] mb-4">
                {
                  "Speed up your process from days to hours with smart workflows that route, track, and notify approval completion."
                }
              </p>
            </div>
            <img
              src="/ApprovalImg.avif"
              alt="Base Image"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anything;
