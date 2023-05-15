interface Props {
  children: string;
  // optinal question mark
  // also we can set limitation for our recived value like below 
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}
// way of set default value for props
function Button({ children, color = "primary", onClick }: Props) {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
