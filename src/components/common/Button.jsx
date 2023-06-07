
const Button = ({text}) => {
    return (
        <div>
            <button className="btn bg-secondary border-secondary hover:bg-white hover:text-primary text-white font-medium text-lg capitalize">{text}</button>
        </div>
    );
};

export default Button;