const prefixsTelkomsel = ['0852', '0853', '0811', '0812', '0813', '0821', '0822', '0823', '0851']
const prefixsIndosat = ['0855', '0856', '0857', '0858', '0814', '0815', '0816']
const prefixsXl = ['0817', '0818', '0819', '0859', '0877', '0878']
const prefixsAxis = ['0832', '0833', '0838']
const prefixsThree = ['0895', '0896', '0897', '0898', '0899']
const prefixsSmartfren = ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889']

export const validatePhoneNumber = (number) => {
    const prefixs = [prefixsTelkomsel, prefixsIndosat, prefixsXl, prefixsAxis, prefixsThree, prefixsSmartfren]
    return prefixs.some(prefixGroup => prefixGroup.some(prefix => number.startsWith(prefix)))
}

export const getBrandFromPhoneNumber = (number) => {
    if (validatePhoneNumber(number)) {
        if (prefixsTelkomsel.some(prefix => number.startsWith(prefix))) {
            return 'Telkomsel'
        } else if (prefixsIndosat.some(prefix => number.startsWith(prefix))) {
            return 'Indosat'
        } else if (prefixsXl.some(prefix => number.startsWith(prefix))) {
            return 'XL'
        } else if (prefixsAxis.some(prefix => number.startsWith(prefix))) {
            return 'Axis'
        } else if (prefixsThree.some(prefix => number.startsWith(prefix))) {
            return 'Tri'
        } else if (prefixsSmartfren.some(prefix => number.startsWith(prefix))) {
            return 'Smartfren'
        }
    }

    return null
}