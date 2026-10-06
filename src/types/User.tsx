
/* Adress level */
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

/* Profile level */
interface Profile {
    name: string;
    email: string;
    address: Address;
}

/* Settings level */
interface Notifications {
    email: boolean;
    push: boolean;
}

interface Settings {
    theme: 'light' | 'dark';
    notifications: Notifications;
}

/* Main User level */
interface User {
    id: number;
    username: string;
    profile: Profile;
    settings: Settings;
    roles: string[];
}

export type { User, Profile, Address, Settings, Notifications };