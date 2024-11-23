const features = [
  {
    title: "1. Quick Authorization",
    subtitle: "nstant, Secure Login to Get Started",
    description:
      "Log in with your social media account to grant access. We’ll only view your posts and nothing else—keeping your data secure and private!",
  },
  {
    title: "2. Post Selection",
    subtitle: "Choose Your Content: Auto or Manual Selection",
    description:
      "Once logged in, all your posts are displayed in one place. Pick Auto Listing to let our AI auto-select posts for Amazon, or use Manual Listing to handpick the specific content you want to turn into listings.",
  },
  {
    title: "3. AI-Powered Listing Creation",
    subtitle: "Let Our AI Craft Your Amazon Listings",
    description:
      "Our AI automatically structures each selected post as a complete Amazon listing, generating accurate descriptions, titles, and tags. For Auto Listing, this is done instantly, while Manual Listing lets you review each item before approval.",
  },
  {
    title: "3. Final Review & Upload",
    subtitle: "Make Finishing Touches and Publish",
    description:
      "Review and edit as needed. Add new images, adjust text, or fine-tune details to match your vision. Once satisfied, simply click Upload to publish your listings directly to Amazon.",
  },
];

export default function Features() {
  return (
    <>
      <div className="pt-20 h-full md:h-[100vh] flex flex-col itmes-start p-5 md:items-center justify-center w-full">
        <h1 className=" mb-5 text-start md:text-center text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          4-Step Process
        </h1>
        <div className="mx-auto w-full max-w-full px-5 py-5 md:px-40 md:py-20">
          <dl className="flex flex-col md:flex-row items-start justify-evenly gap-10">
            {features.map((item) => (
              <div
                key={item.title}
                className="col-span-full sm:col-span-2 lg:col-span-1"
              >
                <span className="rounded-lg bg-blue-50/50 px-3 py-1.5 font-semibold leading-4 tracking-tighter shadow-sm shadow-blue-500/20 ring-1 ring-blue-200/20 dark:bg-blue-900/20 dark:ring-blue-800/30 sm:text-sm">
                  <span className="bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent dark:from-blue-200 dark:to-blue-400">
                    {item.title}
                  </span>
                </span>
                <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
                  {item.subtitle}
                </dt>
                <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
