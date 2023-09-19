import { useEffect, useState } from "react";

const Button = ({ children,  outline, fullWidth, size, color}) => {

  const [disabled, setDisabled] = useState(false);
  
  return (
    <>
      <button className={`Button ${outline} ${fullWidth} ${size} ${color}`} type="button" disabled={disabled}>{children}</button>
   </>
  );

}

Button.defaultProps = {
  size: 'medium',
  color: 'main'
};

export default Button;