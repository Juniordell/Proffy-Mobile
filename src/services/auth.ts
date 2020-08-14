interface Response {
    token: string,
    user: {
        password: string,
        email: string
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'JSDHKJASK23FDS',
                user: {
                    email: 'junior@gmail.com',
                    password: '123456'
                }
            })
        }, 2000)
    })
}