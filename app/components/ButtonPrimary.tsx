interface ButtonPrimaryProps {
  btnText: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ btnText }) => {
  return (
    <button className="w-20 h-7 text-sm font-semibold rounded-full bg-blue text-white hover:bg-[#004f9a duration-3000 transition]">
      {btnText}
    </button>
  );
};

export default ButtonPrimary;
