import React, {useState} from 'react';
import counterpartiesData, {Counterparty} from "../data/counterpartiesData";
import Table from "../components/table/Table";
import Modal from "../components/modal/Modal";
import Header from "../components/header/Header";

const App = () => {
    const [counterparties, setCounterparties] = useState<Counterparty[]>(counterpartiesData);
    const [formData, setFormData] = useState<Counterparty>({name: '', inn: '', address: '', kpp: ''});
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const handleAdd = () => {
        setFormData({name: '', inn: '', address: '', kpp: ''});
        setEditIndex(null);
        setModalOpen(true);
    };

    const handleEdit = (index: number) => {
        setFormData(counterparties[index]);
        setEditIndex(index);
        setModalOpen(true);
    };

    const handleDelete = (index: number) => {
        const updated = [...counterparties];
        updated.splice(index, 1);
        setCounterparties(updated);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
