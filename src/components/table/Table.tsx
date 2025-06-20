import Row from "./Row";
import React from "react";
import {Counterparty} from "../../data/counterpartiesData";

type Props = {
    counterparties: Counterparty[];
    onDelete: (index: number) => void;
    onEdit: (index: number) => void;
}

const Table: React.FC<Props> = ({counterparties, onDelete, onEdit}) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full table-fixed text-sm text-left text-gray-500">
                <thead className="text-xs font-semibold text-gray-500 uppercase bg-gray-50">
                <tr className="border-b border-gray-200">
                    <th className="px-6 py-3">Наименование</th>
                    <th className="px-6 py-3">ИНН</th>
                    <th className="px-6 py-3">Адрес</th>
                    <th className="px-6 py-3">КПП</th>
                    <th className="px-6 py-3"></th>
                </tr>
                </thead>
                <tbody>
                {counterparties.map((counterparty, index) => (
                    <Row
                        key={index}
                        counterparty={counterparty}
                        onDelete={() => onDelete(index)}
                        onEdit={() => onEdit(index)}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Table;
