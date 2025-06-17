const Row = ({counterparty, onDelete, onEdit}) => {
    const {name, inn, address, kpp} = counterparty;

    return (
        <tr
            className="bg-white border-b border-gray-200"
            onDoubleClick={onEdit}
        >
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4">{inn}</td>
            <td className="px-6 py-4">{address}</td>
            <td className="px-6 py-4">{kpp}</td>
            <td className="px-6 py-4">
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-[3px] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3.5 py-2.5 text-center inline-flex items-center"
                    onClick={(e) => {
                        e.stopPropagation();  // чтобы не срабатывало на дабл клик
                        onDelete();
                    }}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
}

export default Row;
