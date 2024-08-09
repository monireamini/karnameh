import axios from 'axios'
import { UserType } from '@/app/lib/definitions'

export const getUsersEndpoint = async (): Promise<UserType[]> => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )
        return response.data
    } catch (error) {
        throw error
    }
}
