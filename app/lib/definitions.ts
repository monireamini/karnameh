export interface Geo {
    /**
     * Latitude coordinate
     */
    lat: string

    /**
     * Longitude coordinate
     */
    lng: string
}

export interface Address {
    /**
     * Street address
     */
    street: string

    /**
     * Suite number
     */
    suite: string

    /**
     * City of residence
     */
    city: string

    /**
     * Zip code
     */
    zipcode: string

    /**
     * Geographical coordinates
     */
    geo: Geo
}

export interface Company {
    /**
     * Name of the company
     */
    name: string

    /**
     * Company catchphrase
     */
    catchPhrase: string

    /**
     * Business description
     */
    bs: string
}

export interface UserType {
    /**
     * User identifier
     */
    id: number

    /**
     * User's name
     */
    name: string

    /**
     * User's username
     */
    username: string

    /**
     * User's email address
     */
    email: string

    /**
     * User's address information
     */
    address: Address

    /**
     * User's phone number
     */
    phone: string

    /**
     * User's website
     */
    website: string

    /**
     * User's company information
     */
    company: Company
}
