export const getUserNameFromEmail = email => {
    if (!email) return;

    const actIndex = email.indexOf('@');

    if (actIndex === -1) {
        return email;
    }

    return email.substring(0, actIndex);
};
