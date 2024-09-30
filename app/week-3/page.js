import ItemList from './item-list';

const Page = () => {
    return (
        <main className='bg-green-100 h-screen'>
            <h1 className="text-xl font-bold underline">Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;