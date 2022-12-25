export const isValidateAccount = (account) => {
  return /^[0-9a-z/]+$/.test(account)
}

export const isValidEmail = (email) =>
/^[a-zA-Z0-9.!#$%&'+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/igm.test(email);