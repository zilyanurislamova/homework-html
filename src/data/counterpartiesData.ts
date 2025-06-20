export type Counterparty = {
    name: string;
    inn: string;
    address: string;
    kpp: string;
}

const counterpartiesData: Counterparty[] = [
    {
        name: 'ООО "Покупатель"',
        inn: '12345678945',
        address: 'г.Москва, ул.Арбат, д.10',
        kpp: '773601002',
    },
    {
        name: 'ООО "Поставщик"',
        inn: '77365709010',
        address: 'г.Москва, пр.Юбилейный, д.47',
        kpp: '773601001',
    },
    {
        name: 'Розничный покупатель',
        inn: '12312312345',
        address: 'г.Москва, пр.Мира, д.42',
        kpp: '773601003',
    },
];

export default counterpartiesData;
