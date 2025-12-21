// export const saveAuth = (state: any) => localStorage.setItem('auth', JSON.stringify(state));
// export const loadAuth = () => JSON.parse(localStorage.getItem('auth') || '{}')
// export const deleteAuth = () => localStorage.removeItem('auth');

export const saveAuth = (state: any) => localStorage.setItem('auth', JSON.stringify(state));
export const loadAuth = () => JSON.parse(localStorage.getItem('auth') || '{}');
export const deleteAuth = () => localStorage.removeItem('auth');