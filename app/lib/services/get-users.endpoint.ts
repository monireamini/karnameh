import axios from 'axios'
import { UserType } from '@/app/lib/definitions'
import { showCustomToast } from '@/app/ui/toast/toast'

export const getUsersEndpoint = async (): Promise<UserType[]> => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )
        return response.data
    } catch (error) {
        showCustomToast(error?.message || 'Something went wrong!', 'error')
        throw error
    }
}
