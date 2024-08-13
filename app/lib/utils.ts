export function sortByField<T>(
    array: T[],
    field: keyof T | 'none',
    ascending: boolean = true
): T[] {
    return array.sort((a, b) => {
        const valueA = a[field]
        const valueB = b[field]

        if (valueA < valueB) {
            return ascending ? -1 : 1 // Ascending: -1, Descending: 1
        }
        if (valueA > valueB) {
            return ascending ? 1 : -1 // Ascending: 1, Descending: -1
        }
        return 0 // Equal values
    })
}
