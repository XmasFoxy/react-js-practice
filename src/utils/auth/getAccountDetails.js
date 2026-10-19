export function getAccountDetails(user) {
    return {
        email: user.email,
        createdAt: user.metadata.creationTime,
    };
}
