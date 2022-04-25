const KEY_SESSION_STORAGE_EMAIL = 'email';

class TokenService {
  getEmailToken(): string | null {
    return sessionStorage.getItem(KEY_SESSION_STORAGE_EMAIL);
  }

  setEmailToken(emailToken: string) {
    sessionStorage.setItem(KEY_SESSION_STORAGE_EMAIL, emailToken);
  }

  removeEmailToken() {
    sessionStorage.removeItem(KEY_SESSION_STORAGE_EMAIL);
  }
}

export default new TokenService();
