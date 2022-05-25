interface FooterProps {
  message: string;
}

export const Footer = ({ message }: FooterProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex overflow-x-hidden pb-2">
      <span className="font-semibold text-3xl">{message}</span>
    </div>
  );
};
