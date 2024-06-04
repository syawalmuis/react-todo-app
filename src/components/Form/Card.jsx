function Card({ children, className = "" }) {
    return (
        <div className={"bg-white shadow-md border p-4 " + className}>
            {children}
        </div>
    );
}

export default Card;
