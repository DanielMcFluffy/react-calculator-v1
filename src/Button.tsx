interface ButtonProps {
  symbol: number | string;
  onClick: () => void;
  className: string;
  disabled?: boolean;
}

const Button = ({ symbol, onClick, className, disabled }: ButtonProps) => {
  return (
    <>
      <button
        onClick={() => onClick()}
        className={className}
        disabled={disabled}
      >
        {symbol}
      </button>
    </>
  );
};

export default Button;
