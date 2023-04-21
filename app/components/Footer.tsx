const footerList = [
  "All Departments",
  "Store Directory",
  "Careers",
  "Our Company",
  "Sell on Walmart.com",
  "Product Recalls",
  "Accessibility",
  "Tax Exempt Program",
  "Get the Walmart App",
  "Sign up for email",
  "Safety Data Sheet",
  "Terms of User",
  "Privacy & Security",
];

const Footer = () => {
  return (
    <div className="w-full">
      <div className="py-10 flex items-center justify-center gap-4 flex-col">
        <p className="font-medium">We would like to here what you think!</p>
        <button className="w-36 h-8 border-[1px] border-blue bg-white rounded-full transition duration-300 hover:font-semibold hover:drop-shadow-lg">
          Give Feedback
        </button>
      </div>

      <div className="w-full bg-hoverBg text-white pt-4 pb-6">
        <div className="mx-auto max-w-7xl">
          <ul className="w-full flex flex-wrap gap-1 justify-center text-sm text-zinc-200">
            {footerList.map((item) => (
              <li
                className="hover:text-white duration-200 ml-2 cursor-pointer"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-center py-2">
            ©️ 2023 Shoppers.com, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
