
export interface LoginPayload {
    username: string,
    password: string,
}

export interface AuthState{
    validating: boolean,
    token: string | null,
    userName: string,
    password: string,
}

export interface LoginForm {
    userName: string, 
    password: string,
}

