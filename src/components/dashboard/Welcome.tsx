type WelcomeType = {
  user: string;
};

export default function Welcome({ user }: WelcomeType) {
  return (
    <div className="mb-4">
      <h1 className="text-[2rem] text-black font-bold">Resumo</h1>
      <span> Welcome, {user}!</span>
    </div>
  );
}
