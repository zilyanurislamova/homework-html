const Modal = ({isOpen, formData, onChange, onSubmit, onCancel}) => {
    if (!isOpen) return null;

    return (
        <div
            className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            role="dialog"
            aria-modal="true"
        >
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Контрагент
                        </h3>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Наименование</label>
                                <input type="text" name="name" value={formData.name} onChange={onChange}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="ПАО Сбербанк" required/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">ИНН</label>
                                <input type="text" name="inn" value={formData.inn} onChange={onChange}
                                       placeholder="7707083893" pattern="\d{11}"
                                       maxLength="11"
                                       title="ИНН должен состоять из 11 цифр"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       required/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Адрес</label>
                                <input type="text" name="address" value={formData.address} onChange={onChange}
                                       placeholder="г.Москва, ул.Вавилова, д.19"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       required/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">КПП</label>
                                <input type="text" name="kpp" value={formData.kpp} onChange={onChange}
                                       placeholder="773601001" pattern="\d{9}"
                                       maxLength="9"
                                       title="КПП должен состоять из 9 цифр"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       required/>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Сохранить
                            </button>
                            <button type="button" onClick={onCancel}
                                    className="w-full text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Отменить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
