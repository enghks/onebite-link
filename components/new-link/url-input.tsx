export default function UrlInput() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="url" className="text-sm font-medium text-zinc-700">
        링크
      </label>
      <input
        id="url"
        name="url"
        type="url"
        required
        placeholder="https://example.com"
        className="rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900"
      />
    </div>
  );
}
