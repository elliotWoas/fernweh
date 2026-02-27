import React, { useMemo, useState } from "react";

type AuthMode = "login" | "signup";

type AuthUser = {
  name: string;
  email: string;
};

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onAuthSuccess: (user: AuthUser) => void;
}

type StoredCredential = {
  name: string;
  email: string;
  password: string;
};

const CREDENTIAL_KEY = "fernweh_registered_user";

const readCredential = (): StoredCredential | null => {
  try {
    const raw = localStorage.getItem(CREDENTIAL_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredCredential;
  } catch {
    return null;
  }
};

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, onAuthSuccess }) => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const title = useMemo(
    () => (mode === "login" ? " اشتراک VIP فقط با ساخت اکانت کاربری" : "ثبت نام"),
    [mode]
  );

  if (!open) return null;

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const switchMode = (nextMode: AuthMode) => {
    setMode(nextMode);
    setError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("ایمیل و رمز عبور الزامی است.");
      return;
    }

    if (mode === "signup") {
      if (!name.trim()) {
        setError("نام الزامی است.");
        return;
      }

      if (password !== confirmPassword) {
        setError("رمز عبور و تکرار آن یکسان نیست.");
        return;
      }

      const credential: StoredCredential = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      };
      localStorage.setItem(CREDENTIAL_KEY, JSON.stringify(credential));
      onAuthSuccess({ name: credential.name, email: credential.email });
      resetForm();
      onClose();
      return;
    }

    const savedCredential = readCredential();
    if (!savedCredential) {
      setError("حسابی ثبت نشده. ابتدا ثبت نام کنید.");
      return;
    }

    const loginEmail = email.trim().toLowerCase();
    if (savedCredential.email !== loginEmail || savedCredential.password !== password) {
      setError("ایمیل یا رمز عبور اشتباه است.");
      return;
    }

    onAuthSuccess({ name: savedCredential.name, email: savedCredential.email });
    resetForm();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl rtl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-2 flex  justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button type="button" onClick={onClose} className="mb-2 -ml-4 text-gray-500 hover:text-gray-600">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "signup" && (
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="نام"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-right outline-none focus:border-blue-500"
            />
          )}

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="ایمیل"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-right outline-none focus:border-blue-500"
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="رمز عبور"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-right outline-none focus:border-blue-500"
          />

          {mode === "signup" && (
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="تکرار رمز عبور"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-right outline-none focus:border-blue-500"
            />
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg !bg-blue-600 py-2 text-white transition hover:bg-blue-700"
          >
            {mode === "login" ? "ورود" : "ثبت نام"}
          </button>
        </form>

        <button
          type="button"
          className="mt-3 w-full text-sm text-blue-700"
          onClick={() => switchMode(mode === "login" ? "signup" : "login")}
        >
          {mode === "login" ? "حساب ندارید؟ ثبت نام" : "حساب دارید؟ ورود"}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
