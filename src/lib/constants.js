export const CURRENCIES = [
    {name: 'Indian Rupee', code: 'INR', symbol: '₹'}
]
export function getCurrencySymbol(code) {
    return CURRENCIES.find((cur)=> cur.code === code).symbol
}

export const TYPE_OF_ACCOUNTS = [
    'Cash account',
    'Bank account',
    'Credit card',
    'Asset account',
    'Liablities account'
]

export const DIRECTIONS = {
    credit: 'CREDIT',
    debit: 'DEBIT',
    transfer:'TRANSFER'
}

export const TRANSACTION_TYPES = {
    transaction: 'TRANSACTION',
    transfer: 'TRANSFER',
    split: 'SPLIT'
}