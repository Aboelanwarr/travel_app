import Image from "next/image";

interface IProps {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  varient: string;
  full?: boolean;
}

const Button = ({type,title,icon,varient,full}: IProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border-2 ${varient} ${full && 'w-full'}`} type={type}>
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button;