interface MyButtonProps {
    children:string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type? : "button" | "submit" | "reset"
}
const MyButton = ({children, type = "button", onClick} : MyButtonProps) => {
    return <button type={type} onClick={onClick}>{children}</button>
};
export default MyButton;