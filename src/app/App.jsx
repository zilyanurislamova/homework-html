import {useState} from 'react';
import counterpartiesData from "../data/counterpartiesData";
import Table from "../components/table/Table";
import Modal from "../components/modal/Modal";
import Header from "../components/header/Header";

const App = () => {
    const [counterparties, setCounterparties] = useState(counterpartiesData);
    const [formData, setFormData] = useState({name: '', inn: '', address: '', kpp: ''});
    const [editIndex, setEditIndex] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAdd = () => {
        setFormData({name: '', inn: '', address: '', kpp: ''});
        setEditIndex(null);
        setModalOpen(true);
    };

    const handleEdit = (index) => {
        setFormData(counterparties[index]);
        setEditIndex(index);
        setModalOpen(true);
    };

    const handleDelete = (index) => {
        const updated = [...counterparties];
        updated.splice(index, 1);
        setCounterparties(updated);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = () => {
        if (editIndex !== null) {
            const updated = [...counterparties];
            updated[editIndex] = formData;
            setCounterparties(updated);
        } else {
            setCounterparties([...counterparties, formData]);
        }
        setModalOpen(false);
        setEditIndex(null);
        setFormData({name: '', inn: '', address: '', kpp: ''});
    };

    const handleCancel = () => {
        setModalOpen(false);
        setEditIndex(null);
        setFormData({name: '', inn: '', address: '', kpp: ''});
    };

    return (
        <div className="w-[1017px] h-screen mx-auto flex flex-col">
            <Header onAdd={handleAdd}/>

            <main className="flex-grow mt-4">
                <Table
                    counterparties={counterparties}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            </main>

            <footer className="bg-white text-center text-xs text-black font-medium p-2.5">
                © 2007–2024 ООО «Логнекс»
            </footer>

            <Modal
                isOpen={isModalOpen}
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
        </div>
    )
}

export default App;
