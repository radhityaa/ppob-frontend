const FormatCurrency = (amount) => {
    console.log(amount);
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(amount)
}

export default FormatCurrency