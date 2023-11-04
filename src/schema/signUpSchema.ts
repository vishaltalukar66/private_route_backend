export const signUpSchema = {

    body: {
        type: 'object',
        properties: {
            username: { type: 'string' },
            password: { type: 'string' },
            cpassword: { type: 'string' }
        },
        required: ['username', 'password', 'cpassword']
    }

}