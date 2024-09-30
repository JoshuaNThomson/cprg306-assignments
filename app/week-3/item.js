const Item = ({ item }) => {
    return (
        <div className="bg-green-200 w-64 flex flex-col shadow rounded my-3">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-base">Buy {item.quantity} in {item.category}</p>
        </div>
    );
};
export default Item;