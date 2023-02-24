export const inputs = [
    {
        id: 1,
        name: "fullname",
        type: "text",
        placeholder: "Full Name",
        label: "Full Name",
        errorMsg: "Name should only contain text value!"
    },
    {
        id: 2,
        name: "email",
        type: "text",
        placeholder: "Email",
        label: "Email",
        errorMsg: "Email should be in a proper format!"
    },
    {
        id: 3,
        name: "phone",
        type: "number",
        placeholder: "Phone",
        label: "Phone",
        errorMsg: "Phone number length should be 10!"
    },
    {
        id: 4,
        name: "pass",
        type: "password",
        placeholder: "Password",
        label: "Password",
        errorMsg: "Password should include at least 1 letter, 1 number and 1 special character and should be more than 8 characters!"
    },
    {
        id: 5,
        name: "confPass",
        type: "password",
        placeholder: "Confirm Password",
        label: "Confirm Password",
        errorMsg: "Password don't match!"
    }
]